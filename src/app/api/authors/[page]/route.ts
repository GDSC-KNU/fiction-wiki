import { NextRequest, NextResponse } from "next/server";
import client from "@libs/server/client";

export async function GET(req: NextRequest, { params }: any) {
  const { page } = params;
  if (!page)
    return NextResponse.json(
      { ok: false, message: "no page" },
      { status: 400 }
    );

  const authors = await client.author.findMany({
    take: 18,
    skip: (+page - 1) * 18,
    include: {
      fictions: {
        include: {
          userFictionStat: true,
        },
      },
    },
  });

  const authorsCount = await client.author.count({});

  return NextResponse.json({
    authors: authors,
    authorsCount: authorsCount,
  });
}
