import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id, page },
    // session: { user },
    body,
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
  } else if (req.method === "DELETE") {
    const xDataHeader = req.headers?.["x-data"];

    if (!xDataHeader || typeof xDataHeader !== "string") return;

    const { userId, commentId } = JSON.parse(xDataHeader);

    // if (!commentId) return res.json({ ok: false });

    const entity = await client.userRationOnFiction.findFirst({
      where: {
        comment: {
          id: commentId,
        },
      },
      select: {
        id: true,
      },
    });

    if (entity) {
      await client.userRationOnFiction.delete({
        where: {
          id: entity!.id,
        },
      });
    }

    return res.json({ ok: true });
  } else {
    return res.json({ ok: false });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST", "DELETE"],
    handler,
  })
);
