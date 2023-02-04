import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
// import { withAuth } from "next-auth/middleware";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get("cookie"),
    },
  };

  // console.log(req.cookies.get("next-auth.session-token"));

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
    !req.cookies.get("next-auth.session-token")
  ) {
    return NextResponse.rewrite(new URL("/enter", req.url));
  }
}

/////

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.

//   function middleware(req) {
//     // console.log(req.nextauth.token);
//     console.log("hey");
//     console.log(req.nextauth.token);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => (token ? true : false),
//     },
//   }
// );

// export const config = { matcher: ["/profile", "/fictions/create"] };
