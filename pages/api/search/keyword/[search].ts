import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  let {
    query: { search: keyword, limit, start },
  } = req;

  console.log(keyword, limit, start);

  //   console.log(+(limit || "")?.toString() || 18);
  //   console.log(start === undefined ? 18 : +start + 18);

  const fictions = await client.fiction.findMany({
    take: limit === undefined ? 18 : +limit,
    skip: start === undefined ? 18 : +start + 18,
    where: {
      keywords: {
        some: {
          keyword: {
            name: keyword as string,
          },
        },
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
    },
    orderBy: {
      title: "desc",
    },
  });

  const fictionsCount = await client.fiction.count({
    take: limit === undefined ? 18 : +limit,
    skip: start === undefined ? 18 : +start + 18,
    where: {
      keywords: {
        some: {
          keyword: {
            name: keyword as string,
          },
        },
      },
    },
  });

  console.log(fictions.length);

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
