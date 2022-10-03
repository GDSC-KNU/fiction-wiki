import type { NextFetchEvent, NextRequest } from "next/server";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
// import { withAuth } from "next-auth/middleware";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get("cookie"),
    },
  };

  // console.log(requestForNextAuth.headers.cookie);
  // console.log(req.cookies.get("next-auth.csrf-token"));
  // console.log("hi");
  //@ts-ignore
  // const session = await getSession({ req: requestForNextAuth });
  // const ua = userAgent(req);
  // if (ua?.isBot) {
  //   return NextResponse.next();
  // }
  // if (req.nextUrl.pathname.startsWith("/enter")) {
  // }

  if (
    req.nextUrl.pathname.startsWith("/fictions/create") &&
    !req.cookies.get("fdbssession")
  ) {
    return NextResponse.rewrite(new URL("/enter", req.url));
  }

  if (
    req.nextUrl.pathname.includes("/edit") &&
    !req.cookies.get("fdbssession")
  ) {
    return NextResponse.rewrite(new URL("/enter", req.url));
  }

  if (
    req.nextUrl.pathname.startsWith("/profile") &&
    !req.cookies.get("next-auth.csrf-token")
  ) {
    return NextResponse.rewrite(new URL("/enter", req.url));
  }
}
