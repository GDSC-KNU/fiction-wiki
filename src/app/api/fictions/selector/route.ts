import { NextRequest, NextResponse } from "next/server";
import client from "@libs/server/client";

export async function GET(req: NextRequest) {
  let categoryList = await client.category.findMany();
  let keywordList = await client.keyword.findMany();
  const fictionList = await client.fiction.findMany({
    select: {
      nationality: true,
    },
  });

  const nationalityList = fictionList.map((fiction) => fiction.nationality);
  const uniqueNationalityList = Array.from(new Set(nationalityList));

  return NextResponse.json(
    {
      ok: true,
      categoryList: categoryList,
      keywordList: keywordList,
      nationalityList: uniqueNationalityList,
    },
    { status: 200 }
  );
}
