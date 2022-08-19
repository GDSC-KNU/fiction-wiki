import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const fictions = await client.fiction.findMany({
      include: {
        _count: {
          select: {
            favs: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      fictions,
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
        original,
        platforms,
        thumbId,
        volume,
        type,
        mediaMix,
      },
      session: { user },
    } = req;

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
          },
        },
      },
    }));

    const fiction = await client.fiction.create({
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
          // create: { category: { create: { name: genre } } },
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
          create: [...subkeywordMany, ...mckeywordMany, ...keywordMany],
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
    await res.revalidate("/fictions");

    res.json({ ok: true, fiction });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
