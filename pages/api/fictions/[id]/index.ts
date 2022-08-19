import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { getSession } from "next-auth/react";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  // console.log(req.query);
  let {
    query: { id },
    session: { user },
  } = req;
  // console.log(req.query);
  // console.log(+id!.toString());
  // console.log(id);
  const session = await getSession({ req });
  // console.log(session?.user?.id);
  // console.log(req.body);

  const prevFiction = await client.fiction.findUnique({
    where: {
      id: +id!.toString(),
    },
    include: {
      fictionStat: true,
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
          keyword: {
            select: {
              name: true,
              isOfHeroine: true,
              isOfMC: true,
            },
          },
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
  });

  // console.log(prevFiction);
  // console.log(prevFiction?.categories[0].category.name);

  if (req.method === "GET") {
    const arr: any[] = [];
    prevFiction?.keywords.map((item) => arr.push(item.keyword?.name));
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
            not: prevFiction?.id,
          },
        },
      },
    });

    similarFictions.map((item) => arr2.push([item.id, item.title]));

    const isLiked = Boolean(
      await client.fav.findFirst({
        where: {
          fictionId: prevFiction?.id,
          userId: session?.user?.id,
        },
        select: {
          id: true,
        },
      })
    );

    // userfictionstat
    const ration = await client.userFictionStat.findFirst({
      where: {
        fictionId: prevFiction?.id,
      },
      select: {
        originality: true,
        writing: true,
        character: true,
        verisimilitude: true,
        synopsisComposition: true,
        value: true,
      },
    });

    // userRationOnFiction
    const userRation = await client.userRationOnFiction.findFirst({
      where: {
        userId: session?.user?.id,
      },
    });

    res.json({
      ok: true,
      prevFiction,
      isLiked,
      ration,
      userRation,
      similarFictions,
    });
  }
  if (req.method === "PUT") {
    let {
      query: { id },
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
        original,
        platforms,
        thumbId,
        volume,
        type,
        mediaMix,
      },
      session: { user },
    } = req;

    console.log(req.body);

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
    const mckeywordMany = mcKeywords.map((item: string) => ({
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
    const subkeywordMany = subKeywords.map((item: string) => ({
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

    // const categoryMany = prevFiction?.categories.map((item) => ({
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
        relatedTitle,
        author,
        relatedAuthor,
        nationality,
        genre,
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
        mediaMix,
        categories: {
          deleteMany: {
            fictionId: +id!.toString(),
          },
          create: {
            category: {
              connectOrCreate: {
                where: {
                  name: genre,
                },
                create: {
                  name: genre,
                },
              },
            },
          },
        },
        keywords: {
          deleteMany: {
            fictionId: +id!.toString(),
          },
          create: [...subkeywordMany, ...mckeywordMany, ...keywordMany],
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
