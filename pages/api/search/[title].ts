import { title } from "process";
import { ParsedUrlQuery } from "querystring";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  let {
    query: { title },
  } = req;

  console.log(title);

  const fictions = await client.fiction.findMany({
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
    },
  });

  res.json({
    ok: true,
    fictions,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
