import { NextApiRequest, NextApiResponse } from "next";
// import { Configuration, OpenAIApi } from "openai";
// const cheerio = require("cheerio");
import cheerio from "cheerio";
// import { TranslationServiceClient } from "@google-cloud/translate";
import { Redis } from "@upstash/redis";

type ResponseData = {
  subTitle: string;
  nextUrl?: string;
  prevUrl?: string;
  originalTextArray: string[];
  translatedTextArray: string[];
};

// subTitle,
// nextUrl,
// prevUrl,
// originalTextArray,
// translatedTextArray,

interface GenerateNextApirequest extends NextApiRequest {
  body: {
    prompt: string;
  };
}

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(
  req: GenerateNextApirequest,
  res: NextApiResponse<ResponseData>
) {
  const prompt = req.body.prompt;
  // console.log(prompt);
  try {
    if (!prompt || prompt === "") {
      return new Response("Plase send your prompt", { status: 400 });
    }

    const terminator = async () => {
      const extractor = async (url: string) => {
        const responseText = await fetch(prompt);

        let paragraphs;
        let subTitle = "";
        let nextUrl = "";
        let prevUrl = "";
        let originalTextArray = [""];

        if (prompt.startsWith("https://read.qidian.com/chapter")) {
          let htmlString = await responseText.text();
          let $ = cheerio.load(htmlString);
          subTitle = $(
            ".text-wrap > div > div.text-head > h3 > span.content-wrap"
          ).text();
          nextUrl = $("#j_chapterNext").attr("href") || "";
          nextUrl = nextUrl.includes("javascript:void(0)")
            ? ""
            : `https:` + nextUrl || "";
          prevUrl = $("#j_chapterPrev").attr("href") || "";
          prevUrl = prevUrl.includes("javascript:void(0)")
            ? ""
            : `https:` + prevUrl || "";

          //////////////////
          paragraphs = $("div.read-content.j_readContent").find("p");
          originalTextArray = await Promise.all(
            paragraphs
              .map(async (index: any, element: any) => {
                let rawText = $(element).text().trim();

                return rawText || " ";
              })
              .get()
          );
        } else if (prompt.startsWith("https://www.uukanshu.com/")) {
          const buffer = await responseText.arrayBuffer();
          const decoder = new TextDecoder("gbk");
          const htmlString = decoder.decode(buffer);
          const $ = cheerio.load(htmlString);

          const hasBr = $("#contentbox").find("br").length > 0;
          if (hasBr) {
            $(".ad_content").remove();
            $("#contentbox > p").remove();
            paragraphs = $("#contentbox").html();
            paragraphs = paragraphs?.split("<br>");
            originalTextArray = paragraphs
              ?.map((element: string) => {
                let rawText = element.replace(/&nbsp;/g, "").trim();
                return rawText;
              })
              .filter((str) => str !== "") || [""];
            // console.log(originalTextArray);
          } else {
            paragraphs = $("#contentbox").find("p");
            originalTextArray = await Promise.all(
              paragraphs
                .map(async (index: any, element: any) => {
                  let rawText = $(element).text().trim();

                  return rawText.toString() || " ";
                })
                .get()
            );
          }

          subTitle = $(".h1title").text();
          nextUrl = $("#next").attr("href") || "";
          nextUrl = !nextUrl.startsWith("/b/")
            ? ""
            : `https://www.uukanshu.com` + nextUrl;
          prevUrl = $("#prev").attr("href") || "";
          prevUrl = !prevUrl.startsWith("/b/")
            ? ""
            : `https://www.uukanshu.com` + prevUrl;
        } else if (prompt.startsWith("https://www.aixdzs.com/read")) {
          let htmlString = await responseText.text();
          let $ = cheerio.load(htmlString);
          let curUrl = prompt;
          const lastSlashIndex = curUrl.lastIndexOf("/");
          let curUrlBase = curUrl.substring(0, lastSlashIndex);
          subTitle = $("h1").text();
          nextUrl = $("div.link a:nth-child(3)").attr("href") || "";
          nextUrl = nextUrl.endsWith("/")
            ? ""
            : curUrlBase + "/" + (nextUrl || "");
          prevUrl = $("div.link a:nth-child(1)").attr("href") || "";
          prevUrl = prevUrl.endsWith("/")
            ? ""
            : curUrlBase + "/" + (prevUrl || "");

          //////////////////
          paragraphs = $(".content").find("p");
          originalTextArray = await Promise.all(
            paragraphs
              .map(async (index: any, element: any) => {
                let rawText = $(element).text().trim();
                return rawText || " ";
              })
              .get()
          );
        } else {
          // console.log("");
        }

        return { subTitle, nextUrl, prevUrl, originalTextArray };
      };

      const { subTitle, nextUrl, prevUrl, originalTextArray } = await extractor(
        prompt
      );

      //원문배열

      originalTextArray.push(subTitle);

      const papagoTranslate = async (input: string) => {
        return new Promise<string>((resolve, reject) => {
          fetch("https://naveropenapi.apigw.ntruss.com/nmt/v1/translation", {
            method: "POST",
            body: JSON.stringify({
              text: input,
              source: "zh-CN",
              target: "ko",
              // replaceInfo: {
              //   infos: [
              //     { begin: 0, length: 4 },
              //     { begin: 5, length: 4, str: "test" },
              //   ],
              // },
              glossaryKey: process?.env.PAPAGO_CUSTOM_DICT,
            }),
            headers: {
              "Content-Type": "application/json",
              "X-NCP-APIGW-API-KEY-ID": process?.env.PAPAGO_CLIENT_ID || "",
              "X-NCP-APIGW-API-KEY": process?.env.PAPAGO_CLIENT_SECRET || "",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              resolve(data?.message?.result?.translatedText || "");
            })
            .catch((error) => {
              reject(error);
            });
        });
      };

      const translatedTextArray = await Promise.all(
        originalTextArray.map((item) => papagoTranslate(item))
      );

      return {
        originalTextArray,
        translatedTextArray,
        subTitle,
        nextUrl,
        prevUrl,
      };
    };

    let cache: any = await redis.get(prompt);
    // redis.del(prompt);
    // console.log(cache);
    if (cache) {
      let {
        subTitle,
        nextUrl,
        prevUrl,
        originalTextArray,
        translatedTextArray,
      } = await cache;
      // console.log("cached  ver");
      return res.status(200).json({
        subTitle,
        nextUrl,
        prevUrl,
        originalTextArray,
        translatedTextArray,
      });
    } else {
      // console.log("no cache");
      const {
        subTitle,
        nextUrl,
        prevUrl,
        originalTextArray,
        translatedTextArray,
      } = await terminator();

      redis.set(
        prompt,
        JSON.stringify({
          subTitle,
          prevUrl,
          nextUrl,
          originalTextArray,
          translatedTextArray,
        }),
        { ex: 360000 }
      );

      return res.status(200).json({
        subTitle,
        nextUrl,
        prevUrl,
        originalTextArray,
        translatedTextArray,
      });
    }

    //  await translateTextWithGlossary();
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      subTitle: "",
      nextUrl: "",
      prevUrl: "",
      originalTextArray: [""],
      translatedTextArray: [""],
    });
  }
}
