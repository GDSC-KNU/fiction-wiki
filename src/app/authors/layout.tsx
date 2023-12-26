import React from "react";
import type { Metadata } from "next";

export default function AuthorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" mx-4 mt-10 flex justify-center">{children}</div>;
}

export const metadata: Metadata = {
  // canonical={`https://fictiondbs.com/authors/${page}`},
  title: "작가 목록",
  description: "웹소설 작가들을 검색하세요.",
  openGraph: {
    title: "작가 목록",
    url: "https://fictiondbs.com/authors",
    description: "작가들에 대해 검색하세요.",
  },
};
