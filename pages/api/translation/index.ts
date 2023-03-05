import { NextApiRequest, NextApiResponse } from "next";
// import { Configuration, OpenAIApi } from "openai";
// const cheerio = require("cheerio");
import cheerio from "cheerio";
import { TranslationServiceClient } from "@google-cloud/translate";

type ResponseData = {
  text: string;
  subTitle: string;
  urls: string[];
  texts: [Array<any>, Array<any>];
};

interface GenerateNextApirequest extends NextApiRequest {
  body: {
    prompt: string;
  };
}

export default async function handler(
  req: GenerateNextApirequest,
  res: NextApiResponse<ResponseData>
) {
  const prompt = req.body.prompt;

  try {
    if (!prompt || prompt === "") {
      return new Response("Plase send your prompt", { status: 400 });
    }

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
      let temp = "";
      await fetch(apiUrl || "", {
        method: "POST",
        body: JSON.stringify({
          text: JSON.stringify(input),
          source: "zh-CN",
          target: "ko",
          glossaryKey: customDict,
        }),
        headers: {
          "Content-Type": "application/json",
          "X-NCP-APIGW-API-KEY-ID": clientId || "",
          "X-NCP-APIGW-API-KEY": clientSecret || "",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          temp = data?.message?.result?.translatedText;
        });

      return temp;
    };

    const translateArray = async () => {
      let result: string[] = [];
      // const translatedResult = await Promise.all(
      //   originalTextArray.map(async (item) => {
      //     const temp = await papagoTranslate(item)
      //     result.push(temp);
      //   })
      // );

      await originalTextArray.reduce(async (prev, next) => {
        await prev;
        const temp = await papagoTranslate(next);
        result.push(temp);
      }, Promise.resolve());
      return result;
    };

    let translatedTextArray = await translateArray();
    //  await translateTextWithGlossary();
    return res.status(200).json({
      text: "ok",
      subTitle: subTitle || "",
      urls: [nextUrl || "", prevUrl || ""],
      texts: [originalTextArray, translatedTextArray],
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      text: "no ok",
      subTitle: "",
      urls: [""],
      texts: [[""], [""]],
    });
  }
}
