import { NextRequest, NextResponse } from "next/server";

import client from "@libs/server/client";

import { getToken } from "next-auth/jwt";

interface UpdatedData {
  name?: string;
  mbti?: string;
  sex?: string;
  nickname?: string;
  clientID?: string;
  clientKey?: string;
}

async function getUserToken(req: NextRequest) {
  try {
    const token = await getToken({ req, secret });
    // if (!token) {
    //   return NextResponse.json({ ok: false }, { status: 401 });
    // }
    return token;
  } catch (error) {
    return null;
  }
}

const secret = process.env.NEXTAUTH_SECRET;

export async function GET(req: NextRequest) {
  try {
    const token = await getUserToken(req);
    if (!token) return NextResponse.json({ ok: false });

    const profile = await client.user.findUnique({
      where: { id: token.user.id },
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

    const isAdmin = token.user.userLevel === 0;

    return NextResponse.json({
      ok: true,
      profile,
      isAdmin,
    });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const token = await getUserToken(req);
    if (!token) return NextResponse.json({ ok: false }, { status: 401 });
    const body = await req.json();

    const updatedData: UpdatedData = {
      name: body.name,
      nickname: body.nickname,
      mbti: body.mbti,
      sex: body.sex,
      clientID: body.papagoClientID,
      clientKey: body.papagoClientKey,
    };

    await client.user.update({
      where: { id: token.user.id.toString() },
      data: updatedData,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
