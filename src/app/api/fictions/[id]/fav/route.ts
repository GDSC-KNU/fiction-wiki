import client from "@libs/server/client";
import { NextResponse } from "next/server";

export async function GET() {
  let isLiked;

  // const alreadyExists = await client.fav.findFirst({
  //   where: {
  //     fictionId: +id!.toString(),
  //     userId: session?.user?.id,
  //   },
  // });
  // // console.log("faved");
  // if (alreadyExists) isLiked = true;
  // else isLiked = false;

  return NextResponse.json({ ok: false, isLiked });
}

export async function POST() {
  let isLiked;

  // const alreadyExists = await client.fav.findFirst({
  //   where: {
  //     fictionId: +id!.toString(),
  //     userId: session?.user?.id,
  //   },
  // });

  // if (alreadyExists) {
  //   //delete
  //   await client.fav.delete({
  //     where: {
  //       id: alreadyExists.id,
  //     },
  //   });
  //   isLiked = false;
  // } else {
  //   //create
  //   await client.fav.create({
  //     data: {
  //       user: {
  //         connect: {
  //           id: session?.user?.id,
  //         },
  //       },
  //       fiction: {
  //         connect: {
  //           id: +id!.toString(),
  //         },
  //       },
  //     },
  //   });
  //   isLiked = true;
  // }

  return NextResponse.json({ ok: false, isLiked });
}
