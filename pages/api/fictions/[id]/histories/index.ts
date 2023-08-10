import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
// import revalidator from "@libs/server/revalidator";
import axios from "axios";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  let {
    query: { id },
  } = req;

  if (req.method === "GET") {
    const fiction = await client.fiction.findUnique({
      where: {
        id: +id!.toString(),
      },
    });

    const history = await client.fictionHistory.findMany({
      where: {
        fictionId: +id!.toString(),
      },
      include: {
        editedBy: {
          select: {
            image: true,
            email: true,
            nickname: true,
          },
        },
      },
    });

    return res.json({
      ok: true,
      fiction,
      history,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "PUT"],
    handler,
  })
);
