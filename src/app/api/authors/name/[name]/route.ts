import { NextRequest, NextResponse } from "next/server";
import client from "@libs/server/client";

export async function GET(req: NextRequest, { params }: any) {
  // const { slug } = ctx.params as IParams;
  // if (!slug) {
  //   return {
  //     props: {},
  //   };
  // }

  const { name: slug } = params;

  if (!slug)
    return NextResponse.json(
      { ok: false, message: "no slug" },
      { status: 400 }
    );

  const author = await client.author.findUnique({
    where: {
      name: slug || "",
    },
    include: {
      fictions: {
        include: {
          userFictionStat: {
            include: {
              userRationOnFictions: true,
              _count: {
                select: {
                  userRationOnFictions: true,
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
      },
    },
  });

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json({
    author,
  });
}
