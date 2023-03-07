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
          prevUrl = $("#j_chapterPrev").attr("href") || "";

          //////////////////
          paragraphs = $("div.read-content.j_readContent").find("p"); // select all <p> elements inside the element with ID j_4631519
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

          paragraphs = $("#contentbox").find("p");

          originalTextArray = await Promise.all(
            paragraphs
              .map(async (index: any, element: any) => {
                let rawText = $(element).text().trim();

                return rawText.toString() || " ";
              })
              .get()
          );
          subTitle = $(".h1title").text();
          nextUrl = `https://www.uukanshu.com/` + $("#next").attr("href") || "";
          prevUrl = `https://www.uukanshu.com/` + $("#prev").attr("href") || "";
        } else if (prompt.startsWith("https://www.aixdzs.com/read")) {
          // const buffer = await responseText.arrayBuffer();
          // const decoder = new TextDecoder("gbk");
          // const htmlString = decoder.decode(buffer);
          // const $ = cheerio.load(htmlString);
          // paragraphs = $(".content").find("p");
          // originalTextArray = await Promise.all(
          //   paragraphs
          //     .map(async (index: any, element: any) => {
          //       let rawText = $(element).text().trim();
          //       // console.log(rawText);
          //       return rawText.toString() || " ";
          //     })
          //     .get()
          // );
          // subTitle = $(".h1title").text();
          // nextUrl = $("#next").attr("href") || "";
          // prevUrl = $("#prev").attr("href") || "";
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

      // const translateArray = async () => {
      //   let result: string[] = [];
      //   const translatedResult2 = await Promise.all(
      //     originalTextArray.map((item,i) => papagoTranslate(item))
      //   );

      //   await originalTextArray.reduce(async (prev, next) => {
      //     await prev;
      //     const temp = await papagoTranslate(next);
      //     result.push(temp);
      //   }, Promise.resolve());
      //   return result;
      // };

      // let translatedTextArray = await translateArray();

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
    redis.del(prompt);
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
