import client from "@libs/server/client";

import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest) {
  // const {
  //   query: { id, page },
  //   // session: { user },
  //   body,
  // } = req;

  const body = await req.json();
  const searchParams = req.nextUrl.searchParams;
  // const { id, page } = searchParams.get();
  const id = searchParams.get("id");
  const page = searchParams.get("page");

  const comments = await client.comment.findMany({
    take: 7,
    skip: typeof page === "string" ? (+page - 1) * 7 : 0,
    where: {
      fiction: {
        id: +id!.toString(),
      },
    },
  });

  const commentsCount = await client.comment.count({
    where: {
      fiction: {
        id: +id!.toString(),
      },
    },
  });

  return NextResponse.json({ comments, commentsCount, ok: true });
}

export async function DELETE(req: NextRequest) {
  // const body = await req.json();
  // const { id, page } = searchParams;

  const headersList = headers();

  const xDataHeader = headersList.get("x-data");

  if (!xDataHeader || typeof xDataHeader !== "string") return;

  const { userId, commentId } = JSON.parse(xDataHeader);

  // if (!commentId) return res.json({ ok: false });

  const entity = await client.userRationOnFiction.findFirst({
    where: {
      comment: {
        id: commentId,
      },
    },
    select: {
      id: true,
    },
  });

  if (entity) {
    await client.userRationOnFiction.delete({
      where: {
        id: entity!.id,
      },
    });
  }

  return NextResponse.json({ ok: true });
}
