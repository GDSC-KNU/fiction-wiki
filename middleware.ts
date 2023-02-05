import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get("cookie"),
    },
  };
  // const token = await getToken({
  //   req: req,
  //   secret: process.env.SECRET,
  // });

  // console.log(token);
  // console.log(req.nexauth?.token);
  // const allCookies = req.cookies.getAll();
  // console.log(allCookies);

  // console.log(requestForNextAuth.headers.cookie);
  // console.log(req.cookies.get("next-auth.csrf-token"));
  // console.log("hi");
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
    !(
      req.cookies.get("__Secure-next-auth.session-token") ||
      req.cookies.get("next-auth.session-token")
    )
  ) {
    return NextResponse.rewrite(new URL("/enter", req.url));
  }
}
