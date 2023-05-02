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
  const {
    query: { userId },
  } = req;

  const profile = await client.user.findUnique({
    where: { id: Array.isArray(userId) ? userId[0] : userId || "" },
    include: {
      comments: {
        include: {
          fiction: true,
        },
      },
    },
  });

  if (!profile) {
    return res.json({ ok: false });
  } else {
    if (req.method === "GET") {
      return res.json({
        ok: true,
        profile,
      });

      // res.status(200).end();
    } else if (req.method === "PUT") {
      const {
        query,
        body: { mbti, sex },
      } = req;

      await client.user.update({
        where: { id: req.session.user?.id || "" },
        data: {
          mbti: mbti,
          sex: sex,
        },
      });
      // console.log("asd")

      return res.json({ ok: true });
      // res.status(200).end();
    }
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "PUT"],
    handler,
  })
);
