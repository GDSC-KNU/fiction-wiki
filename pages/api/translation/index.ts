import { NextApiRequest, NextApiResponse } from "next";
// import { Configuration, OpenAIApi } from "openai";
// const cheerio = require("cheerio");
import cheerio from "cheerio";
import { TranslationServiceClient } from "@google-cloud/translate";

type ResponseData = {
  text: string;
  subTitle: string;
  nextUrl: string;
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

    const location = "global";
    // const text = ["Hello world", "My name is Jeff", "Hello friend"];
    // const target = "The target language, e.g. ru";

    const translationClient = new TranslationServiceClient({
      credentials: {
        type: "service_account",
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID_TRANSLATION,
        private_key: JSON.parse(process.env.GOOGLE_PRIVATE_KEY || ""),
      },
    });
    // console.log("after making translation client");

    // {
    //   credentials: {
    //     type: "service_account",
    //     client_email: process.env.GOOGLE_CLIENT_EMAIL,
    //     client_id: process.env.GOOGLE_CLIENT_ID_TRANSLATION,
    //     private_key: process.env.GOOGLE_PRIVATE_KEY,
    //   },
    // }

    // {
    //   credentials: {
    //     type: process.env.GOOGLE_TYPE,
    //     private_key: process.env.GOOGLE_PRIVATE_KEY,
    //     client_email: process.env.GOOGLE_CLIENT_EMAIL,
    //     client_id: process.env.GOOGLE_CLIENT_ID_TRANSLATION,
    //   },
    //   projectId_id: process.env.GOOGLE_PROJECT_ID,
    // }

    const googleTranslator = async () => {
      // Construct request
      const request = {
        parent: `projects/${process?.env?.GOOGLE_PROJECT_ID}/locations/${location}`,
        contents: originalTextArray,
        mimeType: "text/plain", // mime types: text/plain, text/html
        sourceLanguageCode: "zh-CN",
        targetLanguageCode: "ko",
      };

      // console.log("before fetching");
      // RESPONSE
      const [response] = await translationClient.translateText(request);
      // console.log(response);
      let result = [];
      if (response.translations) {
        for (const translation of response.translations) {
          result.push(translation.translatedText);
        }
      }
      return result;
    };

    // [END translate_translate_text]

    let translatedTextArray = await googleTranslator();
    // console.log(translatedTextArray);
    // googleTranslate(["Hello world", "My name is Jeff", "Hello friend"]);

    // let gTranslatedTextArray = translate([
    //   "안녕하세요",
    //   "그런데요",
    //   "안녕히가세요",
    // ]);

    //번역배열
    // let translatedTextArray = await Promise.all(
    //   originalTextArray.map(async (index: any, item: any) => {
    //     let translated = papagoTranslate(index);
    //     return translated;
    //   })
    // );

    // #chapter-21213126 > div > div.text-head > h3 > span.content-wrap
    // console.log(subTitle);
    return res.status(200).json({
      text: "ok",
      subTitle: subTitle || "",
      nextUrl: nextUrl || "",
      texts: [originalTextArray, translatedTextArray],
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      text: "no ok",
      subTitle: "",
      nextUrl: "",
      texts: [[""], [""]],
    });
  }
}
