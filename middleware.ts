import type { NextFetchEvent, NextRequest } from "next/server";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get("cookie"),
    },
  };
  //@ts-ignore
  const session = await getSession({ req: requestForNextAuth });
  console.log(session);
  if (req.nextUrl.pathname.startsWith("/fictions/create")) {
    if (!session) {
      return NextResponse.rewrite(new URL("/enter", req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith("/profile")) {
    if (!session) {
      return NextResponse.rewrite(new URL("/enter", req.url));
    }
  }
}
