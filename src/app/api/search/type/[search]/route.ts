import { NextRequest, NextResponse } from "next/server";
import client from "@libs/server/client";

export async function GET(req: NextRequest, { params }: any) {
  const page = req.nextUrl.searchParams.get("page");
  let { search } = params;
  const limit = 18;

  if (!page) return NextResponse.json({ ok: false }, { status: 500 });

  const fictions = await client.fiction.findMany({
    take: limit,
    skip: (+page - 1) * limit,
    where: {
      type: search as string,
    },
    include: {
      _count: {
        select: {
          favs: true,
        },
      },
      author: true,
      userFictionStat: {
        include: {
          _count: {
            select: {
              userRationOnFictions: true,
            },
          },
        },
      },
      keywords: {
        include: {
          keyword: true,
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
  });

  const fictionsCount = await client.fiction.count({
    where: {
      type: search as string,
    },
  });

  return NextResponse.json({
    ok: true,
    fictions,
    fictionsCount,
  });
}
