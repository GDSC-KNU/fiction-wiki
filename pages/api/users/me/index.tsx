import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";

interface UpdatedData {
  name?: string;
  mbti?: string;
  sex?: string;
  nickname?: string;
  clientID?: string;
  clientKey?: string;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  // 1) Get method and session
  const { method } = req;
  const session = await getServerSession(req, res, authOptions);

  // 2) Session must exist
  if (!session) {
    return res.status(401).json({ ok: false, message: "Unauthorized" });
  }

  // 3) Fetch profile
  const profile = await client.user.findUnique({
    where: { id: session.user.id },
    include: {
      comments: {
        include: {
          fiction: {
            select: {
              title: true,
            },
          },
        },
      },
    },
  });

  // 4) Check if user is an admin
  const isAdmin = session.user.userLevel === 0;

  // 5) Handle requests according to HTTP method
  switch (method) {
    case "GET":
      return res.json({
        ok: true,
        profile,
        isAdmin,
      });

    case "PUT": {
      const { body } = req;
      const updatedData: UpdatedData = {
        name: body.name,
        nickname: body.nickname,
        mbti: body.mbti,
        sex: body.sex,
        clientID: body.papagoClientID,
        clientKey: body.papagoClientKey,
      };
      try {
        await client.user.update({
          where: { id: session.user.id.toString() },
          data: updatedData,
        });
        return res.json({ ok: true });
      } catch (error) {
        return res.status(500).json({ ok: false, message: "Server error" });
      }
    }

    default:
      return res.status(405).json({ ok: false, message: "Method not allowed" });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "PUT"],
    handler,
  })
);
