import client from "@libs/server/client";

// import revalidator from "@libs/server/revalidator";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  const { id } = params;

  const fiction = await client.fiction.findUnique({
    where: {
      id: +id!.toString(),
    },
  });

  const history = await client.fictionHistory.findMany({
    where: {
      fictionId: +id!.toString(),
    },
    include: {
      editedBy: {
        select: {
          image: true,
          email: true,
          nickname: true,
        },
      },
    },
  });

  return NextResponse.json({
    ok: true,
    fiction,
    history,
  });
}
