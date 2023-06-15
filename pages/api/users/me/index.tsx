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
  const { method, session: credentialSession } = req;

  const session = await getServerSession(req, res, authOptions);

  let profile;
  let isAdmin;

  // credential, session 모두 없을시 ok: false
  if (Object.keys(credentialSession).length === 0 && !session) {
    return res.status(401).json({ ok: false, message: "Unauthorized" });
  }

  // 1) CredentialSession 존재 => 관리자
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
    // 2) CredentialSession 존재 X => 일반 유저
    profile = await client.user.findUnique({
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
    isAdmin = false;
  }

  // 3) Profile 조회 X => ok: false
  // if (!profile) return res.json({ ok: false });

  // 4) Profile 조회 O => GET | PUT 실행
  if (method === "GET") {
    return res.json({
      ok: true,
      profile,
      isAdmin,
    });
  } else if (method === "PUT") {
    const {
      body: { mbti, sex, papagoClientID, papagoClientKey, name, nickname },
    } = req;

    let updatedData: UpdatedData = {};

    // Only add fields to the object if they exist in the request body
    if (name) updatedData.name = name;
    if (nickname) updatedData.nickname = nickname;
    if (mbti) updatedData.mbti = mbti;
    if (sex) updatedData.sex = sex;
    if (papagoClientID) updatedData.clientID = papagoClientID;
    if (papagoClientKey) updatedData.clientKey = papagoClientKey;

    const updatedUser = await client.user.update({
      where: {
        id: session.user.id.toString(),
      },
      data: updatedData,
    });

    return res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "PUT"],
    // isForAdmin: false,
    handler,
  })
);
