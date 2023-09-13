import { NextRequest, NextResponse } from "next/server";
import client from "@libs/server/client";

export async function GET(req: NextRequest, { params }: any) {
  const page = req.nextUrl.searchParams.get("page");
  let { search: title } = params;
  const limit = 18;

  const fictions = await client.fiction.findMany({
    take: limit,
    skip: (+page!.toString() - 1) * limit,
    where: {
      title: {
        contains: title as string,
      },
    },
    include: {
      userFictionStat: {
        include: {
          userRationOnFictions: true,
          _count: {
            select: {
              users: true,
            },
          },
        },
      },
      author: true,
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
    orderBy: {
      title: "desc",
    },
  });

  const fictionsCount = await client.fiction.count({
    where: {
      title: {
        contains: title as string,
      },
    },
  });

  return NextResponse.json({
    ok: true,
    fictions,
    fictionsCount,
  });
}
