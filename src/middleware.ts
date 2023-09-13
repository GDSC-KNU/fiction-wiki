import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  // const requestForNextAuth = {
  //   headers: {
  //     cookie: req.headers.get("cookie"),
  //   },
  // };

  const token = req.cookies.get("next-auth.session-token");

  // if (req.nextUrl.pathname.startsWith("/fictions/create")) {
  //   return NextResponse.rewrite(new URL("/enter", req.url));
  // }

  // if (req.nextUrl.pathname.includes("/edit") && !session) {
  //   return NextResponse.rewrite(new URL("/enter", req.url));
  // }

  // if (
  //   req.nextUrl.pathname.startsWith("/profile") &&
  //   !(
  //     req.cookies.get("__Secure-next-auth.session-token") ||
  //     req.cookies.get("next-auth.session-token")
  //   )
  // ) {
  //   return NextResponse.rewrite(new URL("/enter", req.url));
  // }
  if (req.nextUrl.pathname.startsWith("/api/fictions/glossaries")) {
    if (req.method === "POST" && !token)
      return NextResponse.rewrite(new URL("/enter", req.url));
  }

  if (!token) return NextResponse.rewrite(new URL("/enter", req.url));
  else return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/fictions/:id/userRate",
    "/fictions/create",
    "/fictions/:id/edit",
    "/profile",
    "/profile/edit",
    "/api/translation",
    "/api/fictions/glossaries",
  ],
};
