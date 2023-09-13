import useUploadCSV from "@/hooks/uploadGlossaries";
import { NextRequest, NextResponse } from "next/server";
import client from "@libs/server/client";
import { getToken } from "next-auth/jwt";
import uploadGlossaries from "@/hooks/uploadGlossaries";

const secret = process.env.NEXTAUTH_SECRET;

async function getUserInfo(token: any) {
  const userProfile = await client.user.findUnique({
    where: { id: token.user.id },
    select: {
      id: true,
      clientID: true,
      clientKey: true,
      naverAccessKey: true,
      naverSecretKey: true,
    },
  });
  return userProfile;
}

async function getUserToken(req: NextRequest) {
  const token = await getToken({ req, secret });
  if (!token) {
    throw new Error("Unauthorized");
  }
  return token;
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  if (!body) return NextResponse.json({ ok: false }, { status: 400 });
  console.log("fav route");
  const { originalTitle } = body;
  const token = await getUserToken(req);

  const userProfile = await getUserInfo(token);

  if (!userProfile)
    return NextResponse.json(
      { ok: false, message: "No user info" },
      { status: 400 }
    );
  const { naverAccessKey, naverSecretKey } = userProfile;

  if (!naverAccessKey || !naverSecretKey)
    return NextResponse.json({ ok: false });

  const fiction = await client.fiction.findFirst({
    where: {
      originalTitle,
    },
    include: {
      glossary: true,
    },
  });

  if (!fiction)
    return NextResponse.json(
      { ok: false, message: "No fiction" },
      { status: 400 }
    );

  const fav = await client.fav.findUnique({
    where: {
      favIdentifier: {
        userId: token.user.id,
        fictionId: fiction.id,
      },
    },
  });

  if (!fav)
    return NextResponse.json(
      { ok: false, message: "No existing glossary" },
      { status: 400 }
    );

  const glossaryKey = fav.glossaryKey;

  if (!fav.glossaryKey)
    return NextResponse.json(
      { ok: false, message: "No existing glossaryKey" },
      { status: 400 }
    );

  const glossaries = fiction?.glossary;

  // GlossaryKey 최신화
  const { replace } = uploadGlossaries({
    originalTitle,
    id: fiction?.id,
    userId: token.user.id,
    naverAccessKey,
    naverSecretKey,
  });

  try {
    await replace(glossaryKey as string, glossaries);
  } catch (e) {
    return NextResponse.json({ ok: false, message: "failed" }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
  });
}
