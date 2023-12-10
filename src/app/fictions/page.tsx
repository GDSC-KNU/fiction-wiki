import { Metadata } from "next";

import FictionPageWrapper from "@components/fictions/FictionPageWrapper";

export default async function FictionsPage() {
  const staticData = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/fictions/selector`,
    {
      next: {
        revalidate: 60 * 60 * 24 * 7,
      },
    }
  ).then((res) => res.json());

  const fictionFallbackData = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/fictions`
  ).then((res) => res.json());

  return (
    <>
      <FictionPageWrapper
        fallbackData={fictionFallbackData}
        staticDataForSelector={staticData}
      />
    </>
  );
}

export const metadata: Metadata = {
  applicationName: "소설위키",
  title: ` 작품 | 소설위키`,
  description: "원하는 소설에 대한 정보를 직접 검색해서 찾아보세요.",
  keywords: `작품목록, 작품검색, 소설목록, 소설검색`,
  openGraph: {
    siteName: "소설위키",
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
