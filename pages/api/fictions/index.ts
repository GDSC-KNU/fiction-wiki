import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    let {
      query: { keywords, genres, nationalities, sorting, page, dateYear },
    } = req;
    // console.log(req.query);
    if (nationalities === "all") nationalities = "";
    if (genres === "all") genres = "";
    if (keywords === "all") keywords = "";
    if (dateYear === "all") dateYear = "";
    // if (sorting === "all") keywords = "";

    // console.log(
    //   keywords
    //     ?.toString()
    //     .split(",")

    // );
    const keywordMany =
      keywords
        ?.toString()
        .split(",")
        .map((item: string) => ({
          keywords: { some: { keyword: { name: item || undefined } } },
        })) || [];

    const genresMany =
      genres
        ?.toString()
        .split(",")
        .map((item: string) => ({
          categories: { some: { category: { name: item || undefined } } },
        })) || [];

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
          { OR: [...genresMany] },
          {
            OR: [...nationalitiesMany],
          },
          {
            AND: [...keywordMany],
          },
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
                users: true,
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
          { OR: [...genresMany] },
          {
            OR: [...nationalitiesMany],
          },
          {
            AND: [...keywordMany],
          },
          ReleaseDateFilter(),
        ],
      },
    });

    res.json({
      ok: true,
      fictions,
      fictionsCount,
    });
  }
  if (req.method === "POST") {
    let {
      body: {
        title,
        relatedTitle,
        author,
        relatedAuthor,
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

    // console.log(genre);
    genre = genre
      .split(" ")
      .join("")
      .split(",")
      .filter((item: any) => item !== "");
    // console.log(genre);
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
        relatedTitle: relatedTitle || "",
        author: {
          connectOrCreate: {
            where: {
              name: author,
            },
            create: {
              name: author,
              relatedName: relatedAuthor,
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
    // await res.revalidate("/fictions");

    res.json({ ok: true, fiction });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
