import client from "@libs/server/client";

import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// import revalidator from "@libs/server/revalidator";
// import { Redis } from "@upstash/redis";

// const redisConfig = {
//   url:
//     process.env.UPSTASH_REDIS_REST_URL ??
//     "https://apn1-sacred-manatee-34786.upstash.io",
//   token:
//     process.env.UPSTASH_REDIS_REST_TOKEN ??
//     "AYfiACQgMWQxNjcyY2QtZWM4MS00NzQxLTgyZGItZGY1MjYwNDEwZGExOWJmODI1MWQzNGRlNDUyMDkzODM2NmE3NGQxZThiMmM=",
// };

// const redis = new Redis(redisConfig);
const secret = process.env.NEXTAUTH_SECRET;

export async function GET(
  req: NextRequest
  // params: {
  //   keywords: string;
  //   categories: string;
  //   nationalities: string;
  //   sorting: string;
  //   page: string;
  //   dateYear: string;
  // }
) {
  // let { keywords, categories, nationalities, sorting, page, dateYear } = params;
  let searchparams = req.nextUrl.searchParams;
  let keywords = searchparams.get("keywords");
  let categories = searchparams.get("categories");
  let nationalities = searchparams.get("nationalities");
  let sorting = searchparams.get("sorting");
  let page = searchparams.get("page");
  let dateYear = searchparams.get("dateYear");
  // const cache: any = await redis.get(JSON.stringify(req?.query));

  // if (cache) {
  //   // console.log(cache);
  //   // return cache;
  //   res.json(cache);
  // } else {

  if (!keywords || !categories) {
    const fictions = await client.fiction.findMany({
      select: {
        nationality: true,
      },
    });

    let keywords = await client.keyword.findMany();

    let categories = await client.category.findMany();

    let nationalities: Array<any> = [];
    fictions.map((fiction: any) => nationalities.push(fiction.nationality));
    nationalities = await [...new Set(nationalities)].filter(
      (item) => item !== ""
    );

    return NextResponse.json({
      // fictions: JSON.parse(JSON.stringify(fictions)),
      // fictionsCount: JSON.parse(JSON.stringify(fictionsCount)),
      keywords: keywords,
      nationalities: nationalities,
      categories: categories,
    });
  }

  if (nationalities === "all") nationalities = "";
  if (categories === "all") categories = "";
  if (keywords === "all") keywords = "";
  if (dateYear === "all") dateYear = "";

  const keywordArray = !Array.isArray(keywords) ? keywords?.split(",") : [""];
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

  const categoriesArray = categories?.toString().split(",") || [""];
  const categoriesManyquery = [
    ...(categoriesArray?.includes("")
      ? []
      : [
          {
            OR: [
              {
                categories: {
                  some: {
                    category: {
                      name: {
                        in: categoriesArray,
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
        ...categoriesManyquery,
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
        ...categoriesManyquery,
        {
          OR: [...nationalitiesMany],
        },
        ...keywordManyQuery,
        ReleaseDateFilter(),
      ],
    },
  });

  // await redis.setex(
  //   JSON.stringify(req.query),
  //   3600 * 24 * 7,
  //   JSON.stringify({
  //     ok: true,
  //     fictions,
  //     fictionsCount,
  //   })
  // );

  return NextResponse.json({
    ok: true,
    fictions,
    fictionsCount,
  });
}

const arrayToString = (arr: any[]) =>
  Array.isArray(arr) && arr.length === 0 ? undefined : arr.join(",");

// Util function for array to filtered objects with Prisma queries
const arrayToPrismaObjects = (arr: string[], isOf: string = "") => {
  const filteredArr = arr?.filter((item: any) => item !== "");
  return (
    (filteredArr &&
      filteredArr.map((item: string) => ({
        keyword: {
          connectOrCreate: {
            where: { name: item },
            create: { name: item, [isOf]: true },
          },
        },
      }))) ||
    []
  );
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const token = await getToken({ req, secret });
    const user = token!.user;

    let {
      title,
      originalTitle,
      relatedTitle: rawRelatedTitle,
      author,
      relatedAuthor: rawRelatedAuthor,
      originalAuthor,
      nationality,
      categories: rawCategories,
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
      keywords: rawKeywords,
      mcKeywords: rawMcKeywords,
      subKeywords: rawSubKeywords,
      consKeywords: rawConsKeywords,
      original,
      platforms: rawPlatforms,
      image,
      volume,
      isTranslated,
      introduction,
      type,
      mediaMix: rawMediaMix,
      setup,
    } = body;

    // Preprocessing
    const relatedTitle = arrayToString(rawRelatedTitle);
    const relatedAuthor = arrayToString(rawRelatedAuthor);
    const platforms = arrayToString(rawPlatforms.map((p: any) => p.value));
    const mediaMix = arrayToString(rawMediaMix.map((m: any) => m.value));

    const categoriesMany = rawCategories
      .map((item: any) => item.value)
      .map((item: string) => ({
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

    const subKeywordMany = arrayToPrismaObjects(rawSubKeywords, "isOfHeroine");
    const mcKeywordMany = arrayToPrismaObjects(rawMcKeywords, "isOfMC");
    const keywordMany = arrayToPrismaObjects(rawKeywords);
    const consKeywordMany = arrayToPrismaObjects(rawConsKeywords, "isOfCons");

    // Database query
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
        platforms: platforms || "",
        image,
        synopsis: "",
        characters: "",
        currentState,
        volume: +volume?.toString(),
        isTranslated,
        introduction,
        type,
        mediaMix: mediaMix || "",
        setup: setup || "",
        categories: {
          create: [...categoriesMany],
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

    return NextResponse.json({ ok: true, fiction });
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({ ok: false, error: "An error occurred" });
  }
}
