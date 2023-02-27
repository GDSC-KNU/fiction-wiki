import { NextApiRequest, NextApiResponse } from "next";
// import { Configuration, OpenAIApi } from "openai";
const cheerio = require("cheerio");

type ResponseData = {
  text: string;
  subTitle: string;
  texts: [Array<any>, Array<any>];
};

interface GenerateNextApirequest extends NextApiRequest {
  body: {
    prompt: string;
  };
}

// const configuration = new Configuration({
//   organization: process.env.ORGANIZATION_KEY,
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

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

    const clientId = process?.env.PAPAGO_CLIENT_ID;
    const clientSecret = process?.env.PAPAGO_CLIENT_SECRET;
    const customDict = process?.env.PAPAGO_CUSTOM_DICT;
    const apiUrl = process?.env.PAPAGO_API_URL;

    let papagoTranslate = async (input: string) => {
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

    //////////////////
    const pElements = await $("div.read-content.j_readContent").find("p"); // select all <p> elements inside the element with ID j_4631519

    ////원문배열
    let originalTextArray = await Promise.all(
      pElements
        .map(async (index: any, element: any) => {
          let rawText = $(element).text().trim();
          return rawText;
        })
        .get()
    );
    // console.log(originalTextArray);

    //번역배열
    let translatedTextArray = await Promise.all(
      originalTextArray.map(async (index: any, item: any) => {
        let translated = papagoTranslate(index);
        return translated;
      })
    );

    // console.log(translatedTextArray);

    // const textArray = await Promise.all(
    //   pElements
    //     .map(async (index: any, element: any) => {
    //       let rawText = await $(element).text().trim();
    //       return [rawText, await papagoTranslate(rawText)]; // return the text content of each <p> element
    //     })
    //     .get()
    // );

    const subTitle = $("h3.j_chapterName:first-child").text();

    ///////////

    res.status(200).json({
      text: "ok",
      subTitle: subTitle || "",
      texts: [originalTextArray, translatedTextArray],
    });
  } catch (e) {
    // console.log("cheerio error");
  }
}

// export const config = {
//   runtime: "edge", // this is a pre-requisite
//   regions: ["icn1"], // only execute this function on iad1
// };
