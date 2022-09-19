import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { getSession } from "next-auth/react";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id, page },
    session: { user },
  } = req;
  //   const session = await getSession({ req });

  if (req.method === "GET") {
    const comments = await client.comment.findMany({
      take: 7,
      skip: typeof page === "string" ? (+page - 1) * 7 : 0,
      where: {
        fiction: {
          id: +id!.toString(),
        },
      },
    });

    const commentsCount = await client.comment.count({
      where: {
        fiction: {
          id: +id!.toString(),
        },
      },
    });

    res.json({ comments, commentsCount, ok: true });
  } else {
    res.json({ ok: false });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
