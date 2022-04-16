import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const fictions = await client.fiction.findMany({});
    res.json({
      ok: true,
      fictions,
    });
  }
  if (req.method === "POST") {
    const {
      body: {
        title,
        author,
        nationality,
        genre,
        date,
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
        tags,
        original,
        platforms,
      },
      session: { user },
    } = req;
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
        categories: {
          create: [
            { category: { create: { name: "mystery" } } },
            { category: { create: { name: "fantasy" } } },
          ],
        },
        keywords: {
          create: [
            { keyword: { create: { name: "munchiken" } } },
            { keyword: { create: { name: "post-apocalypse" } } },
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
    console.log(fiction);
    res.json({ ok: true, fiction });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
