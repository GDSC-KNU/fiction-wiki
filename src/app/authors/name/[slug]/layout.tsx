import React from "react";

import type { Metadata, ResolvingMetadata } from "next";

export default async function AuthorDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}) {
  return <div className=" flex justify-center">{children}</div>;
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const { author }: any = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/authors/name/${slug}`,
    {
      next: {
        revalidate: 60 * 60 * 24 * 7,
      },
    }
  ).then((res) => res.json());

  return {
    title: `${author.name} | 소설위키`,
    description: author.description || "작가 정보가 없습니다.",
    keywords: `${author.name}, ${author.rawName}, ${author.relatedName}`,
    applicationName: "소설위키",
    openGraph: {
      title: `${author.name} | 소설위키`,
      description: author.description || "작가 정보가 없습니다.",
      locale: "ko_KR",
      url: `https://fictiondbs.com/authors/name/${author.name}`,
      siteName: "소설위키",
      images: author.fictions.map((fiction: any) => fiction.image),
    },
    twitter: {
      site: "@site",
      card: "summary_large_image",
    },
  };
  // canonical={`https://fictiondbs.com/authors/${page}`},
  //   title: "작가 목록",
  //   description: "웹소설 작가들을 검색하세요.",
  //   openGraph: {
  //     title: "작가 목록",
  //     url: "https://fictiondbs.com/authors",
  //     description: "작가들에 대해 검색하세요.",
  //   },
}
