import { Fiction } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  const fiction = await client.fiction.findUnique({
    where: {
      id: +id.toString(),
    },
    include: {
      fictionStat: {},
      keywords: {
        include: {
          keyword: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  const arr: any[] = [];
  fiction?.keywords.map((item) => arr.push(item.keyword.name));

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
  //   console.log(arr2);

  console.log(similarFictions);
  res.json({ ok: true, fiction, similarFictions });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
