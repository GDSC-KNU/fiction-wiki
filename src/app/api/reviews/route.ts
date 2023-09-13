import { NextResponse } from "next/server";
// const { google } = require("googleapis");

export async function GET() {
  // const customsearch = google.customsearch("v1");
  // const API_KEY = process.env.GOOGLE_API_KEY;
  // const cx = process.env.GOOGLE_SEARCH_ENGINE_ID;
  // const searchQuery = "학사신공 리뷰";

  // const search = async (query: string) => {
  //   const res = await customsearch.cse.list({
  //     q: query,
  //     cx: cx,
  //     key: API_KEY,
  //     num: 5, // number of search results to return
  //   });
  //   return res.data.items;
  // };

  // const response = await search(searchQuery || "");

  return NextResponse.json({ ok: true, reponse: {} });
}
