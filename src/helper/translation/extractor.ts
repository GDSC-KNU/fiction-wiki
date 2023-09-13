import cheerio from "cheerio";
import {
  papagoTranslate,
  papagoCustomTranslate,
} from "@helper/translation/papagoTranslate";
import client from "@libs/server/client";
import { downloadAndUploadImage } from "@helper/translation/downloadAndUploadImage";

export default async function extractor({
  prompt,
  clientID,
  clientKey,
}: {
  prompt: string;
  clientID: string;
  clientKey: string;
}) {
  const responseText = await fetch(prompt);

  let id;
  let glossaryUrl = "";
  let originalTitle;
  let baseUrl = "";
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
    // 파싱에러 발생 페이지 예외처리
    const hasBr = $("#contentbox").find("br").length > 2;

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

    /// db 자동업데이트
    let rawTitle = await $(".shuming")?.text()?.split("：")?.[1]?.trim();
    const exist = await client.fiction.findFirst({
      where: {
        originalTitle: rawTitle,
      },
    });

    originalTitle = rawTitle;

    if (!exist) {
      let rawAuthor = $(".author").text()?.split("：")?.[1]?.trim();
      let translatedTitle = await papagoCustomTranslate({
        input: rawTitle,
        clientID,
        clientKey,
      });
      let translatedAuthor = await papagoCustomTranslate({
        input: rawAuthor,
        clientID,
        clientKey,
      });

      let curUrl = prompt;
      const lastSlashIndex = curUrl.lastIndexOf("/");
      baseUrl = curUrl.substring(0, lastSlashIndex);

      /// 목차페이지 parsing
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
      let translatedSynopsis = await papagoCustomTranslate({
        input: rawSynopsis,
        clientID,
        clientKey,
      });
      const volume = $main("#chapterList").find("li").length;

      /// download and upload image
      const { id: imageId } = await downloadAndUploadImage(
        imgUrl,
        translatedTitle
      );

      try {
        const createFiction = async () => {
          // console.log(translatedTitle, rawTitle, rawAuthor);
          // console.log("fiction created");
          const fiction = await client.fiction.create({
            data: {
              title: translatedTitle || "",
              originalTitle: rawTitle,
              author: {
                connectOrCreate: {
                  where: {
                    rawName: rawAuthor,
                  },
                  create: {
                    name: translatedAuthor || "",
                    rawName: rawAuthor,
                    nationality: "중국",
                  },
                },
              },
              // relatedAuthor: rawAuthor,
              nationality: "중국",
              genre: "",
              startDate: new Date(0),
              endDate: new Date(0),
              original: "",
              platforms: "치디엔",
              image: imageId || "0ac8b5cf-235a-479d-815d-a89bb37d6400",
              synopsis: translatedSynopsis || "",
              characters: " ",
              currentState: "미완",
              volume: volume || 100,
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

          id = fiction.id;
          glossaryUrl = fiction.glossaryUrl || "";
          originalTitle = fiction.originalTitle;
          return fiction;
        };
        createFiction();
      } catch (error) {
        console.log(error);
      }
    }
  } else if (prompt.startsWith("https://www.aixdzs.com/read")) {
    let htmlString = await responseText.text();
    let $ = cheerio.load(htmlString);
    let curUrl = prompt;
    const lastSlashIndex = curUrl.lastIndexOf("/");
    baseUrl = curUrl.substring(0, lastSlashIndex);
    subTitle = $("h1").text();
    nextUrl = $("div.link a:nth-child(3)").attr("href") || "";
    nextUrl = nextUrl.endsWith("/") ? "" : baseUrl + "/" + (nextUrl || "");
    prevUrl = $("div.link a:nth-child(1)").attr("href") || "";
    prevUrl = prevUrl.endsWith("/") ? "" : baseUrl + "/" + (prevUrl || "");

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

    // db 자동업데이트
    let rawTitle =
      (await $(".crumbs li:nth-child(3) > a")
        .attr("title")
        ?.toString()
        ?.trim()) || "";

    originalTitle = rawTitle;

    const exist = await client.fiction.findFirst({
      where: {
        originalTitle: rawTitle,
      },
    });
    id = exist?.id;

    if (!exist) {
      const newUrl = `https://www.aixdzs.com/novel/${rawTitle}`;
      const dbInitiator = async () => {
        const indexResponseText = await fetch(newUrl);
        let indexHtmlString = await indexResponseText.text();
        let $index = cheerio.load(indexHtmlString);

        let rawAuthor = $index(".d_ac.fdl > ul > li:nth-child(1) > a").text();
        let translatedAuthor = await papagoCustomTranslate({
          input: rawAuthor,
          clientID,
          clientKey,
        });
        let translatedTitle = await papagoCustomTranslate({
          input: rawTitle,
          clientID,
          clientKey,
        });
        let imgUrl =
          $index('[itemprop="image"]')?.attr("src")?.toString() || "";

        let volume = $index("#i-chapter > ul").find("li").length;
        let rawsynopsis = $index(".d_co").text();
        let translatedSynopsis = await papagoCustomTranslate({
          input: rawsynopsis,
          clientID,
          clientKey,
        });

        /// download and upload image
        const { id: imageId } = await downloadAndUploadImage(
          imgUrl,
          translatedTitle
        );

        const createFiction = async () => {
          // console.log(
          //   translatedTitle,
          //   rawTitle,
          //   translatedAuthor,
          //   rawAuthor
          // );
          const fiction = await client.fiction.create({
            data: {
              title: translatedTitle || "",
              originalTitle: rawTitle,
              relatedTitle: rawTitle,
              author: {
                connectOrCreate: {
                  where: {
                    rawName: rawAuthor,
                  },
                  create: {
                    name: translatedAuthor || "",
                    rawName: rawAuthor,
                    nationality: "중국",
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
              image: imageId || "0ac8b5cf-235a-479d-815d-a89bb37d6400",
              synopsis: translatedSynopsis || "업데이트 예정",
              characters: " ",
              currentState: "미완",
              volume: volume || 100,
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
          id = fiction?.id;
          glossaryUrl = fiction?.glossaryUrl || "";
          originalTitle = fiction?.originalTitle;
        };
        await createFiction();
      };

      await dbInitiator();
    }
  } else {
    // console.log("");
  }

  return {
    subTitle,
    nextUrl,
    prevUrl,
    originalTextArray,
    id,
    originalTitle,
    glossaryUrl,
  };
}
