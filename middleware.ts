import type { NextFetchEvent, NextRequest } from "next/server";
import { getSession } from "next-auth/react";
import { NextResponse, userAgent } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get("cookie"),
    },
  };
  //@ts-ignore
  const session = await getSession({ req: requestForNextAuth });
  const ua = userAgent(req);
  // if (ua?.isBot) {
  //   return NextResponse.next();
  // }
  // if (req.nextUrl.pathname.startsWith("/enter")) {
  // }

  if (
    req.nextUrl.pathname.startsWith("/fictions/create") &&
    (!req.cookies.get("fdbssession") || !session)
  ) {
    return NextResponse.rewrite(new URL("/enter", req.url));
  }

  if (
    req.nextUrl.pathname.includes("/edit") &&
    (!req.cookies.get("fdbssession") || !session)
  ) {
    return NextResponse.rewrite(new URL("/enter", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/profile") && !session) {
    if (!session) {
      return NextResponse.rewrite(new URL("/enter", req.url));
    }
  }
}
