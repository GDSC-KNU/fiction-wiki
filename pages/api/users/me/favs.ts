import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  // const {
  //   query: { id },
  //   session: { user },
  // } = req;
  // const session = await getSession({ req });

  // const favs = await client.fav.findMany({
  //   where: {
  //     userId: user?.id,
  //   },
  // });

  res.json({
    ok: true,
  });
  res.status(200).end();
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
