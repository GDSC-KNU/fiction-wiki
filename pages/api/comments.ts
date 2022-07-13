import { Fiction, Session } from "@prisma/client";
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
    session: { user },
    url,
  } = req;
  console.log(url);
  const session = await getSession({ req });
  console.log(session);

  // interface SessionWithId extends Session {
  //   id : string;
  // }

  const comments = await client.comment.findMany({
    where: {
      createdById: session?.user!.id,
    },
    include: { fiction: true },
  });

  res.json({
    ok: true,
    comments,
  });
  res.status(200).end();
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
