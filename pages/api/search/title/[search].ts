import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  let {
    query: { search: title, page },
  } = req;

  const fictions = await client.fiction.findMany({
    take: 18,
    skip: (+page!.toString() - 1) * 18,
    where: {
      title: {
        contains: title as string,
      },
    },
    include: {
      userFictionStat: {
        include: {
          userRationOnFictions: true,
          _count: {
            select: {
              users: true,
            },
          },
        },
      },
      author: true,
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
    orderBy: {
      title: "desc",
    },
  });

  const fictionsCount = await client.fiction.count({
    where: {
      title: {
        contains: title as string,
      },
    },
  });

  res.json({
    ok: true,
    fictions,
    fictionsCount,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
