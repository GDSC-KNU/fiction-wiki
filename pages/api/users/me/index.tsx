import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  // if (!req.session.user) {
  //   console.log("not logged in");
  //   return res.status(200).json({ ok: false, error: "Plase Log in" });
  // }
  let profile = await client.user.findUnique({
    where: { id: req.session.user?.id || "" },
  });

  if (!profile) {
    // console.log("no profile");
    res.json({ ok: false });
  } else {
    res.json({
      ok: true,
      profile,
    });
    res.status(200).end();
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
