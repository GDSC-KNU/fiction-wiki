import { Metadata } from "next";
import React from "react";

export default function TranslationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

export const metadata: Metadata = {
  title: {
    template: "%s | 소설위키",
    default: "번역 | 소설위키",
  },
  description:
    "웹소설을 직접 번역해서 감상하세요. 용어집을 등록해서 번역 결과물을 개선할 수 있습니다.",
  twitter: {
    card: "summary_large_image",
    site: "@fictiondbs",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://fictiondbs.com/translation",
    siteName: "소설위키",
    title: "번역 | 소설위키",
    images: [`/fdbs_logo.png`],
  },
  icons: {
    icon: `/favicon/favicon.ico`,
  },
};
