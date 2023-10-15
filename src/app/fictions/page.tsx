import React from "react";

import FictionSelectorWrapper from "@components/fictions/fictionSelectorWrapper";
import { Metadata } from "next";

export default async function FictionsPage() {
  const staticData = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/fictions/selector`,
    {
      next: {
        revalidate: 60 * 60 * 24 * 7,
      },
    }
  ).then((res) => res.json());

  // const staticDataWithAll = {
  //   ...staticData,
  //   categoryList: [{ id: 1111, name: "all" }, ...staticData.categoryList],
  //   keywordList: [{ id: 1111, name: "all" }, ...staticData.keywordList],
  //   nationalityList: ["all", ...staticData.nationalityList],
  // };

  return (
    <>
      <FictionSelectorWrapper staticData={staticData} />
    </>
  );
}

export const metadata: Metadata = {
  title: ` 작품 | 소설위키`,
  description: "원하는 소설에 대한 정보를 직접 검색해서 찾아보세요.",
  keywords: `작품목록, 작품검색, 소설목록, 소설검색`,
  openGraph: {
    type: "website",
    title: ` 작품 | 소설위키`,
    description: "원하는 소설에 대한 정보를 직접 검색해서 찾아보세요.",
    locale: "ko_KR",
    url: `https://fictiondbs.com/fictions`,
  },
  twitter: {
    title: ` 작품 | 소설위키`,
    description: "원하는 소설에 대한 정보를 직접 검색해서 찾아보세요.",
    site: "@fdbs",
    creator: "@fdbs",
    card: "summary_large_image",
  },
};

// export const runtime = "edge";
