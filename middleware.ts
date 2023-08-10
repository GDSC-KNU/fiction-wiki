import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get("cookie"),
    },
  };

  if (
    req.nextUrl.pathname.startsWith("/fictions/create") &&
    !req.cookies.get("fdbssession")
  ) {
    return NextResponse.rewrite(new URL("/enter", req.url));
  }

  if (
    req.nextUrl.pathname.includes("/edit") &&
    !(
      req.cookies.get("__Secure-next-auth.session-token") ||
      req.cookies.get("next-auth.session-token")
    )
  ) {
    return NextResponse.rewrite(new URL("/enter", req.url));
  }

  if (
    req.nextUrl.pathname.startsWith("/profile") &&
    !(
      req.cookies.get("__Secure-next-auth.session-token") ||
      req.cookies.get("next-auth.session-token")
    )
  ) {
    return NextResponse.rewrite(new URL("/enter", req.url));
  }
}
