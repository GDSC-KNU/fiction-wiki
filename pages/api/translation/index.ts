import { NextApiRequest, NextApiResponse } from "next";
// import { Configuration, OpenAIApi } from "openai";
// const cheerio = require("cheerio");
import cheerio from "cheerio";
// import { TranslationServiceClient } from "@google-cloud/translate";
import { Redis } from "@upstash/redis";
import client from "@libs/server/client";

type ResponseData = {
  subTitle: string;
  nextUrl?: string;
  prevUrl?: string;
  originalTextArray: string[];
  translatedTextArray: string[];
};

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

    let baseUrl = "";

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

    const terminator = async () => {
      const extractor = async (url: string) => {
        const responseText = await fetch(prompt);

        let paragraphs;
        let subTitle = "";
        let nextUrl = "";
        let prevUrl = "";
        let originalTextArray = [""];
        // let rawTitle = ""
        // let rawTitleTranslated = ""

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
                let rawText = $(element).text()?.trim();

                return rawText || " ";
              })
              .get()
          );
        } else if (prompt.startsWith("https://www.uukanshu.com/")) {
          const buffer = await responseText.arrayBuffer();
          const decoder = new TextDecoder("gbk");
          const htmlString = decoder.decode(buffer);
          const $ = cheerio.load(htmlString);

          const hasBr = $("#contentbox").find("br").length > 2;
          // console.log($("#contentbox").find("br").length);
          if (hasBr) {
            $(".ad_content").remove();
            $("#contentbox > p").remove();
            paragraphs = $("#contentbox").html();
            paragraphs = paragraphs?.split("<br>");
            originalTextArray = paragraphs
              ?.map((element: string) => {
                let rawText = element.replace(/&nbsp;/g, "")?.trim();
                return rawText;
              })
              .filter((str) => str !== "") || [""];
            // console.log(originalTextArray);
          } else {
            paragraphs = $("#contentbox").find("p");
            originalTextArray = await Promise.all(
              paragraphs
                .map(async (index: any, element: any) => {
                  let rawText = $(element).text()?.trim();

                  return rawText.toString() || " ";
                })
                .get()
            );
          }

          ////
          subTitle = $(".h1title").text();
          nextUrl = $("#next").attr("href") || "";
          nextUrl = !nextUrl.startsWith("/b/")
            ? ""
            : `https://www.uukanshu.com` + nextUrl;
          prevUrl = $("#prev").attr("href") || "";
          prevUrl = !prevUrl.startsWith("/b/")
            ? ""
            : `https://www.uukanshu.com` + prevUrl;

          /// db initializer
          let rawTitle = await $(".shuming")?.text()?.split("：")?.[1]?.trim();
          const exist = await client.fiction.findFirst({
            where: {
              originalTitle: rawTitle,
            },
          });
          // console.log(rawTitle);
          // console.log(exist);
          if (!exist) {
            let rawAuthor = $(".author").text()?.split("：")?.[1]?.trim();
            const translatedTitle = await papagoTranslate(rawTitle);
            let translatedAuthor = await papagoTranslate(rawAuthor);
            // translatedAuthor = translatedAuthor?.split(":")?.[1].trim();

            // img scraping and upload
            let curUrl = prompt;
            const lastSlashIndex = curUrl.lastIndexOf("/");
            baseUrl = curUrl.substring(0, lastSlashIndex);

            const responseText2 = await fetch(baseUrl);
            const buffer2 = await responseText2.arrayBuffer();
            const decoder2 = new TextDecoder("gbk");
            const htmlString2 = decoder2.decode(buffer2);
            const $main = cheerio.load(htmlString2);
            let imgUrl = `https:` + $main(".bookImg > img").attr("src");
            let rawSynopsis = $main(".jieshao_content > h3")
              .text()
              .split("www.uukanshu.com")[1]
              .replace("https://", "");

            let translatedSynopsis = await papagoTranslate(rawSynopsis);

            const imgResponse = await fetch(imgUrl);
            const imgBuffer = Buffer.from(await imgResponse.arrayBuffer());
            const formData = new FormData();
            formData.append("file", new Blob([imgBuffer]), translatedTitle);
            // console.log("before uploadURL");
            const { uploadURL } = await (
              await fetch(`${process.env.NEXTAUTH_URL}/api/files`, {
                method: "GET",
              })
            ).json();

            const {
              result: { id },
            } = await (
              await fetch(uploadURL, { method: "POST", body: formData })
            ).json();

            const createFiction = async () => {
              await client.fiction.create({
                data: {
                  title: translatedTitle,
                  originalTitle: rawTitle,
                  relatedTitle: rawTitle,
                  author: {
                    connectOrCreate: {
                      where: {
                        name: translatedAuthor,
                      },
                      create: {
                        name: translatedAuthor,
                        relatedName: rawAuthor,
                      },
                    },
                  },
                  relatedAuthor: rawAuthor,
                  nationality: "중국",
                  genre: "",
                  startDate: new Date(0),
                  endDate: new Date(0),
                  original: "",
                  platforms: "치디엔",
                  image: id || "0ac8b5cf-235a-479d-815d-a89bb37d6400",
                  synopsis: translatedSynopsis,
                  characters: " ",
                  currentState: "미완",
                  volume: 100,
                  isTranslated: "미번",
                  introduction: " ",
                  type: "웹소설",
                  mediaMix: "",
                  setup: " ",
                  categories: {
                    create: {
                      category: {
                        connectOrCreate: {
                          where: {
                            name: "미정",
                          },
                          create: {
                            name: "미정",
                          },
                        },
                      },
                    },
                  },
                  keywords: {
                    create: {
                      keyword: {
                        connectOrCreate: {
                          where: {
                            name: "미정",
                          },
                          create: {
                            name: "미정",
                          },
                        },
                      },
                    },
                  },
                  fictionStat: {
                    create: {
                      originality: 0,
                      writing: 0,
                      character: 0,
                      verisimilitude: 0,
                      synopsisComposition: 0,
                      value: 0,
                    },
                  },
                  user: {
                    connect: {
                      id: "cl5gg5htn0030q4uuoaryy8c1",
                    },
                  },
                  // keywords: { some: { keyword: { name: "" || undefined } } }
                },
              });
            };
            createFiction();
            // console.log("fiction created");
          }
        } else if (prompt.startsWith("https://www.aixdzs.com/read")) {
          let htmlString = await responseText.text();
          let $ = cheerio.load(htmlString);
          let curUrl = prompt;
          const lastSlashIndex = curUrl.lastIndexOf("/");
          baseUrl = curUrl.substring(0, lastSlashIndex);
          subTitle = $("h1").text();
          nextUrl = $("div.link a:nth-child(3)").attr("href") || "";
          nextUrl = nextUrl.endsWith("/")
            ? ""
            : baseUrl + "/" + (nextUrl || "");
          prevUrl = $("div.link a:nth-child(1)").attr("href") || "";
          prevUrl = prevUrl.endsWith("/")
            ? ""
            : baseUrl + "/" + (prevUrl || "");

          //////////////////
          paragraphs = $(".content").find("p");
          originalTextArray = await Promise.all(
            paragraphs
              .map(async (index: any, element: any) => {
                let rawText = $(element).text()?.trim();
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

      // 파파고 번역 엔진 사용 중단 230313
      // const translatedTextArray = await Promise.all(
      //   originalTextArray.map((item) => papagoTranslate(item))
      // );
      const translatedTextArray = [""];

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

      // redis.set(
      //   prompt,
      //   JSON.stringify({
      //     subTitle,
      //     prevUrl,
      //     nextUrl,
      //     originalTextArray,
      //     translatedTextArray,
      //   }),
      //   { ex: 360000 }
      // );

      // const rawTitle = originalTextArray[0]

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
    redis.del(prompt);
    return res.status(500).json({
      subTitle: "",
      nextUrl: "",
      prevUrl: "",
      originalTextArray: [""],
      translatedTextArray: [""],
    });
  }
}
