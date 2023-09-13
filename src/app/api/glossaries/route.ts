import { NextRequest, NextResponse } from "next/server";
import client from "@libs/server/client";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  let searchParams = req.nextUrl.searchParams;
  let page: number | string = searchParams?.get("page") || 1;
  let originalTitle: string | null = null;
  let title: string | undefined;

  if (searchParams.entries.length < 2) {
    // get specific one
    originalTitle = searchParams.get("originalTitle");
    title = searchParams.get("title") || "";

    const glossaries = await client.glossary.findMany({
      where: {
        fiction: {
          // originalTitle: originalTitle,
          title: {
            contains: title,
          },
        },
      },
      include: {
        fiction: {
          select: {
            title: true,
            originalTitle: true,
          },
        },
      },
      take: 10,
      skip: (+page!.toString() - 1 || 0) * 10,
    });

    const glossariesCount = await client.glossary.count({
      where: {
        fiction: {
          // originalTitle: originalTitle,
          title: {
            contains: title,
          },
        },
      },
    });

    return NextResponse.json({
      ok: true,
      glossaries,
      glossariesCount,
    });
  } else {
    // get All
    const glossaries = await client.glossary.findMany({
      take: 10,
      skip: (+page!.toString() - 1 || 0) * 10,
      include: {
        fiction: {
          select: {
            originalTitle: true,
            title: true,
          },
        },
      },
    });
    const glossariesCount = await client.glossary.count({});

    return NextResponse.json({
      ok: true,
      glossaries,
      glossariesCount,
    });
  }
}
const secret = process.env.NEXTAUTH_SECRET;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const token = await getToken({ req, secret });
  const user = token?.user;
  if (!user) return NextResponse.json({ ok: false, error: "not logged in" });

  const { chinese, korean, category, originalTitle, id } = body;

  const newGlossary = await client.glossary.create({
    data: {
      chinese: chinese,
      korean: korean,
      category: category,
      fiction: {
        connect: {
          id: id,
        },
      },
    },
  });

  return NextResponse.json({ ok: true });
}
