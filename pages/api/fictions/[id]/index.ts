import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { getSession } from "next-auth/react";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  let {
    query: { id },
    // session: { user },
  } = req;

  const session = await getSession({ req });

  const fiction = await client.fiction.findUnique({
    where: {
      id: +id!.toString(),
    },
    include: {
      fictionStat: true,
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
          keyword: {
            select: {
              name: true,
              isOfHeroine: true,
              isOfMC: true,
              isOfCons: true,
            },
          },
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      author: true,
    },
  });

  // console.log(Fiction);
  // console.log(Fiction?.categories[0].category.name);

  if (req.method === "GET") {
    const arr: any[] = [];
    fiction?.keywords.map((item) => arr.push(item.keyword?.name));
    const keywordSame = arr.map((word) => ({
      keywords: {
        some: {
          keyword: {
            name: {
              equals: word,
            },
          },
        },
      },
    }));

    const arr2: any[] = [];
    const similarFictions = await client.fiction.findMany({
      where: {
        OR: keywordSame,
        AND: {
          id: {
            not: fiction?.id,
          },
        },
      },
    });

    similarFictions.map((item) => arr2.push([item.id, item.title]));

    const isLiked = Boolean(
      await client.fav.findFirst({
        where: {
          fictionId: fiction?.id,
          userId: session?.user?.id,
        },
        select: {
          id: true,
        },
      })
    );

    // userfictionstat
    // const ration = await client.userFictionStat.findFirst({
    //   where: {
    //     fictionId: Fiction?.id,
    //   },
    //   select: {
    //     originality: true,
    //     writing: true,
    //     character: true,
    //     verisimilitude: true,
    //     synopsisComposition: true,
    //     value: true,
    //   },
    // });

    // userRationOnFiction
    // const userRation = await client.userRationOnFiction.findFirst({
    //   where: {
    //     userId: session?.user?.id,
    //   },
    // });

    res.json({
      ok: true,
      fiction,
      isLiked,
      // ration,
      // userRation,
      // similarFictions,
    });
  }
  if (req.method === "PUT") {
    let {
      query: { id },
      body: {
        title,
        originalTitle,
        relatedTitle,
        author,
        originalAuthor,
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
        type,
        mediaMix,
        isTranslated,
        introduction,
        setup,
      },
      // session: { user },
    } = req;

    // console.log(setup);

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
    const KeywordMany = keywords.map((item: string) => ({
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

    // const categoryMany = Fiction?.categories.map((item) => ({
    //   category: {
    //     upsert: {
    //       name: item?.category!.name,
    //     },
    //   },
    // }));

    const fiction = await client.fiction.update({
      where: {
        id: +id!.toString(),
      },
      data: {
        title,
        originalTitle,
        relatedTitle,
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
        relatedAuthor,
        nationality,
        startDate: new Date(date[0]),
        endDate: new Date(date[1]),
        original,
        platforms: platforms[0],
        image: thumbId,
        synopsis,
        characters,
        currentState,
        volume: +volume?.toString(),
        type,
        isTranslated,
        introduction,
        mediaMix,
        setup,
        // categories: {
        //   deleteMany: {
        //     fictionId: +id!.toString(),
        //   },
        //   create: {
        //     category: {
        //       connectOrCreate: {
        //         where: {
        //           name: genre,
        //         },
        //         create: {
        //           name: genre,
        //         },
        //       },
        //     },
        //   },
        // },
        categories: {
          deleteMany: {
            fictionId: +id!.toString(),
          },
          create: [...genreMany],
        },
        keywords: {
          deleteMany: {
            fictionId: +id!.toString(),
          },
          create: [
            ...subKeywordMany,
            ...mcKeywordMany,
            ...KeywordMany,
            ...consKeywordMany,
          ],
        },
        fictionStat: {
          update: {
            originality: +originality,
            writing: +writing,
            character: +character,
            verisimilitude: +verisimilitude,
            synopsisComposition: +synopsisComposition,
            value: +value,
          },
        },
      },
    });

    res.json({ ok: true, fiction });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "PUT"],
    handler,
  })
);
