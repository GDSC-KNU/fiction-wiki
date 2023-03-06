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
      const responseText = await fetch(prompt);
      const htmlString = await responseText.text();
      const $ = cheerio.load(htmlString);
      const subTitle = $(
        ".text-wrap > div > div.text-head > h3 > span.content-wrap"
      ).text();
      const nextUrl = $("#j_chapterNext").attr("href");
      const prevUrl = $("#j_chapterPrev").attr("href");

      //////////////////
      const pElements = $("div.read-content.j_readContent").find("p"); // select all <p> elements inside the element with ID j_4631519

      //원문배열
      let originalTextArray = await Promise.all(
        pElements
          .map(async (index: any, element: any) => {
            let rawText = $(element).text().trim();
            return rawText || " ";
          })
          .get()
      );

      originalTextArray.push(subTitle);

      const clientId = process?.env.PAPAGO_CLIENT_ID;
      const clientSecret = process?.env.PAPAGO_CLIENT_SECRET;
      const customDict = process?.env.PAPAGO_CUSTOM_DICT;
      const apiUrl = process?.env.PAPAGO_API_URL;

      const papagoTranslate = async (input: string) => {
        // let temp = "";
        // await fetch(
        //   "https://naveropenapi.apigw.ntruss.com/nmt/v1/translation",
        //   {
        //     method: "POST",
        //     body: JSON.stringify({
        //       text: JSON.stringify(input),
        //       source: "zh-CN",
        //       target: "ko",
        //       glossaryKey: customDict,
        //     }),
        //     headers: {
        //       "Content-Type": "application/json",
        //       "X-NCP-APIGW-API-KEY-ID": process?.env.PAPAGO_CLIENT_ID || "",
        //       "X-NCP-APIGW-API-KEY": process?.env.PAPAGO_CLIENT_SECRET || "",
        //     },
        //   }
        // )
        //   .then((res) => res.json())
        //   .then((data) => {
        //     temp = data?.message?.result?.translatedText;
        //   });

        // return temp;

        return new Promise<string>((resolve, reject) => {
          fetch("https://naveropenapi.apigw.ntruss.com/nmt/v1/translation", {
            method: "POST",
            body: JSON.stringify({
              text: input,
              source: "zh-CN",
              target: "ko",
              glossaryKey: customDict,
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
    // console.log(cache);
    if (cache) {
      let {
        subTitle,
        nextUrl,
        prevUrl,
        originalTextArray,
        translatedTextArray,
      } = await cache;

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
        { ex: 36000 }
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
