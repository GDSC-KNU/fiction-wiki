import { NextApiRequest, NextApiResponse } from "next";
// import { Configuration, OpenAIApi } from "openai";
const cheerio = require("cheerio");
const { TranslationServiceClient } = require("@google-cloud/translate");

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
    // console.log(nextUrl);
    //////////////////////////////////////////////////////////////

    // const clientId = process?.env.PAPAGO_CLIENT_ID;
    // const clientSecret = process?.env.PAPAGO_CLIENT_SECRET;
    // const customDict = process?.env.PAPAGO_CUSTOM_DICT;
    // const apiUrl = process?.env.PAPAGO_API_URL;

    // let papagoTranslate = async (input: string) => {
    //   let temp = "";
    //   await fetch(apiUrl || "", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       text: JSON.stringify(input),
    //       source: "zh-CN",
    //       target: "ko",
    //       glossaryKey: customDict,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //       "X-NCP-APIGW-API-KEY-ID": clientId || "",
    //       "X-NCP-APIGW-API-KEY": clientSecret || "",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       temp = data?.message?.result?.translatedText;
    //     });

    //   return temp;
    // };

    //////////////////
    const pElements = await $("div.read-content.j_readContent").find("p"); // select all <p> elements inside the element with ID j_4631519

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

    const translationClient = new TranslationServiceClient();

    const googleTranslator = async () => {
      // Construct request
      const request = {
        parent: `projects/${process?.env?.GOOGLE_PROJECT_ID}/locations/${location}`,
        contents: originalTextArray,
        mimeType: "text/plain", // mime types: text/plain, text/html
        sourceLanguageCode: "zh-CN",
        targetLanguageCode: "ko",
      };

      // Run request
      const [response] = await translationClient.translateText(request);
      // console.log(response);
      let result = [];
      for (const translation of response.translations) {
        result.push(translation.translatedText);
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
      nextUrl: nextUrl,
      texts: [originalTextArray, translatedTextArray],
    });
  } catch (e) {
    // console.log("cheerio error");
    return res.status(500);
  }
}
