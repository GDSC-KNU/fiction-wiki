import React from "react";
import { Author, UserFictionStat } from "@prisma/client";
import client from "@libs/server/client";
import FictionList from "@components/FictionList";
import { Metadata } from "next";

export interface UserFictionStatWithMore extends UserFictionStat {
  total: number;
  _count: {
    users: number;
  };
}

export interface FictionWithMore extends FictionsResponse {
  _count: {
    favs: number;
  };
  userFictionStat: UserFictionStatWithMore;
  author: Author;
}

interface FictionsResponse {
  ok: boolean;
  fictions: FictionWithMore[];
}

export default async function Home() {
  const data = await client.fiction.findMany({
    take: 9,
    include: {
      userFictionStat: {
        select: {
          total: true,
          _count: true,
        },
      },
      author: {
        select: {
          name: true,
        },
      },
      keywords: {
        include: {
          keyword: true,
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
    orderBy: {
      userFictionStat: {
        total: "desc",
      },
    },
  });

  return (
    <div>
      <div className="  mx-auto max-w-[1200px]">
        <div className=" mt-3 border-b-[1px] px-1 text-xl font-bold  md:py-1">
          평점 TOP
        </div>
        <FictionList
          data={data}
          type={"fictions_list"}
          pagination={false}
        ></FictionList>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "소설위키",
  description:
    "국내외 웹소설에 관련한 다양한 정보를 제공합니다. 작품을 직접 평가하고 검색하세요.",

  twitter: {
    card: "summary_large_image",
    site: "@site",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://fictiondbs.com/",
    siteName: "소설위키",
    title: "소설위키",
  },
};
