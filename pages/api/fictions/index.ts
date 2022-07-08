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
        author,
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
      },
      session: { user },
    } = req;

    keywords = keywords.filter((item: any) => item !== "");
    const keywordMany = keywords.map((item: string) => ({
      keyword: {
        create: {
          name: item,
        },
      },
    }));

    mcKeywords = mcKeywords.filter((item: any) => item !== "");
    const mckeywordMany = mcKeywords.map((item: string) => ({
      keyword: {
        create: {
          name: item,
          isOfMC: true,
        },
      },
    }));

    subKeywords = subKeywords.filter((item: any) => item !== "");
    const subkeywordMany = subKeywords.map((item: string) => ({
      keyword: {
        create: {
          name: item,
          isOfHeroine: true,
        },
      },
    }));

    const fiction = await client.fiction.create({
      data: {
        title,
        author,
        nationality,
        genre,
        startDate: new Date(date[0]),
        endDate: new Date(date[1]),
        original,
        platforms: platforms[0],
        image: "",
        synopsis,
        characters,
        currentState: "",
        categories: {
          create: { category: { create: { name: genre } } },
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
