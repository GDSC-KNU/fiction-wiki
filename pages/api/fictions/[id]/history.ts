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
    const history = await client.fictionHistory.findMany({
      where: {
        fictionId: +id!.toString(),
      },
    });

    return res.json({
      ok: true,
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
