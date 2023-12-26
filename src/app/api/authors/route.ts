import { NextRequest, NextResponse } from "next/server";
import client from "@libs/server/client";

export async function GET(req: NextRequest) {
  // const { page } = params;

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;

  if (!page)
    return NextResponse.json(
      { ok: false, message: "no page" },
      { status: 400 }
    );

  const authors = await client.author.findMany({
    take: 12,
    skip: (+page - 1) * 12,
    include: {
      fictions: {
        select: {
          userFictionStat: true,
          title: true,
          id: true,
        },
      },
    },
  });

  const authorsCount = await client.author.count({});

  return NextResponse.json({
    authors: authors,
    // authorsCount: authorsCount,
  });
}
