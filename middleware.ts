import { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log(req.url);
}

export const config = {
  matcher: ["/profile", "/"],
};
