import { NextApiRequest, NextApiResponse } from "next";
// import { Configuration, OpenAIApi } from "openai";
const cheerio = require("cheerio");

type ResponseData = {
  text: string;
  subTitle: string;
  originalTextArray: any;
  translatedTextArray: [string];
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

    // const paragraphs = $("#j_4631519").find("p").text().slice(0, 200);

    // const paragraphs2 = $("#j_4631519").find("p");
    // const textArray = paragraphs2
    //   .map((item: any, i: any) => {
    //     return $(item).text(); // return the text content of each <p> element
    //   })
    //   .get();
    // console.log(subTitle);

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

    const pElements = $("div.read-content.j_readContent").find("p"); // select all <p> elements inside the element with ID j_4631519

    const textArray = await Promise.all(
      pElements
        .map(async (index: any, element: any) => {
          let rawText = await $(element).text().trim();
          let translated = await papagoTranslate(rawText);
          return [rawText, translated]; // return the text content of each <p> element
        })
        .get()
    );

    const subTitle = $("h3.j_chapterName:first-child").text();
    // console.log(subTitle);
    // console.log(textArray);

    // Do something with the scraped data

    // console.log(subTitle);
    // console.log("yes");
    // console.log(paragraphs);

    // const aiResult = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt:
    //     paragraphs +
    //     `, translate this chinese texts to korean, with it's original text line by line`,
    //   temperature: 0.7,
    //   top_p: 1,
    //   frequency_penalty: 0,
    //   presence_penalty: 0,
    //   max_tokens: 2048,
    //   n: 1,
    // });

    // const papagoResponse = await fetch(apiUrl, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     text: JSON.stringify(textArray.join(" ")),
    //     source: "zh-CN",
    //     target: "ko",
    //     glossaryKey: customDict,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //     "X-NCP-APIGW-API-KEY-ID": clientId,
    //     "X-NCP-APIGW-API-KEY": clientSecret,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => data);

    // const response = textArray;

    res.status(200).json({
      text: "ok",
      subTitle: subTitle || "",
      originalTextArray: textArray,
      translatedTextArray: [""],
    });
  } catch (e) {
    // console.log("cheerio error");
  }
}

// const clientId = process?.env.PAPAGO_CLIENT_ID;
// const clientSecret = process?.env.PAPAGO_CLIENT_SECRET;
// const customDict = process?.env.PAPAGO_CUSTOM_DICT;
// const apiUrl = process?.env.PAPAGO_API_URL;
// console.log(clientId, clientSecret, customDict, apiUrl);
