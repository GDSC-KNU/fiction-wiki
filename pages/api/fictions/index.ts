import { fiction } from "./../../../src/type/type.d";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
// import revalidator from "@libs/server/revalidator";
import { Redis } from "@upstash/redis";

const redisConfig = {
  url:
    process.env.UPSTASH_REDIS_REST_URL ??
    "https://apn1-sacred-manatee-34786.upstash.io",
  token:
    process.env.UPSTASH_REDIS_REST_TOKEN ??
    "AYfiACQgMWQxNjcyY2QtZWM4MS00NzQxLTgyZGItZGY1MjYwNDEwZGExOWJmODI1MWQzNGRlNDUyMDkzODM2NmE3NGQxZThiMmM=",
};

const redis = new Redis(redisConfig);

// export const config = {
//   runtime: "edge",
//   unstable_allowDynamic: [
//     "/lib/utilities.js", // allows a single file
//     "/node_modules/function-bind/**", // use a glob to allow anything in the function-bind 3rd party module
//   ],
// };

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    let {
      query: { keywords, genres, nationalities, sorting, page, dateYear },
    } = req;
    const cache: any = await redis.get(JSON.stringify(req?.query));

    if (cache) {
      // console.log(cache);
      // return cache;
      res.json(cache);
    } else {
      // console.log(req.query);
      if (nationalities === "all") nationalities = "";
      if (genres === "all") genres = "";
      if (keywords === "all") keywords = "";
      if (dateYear === "all") dateYear = "";
      // if (sorting === "all") keywords = "";

      const keywordArray = !Array.isArray(keywords)
        ? keywords?.split(",")
        : [""];
      const keywordManyQuery = [
        ...(keywordArray?.includes("")
          ? []
          : [
              {
                AND: [
                  {
                    keywords: {
                      some: {
                        keyword: {
                          name: {
                            in: keywordArray,
                          },
                        },
                      },
                    },
                  },
                ],
              },
            ]),
      ];

      // const genresMany =
      //   genres
      //     ?.toString()
      //     .split(",")
      //     .map((item: string) => ({
      //       categories: { some: { category: { name: item || undefined } } },
      //     })) || [];

      const genresArray = genres?.toString().split(",") || [""];
      const genresManyquery = [
        ...(genresArray?.includes("")
          ? []
          : [
              {
                OR: [
                  {
                    categories: {
                      some: {
                        category: {
                          name: {
                            in: genresArray,
                          },
                        },
                      },
                    },
                  },
                ],
              },
            ]),
      ];

      const nationalitiesMany =
        nationalities
          ?.toString()
          .split(",")
          .map((item: string) => ({
            nationality: (item as string) || undefined,
          })) || [];

      const sortingOne = function () {
        if (sorting === "총점" || "") {
          return {
            orderBy: { userFictionStat: { total: "desc" } },
          };
        } else if (sorting === "캐릭터성") {
          return {
            orderBy: { userFictionStat: { character: "desc" } },
          };
        } else if (sorting === "오리지널리티") {
          return {
            orderBy: { userFictionStat: { originality: "desc" } },
          };
        } else if (sorting === "스토리") {
          return {
            orderBy: {
              userFictionStat: { synopsisComposition: "desc" },
            },
          };
        } else if (sorting === "작품성") {
          return {
            orderBy: { userFictionStat: { value: "desc" } },
          };
        } else if (sorting === "핍진성") {
          return {
            orderBy: {
              userFictionStat: { verisimilitude: "desc" },
            },
          };
        } else if (sorting === "필력") {
          return {
            orderBy: { userFictionStat: { writing: "desc" } },
          };
        } else if (sorting === "화수") {
          return {
            orderBy: { volume: "desc" },
          };
        } else {
          return undefined;
        }
      };

      const ReleaseDateFilter = function () {
        if (dateYear) {
          return {
            startDate: {
              gte: new Date(`${dateYear}-01-01`),
              lte: new Date(`${dateYear}-12-31`),
            },
          };
        } else {
          return {};
        }
      };

      const fictions = await client.fiction.findMany({
        take: 18,
        skip: (+page!.toString() - 1 || 0) * 18,
        where: {
          AND: [
            ...genresManyquery,
            {
              OR: [...nationalitiesMany],
            },
            ...keywordManyQuery,
            ReleaseDateFilter(),
          ],
        },
        include: {
          _count: {
            select: {
              favs: true,
            },
          },
          author: true,
          userFictionStat: {
            include: {
              _count: {
                select: {
                  userRationOnFictions: true,
                },
              },
            },
          },
          keywords: {
            include: {
              keyword: true,
            },
          },
          categories: {
            include: {
              category: true,
            },
          },
        },
        ...sortingOne(),
      });

      const fictionsCount = await client.fiction.count({
        where: {
          AND: [
            ...genresManyquery,
            {
              OR: [...nationalitiesMany],
            },
            ...keywordManyQuery,
            ReleaseDateFilter(),
          ],
        },
      });

      await redis.setex(
        JSON.stringify(req?.query),
        3600 * 24,
        JSON.stringify({
          ok: true,
          fictions,
          fictionsCount,
        })
      );

      res.json({
        ok: true,
        fictions,
        fictionsCount,
      });
    }
  }
  if (req.method === "POST") {
    let {
      body: {
        title,
        originalTitle,
        relatedTitle,
        author,
        relatedAuthor,
        originalAuthor,
        nationality,
        genre,
        date,
        currentState,
        status: [
          originality,
          writing,
          character,
          verisimilitude,
          synopsisComposition,
          value,
        ],
        synopsis,
        characters,
        keywords,
        mcKeywords,
        subKeywords,
        consKeywords,
        original,
        platforms,
        thumbId,
        volume,
        isTranslated,
        introduction,
        type,
        mediaMix,
        setup,
      },
      session: { user },
    } = req;

    genre = genre
      .split(" ")
      .join("")
      .split(",")
      .filter((item: any) => item !== "");

    const genreMany = genre.map((item: string) => ({
      category: {
        connectOrCreate: {
          where: {
            name: item,
          },
          create: {
            name: item,
          },
        },
      },
    }));

    keywords = keywords.filter((item: any) => item !== "");
    const keywordMany = keywords.map((item: string) => ({
      keyword: {
        connectOrCreate: {
          where: {
            name: item,
          },
          create: {
            name: item,
          },
        },
      },
    }));

    mcKeywords = mcKeywords.filter((item: any) => item !== "");
    const mcKeywordMany = mcKeywords.map((item: string) => ({
      keyword: {
        connectOrCreate: {
          where: {
            name: item,
          },
          create: {
            name: item,
            isOfMC: true,
          },
        },
      },
    }));

    subKeywords = subKeywords.filter((item: any) => item !== "");
    const subKeywordMany = subKeywords.map((item: string) => ({
      keyword: {
        connectOrCreate: {
          where: {
            name: item,
          },
          create: {
            name: item,
            isOfHeroine: true,
          },
        },
      },
    }));

    consKeywords = consKeywords.filter((item: any) => item !== "");
    const consKeywordMany = consKeywords.map((item: string) => ({
      keyword: {
        connectOrCreate: {
          where: {
            name: item,
          },
          create: {
            name: item,
            isOfCons: true,
          },
        },
      },
    }));

    const fiction = await client.fiction.create({
      data: {
        title,
        originalTitle: originalTitle,
        relatedTitle: relatedTitle || "",
        author: {
          connectOrCreate: {
            where: {
              name: author,
            },
            create: {
              name: author,
              relatedName: relatedAuthor,
              rawName: originalAuthor,
            },
          },
        },
        relatedAuthor: relatedAuthor || "",
        nationality,
        genre: "",
        startDate: new Date(date[0]),
        endDate: date[1] ? new Date(date[1]) : new Date(0),
        original,
        platforms: platforms[0],
        image: thumbId,
        synopsis,
        characters,
        currentState,
        volume: +volume?.toString(),
        isTranslated,
        introduction,
        type,
        mediaMix: mediaMix || "",
        setup: setup || "",
        categories: {
          // create: { category: { create: { name: genre } } },
          create:
            // category: {
            //   connectOrCreate: {
            //     where: {
            //       name: genre,
            //     },
            //     create: {
            //       name: genre,
            //     },
            //   },
            // },
            [...genreMany],
        },
        keywords: {
          create: [
            ...subKeywordMany,
            ...mcKeywordMany,
            ...keywordMany,
            ...consKeywordMany,
          ],
        },
        fictionStat: {
          create: {
            originality: +originality,
            writing: +writing,
            character: +character,
            verisimilitude: +verisimilitude,
            synopsisComposition: +synopsisComposition,
            value: +value,
          },
        },
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    // console.log(fiction);
    // await revalidator();

    res.json({ ok: true, fiction });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
