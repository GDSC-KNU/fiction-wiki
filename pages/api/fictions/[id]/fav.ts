import { Fiction } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { getSession } from "next-auth/react";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  let isLiked;
  const {
    query: { id },
    session: { user },
  } = req;
  const session = await getSession({ req });

  const alreadyExists = await client.fav.findFirst({
    where: {
      fictionId: +id!.toString(),
      userId: session?.user?.id,
    },
  });
  if (req.method === "GET") {
    if (alreadyExists) isLiked = true;
    else isLiked = false;
  } else if (req.method === "POST") {
    if (alreadyExists) {
      //delete
      await client.fav.delete({
        where: {
          id: alreadyExists.id,
        },
      });
      isLiked = false;
    } else {
      //create
      await client.fav.create({
        data: {
          user: {
            connect: {
              id: session?.user?.id,
            },
          },
          fiction: {
            connect: {
              id: +id!.toString(),
            },
          },
        },
      });
      isLiked = true;
    }
  }

  res.json({ isLiked, ok: true });
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
