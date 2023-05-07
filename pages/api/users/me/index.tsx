import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { userId = "" },
    method,
    session: credentialSession,
  } = req;
  // console.log(userId)

  let profile;
  let isAdmin;
  if (Object.keys(credentialSession).length !== 0) {
    profile = await client.user.findUnique({
      where: { id: credentialSession?.user?.id || "" },
      include: {
        comments: {
          include: {
            fiction: true,
          },
        },
      },
    });

    isAdmin = true;
  } else {
    profile = await client.user.findUnique({
      where: { id: userId?.toString() || "" },
    });
    isAdmin = false;
  }

  if (!profile) {
    return res.json({ ok: false });
  } else {
    if (method === "GET") {
      // console.log("aaaa");
      return res.json({
        ok: true,
        profile,
        isAdmin,
      });

      // res.status(200).end();
    } else if (method === "PUT") {
      const {
        body: { mbti, sex, papagoClientID, papagoClientKey, name },
      } = req;
      // console.log("asdas");
      // console.log(papagoClientID, papagoClientKey);
      await client.user.update({
        where: {
          id: userId?.toString() || "",
        },
        data: {
          name: name,
          mbti: mbti,
          sex: sex,
          clientID: papagoClientID,
          clientKey: papagoClientKey,
        },
      });

      return res.json({ ok: true });
    }
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "PUT"],
    handler,
  })
);
