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

    const location = "us-central1";

    const translationClient = new TranslationServiceClient();

    // {
    //   credentials: {
    //     type: "service_account",
    //     client_email: process.env.GOOGLE_CLIENT_EMAIL,
    //     client_id: process.env.GOOGLE_CLIENT_ID_TRANSLATION,
    //     private_key: JSON.parse(process.env.GOOGLE_PRIVATE_KEY || ""),
    //     token_url: "https://oauth2.googleapis.com/token",
    //   },
    //   projectId: process.env.GOOGLE_PROJECT_ID,
    // }
    // console.log("after making translation client");
    // {
    //   credentials: {
    //     type: "service_account",
    //     client_email: process.env.GOOGLE_CLIENT_EMAIL,
    //     client_id: process.env.GOOGLE_CLIENT_ID_TRANSLATION,
    //     private_key: JSON.parse(process.env.GOOGLE_PRIVATE_KEY || ""),
    //     token_url: "https://oauth2.googleapis.com/token",
    //   },
    //   projectId: process.env.GOOGLE_PROJECT_ID,
    // // }

    ///////// DELETE GLOSSARY
    // const deleteGlossary = async () => {
    //   // Construct request
    //   const request = {
    //     parent: `projects/${process.env.GOOGLE_PROJECT_ID}/locations/${location}`,
    //     name: `projects/${process.env.GOOGLE_PROJECT_ID}/locations/${location}/glossaries/${process.env.GOOGLE_GLOSSARY_ID}`,
    //   };

    //   // Delete glossary using a long-running operation
    //   const [operation] = await translationClient.deleteGlossary(request);

    //   // Wait for operation to complete.
    //   const [response] = await operation.promise();

    //   console.log(`Deleted glossary: ${response.name}`);
    // };

    // await deleteGlossary();\

    ///////// CREATE GLOSSARY (only with credentail env)
    // const createGlossary = async () => {
    //   const glossary = {
    //     languageCodesSet: {
    //       languageCodes: ["zh-CN", "ko"],
    //     },
    //     inputConfig: {
    //       gcsSource: {
    //         inputUri: "gs://fdbs_glossary/fdbs_glossary.CSV",
    //       },
    //     },
    //     name: `projects/${process.env.GOOGLE_PROJECT_ID}/locations/${location}/glossaries/fdbs_glossary`,
    //   };

    //   const request = {
    //     parent: `projects/${process.env.GOOGLE_PROJECT_ID}/locations/${location}`,
    //     glossary: glossary,
    //   };

    //   const [operation] = await translationClient.createGlossary(request);

    //   await operation.promise();

    //   console.log("Created glossary:");
    // };

    // createGlossary();

    ///////// UPDATE GLOSSARY (NOT WORKING)
    // const updateGlossary = async () => {
    //   const url = `https://translation.googleapis.com/v3/projects/${process.env.GOOGLE_PROJECT_ID}/locations/${location}/glossaries/${process.env.GOOGLE_GLOSSARY_ID}?update_mask=input_config&update_mask=display_name`;

    //   try {
    //     fetch(url, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         name: `projects/${process.env.GOOGLE_PROJECT_ID}/locations/${location}/glossaries/${process.env.GOOGLE_GLOSSARY_ID}`,
    //         languageCodesSet: {
    //           languageCodes: ["zh-CN", "ko"],
    //         },
    //         inputConfig: {
    //           gcsSource: {
    //             inputUri: "gs://fdbs_glossary/fdbs_glossary.CSV",
    //           },
    //         },
    //       }),
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };

    // await updateGlossary();

    const translateTextWithGlossary = async () => {
      const glossaryConfig = {
        glossary: `projects/${process.env.GOOGLE_PROJECT_ID}/locations/${location}/glossaries/${process.env.GOOGLE_GLOSSARY_ID}`,
      };
      // Construct request
      const request = {
        parent: `projects/${process.env.GOOGLE_PROJECT_ID}/locations/${location}`,
        contents: originalTextArray || [""],
        mimeType: "text/plain", // mime types: text/plain, text/html
        sourceLanguageCode: "zh-CN",
        targetLanguageCode: "ko",
        glossaryConfig: glossaryConfig,
      };

      // Run request
      const [response] = await translationClient.translateText(request);
      let result = [];
      // console.log(response.glossaryTranslations);
      if (response.glossaryTranslations) {
        for (const translation of response.glossaryTranslations) {
          result.push(translation.translatedText);
        }
      }
      return result;
    };

    let translatedTextArray = await translateTextWithGlossary();
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
