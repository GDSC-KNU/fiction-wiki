import React from "react";
import type { NextPage } from "next";
import { Author, UserFictionStat } from "@prisma/client";
import client from "@libs/server/client";
import Search from "@components/search";
import FictionList from "src/components/fictionList";
import HeadMeta from "@components/headMeata";
import { NextSeo } from "next-seo";

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

const Home: NextPage<{ fictions: FictionWithMore[] }> = (data) => {
  return (
    <div>
      {/* <HeadMeta /> */}
      <NextSeo
        title="Home"
        description="국내외 웹소설에 관련한 다양한 정보를 제공합니다. 작품을 직접 평가하고 검색하세요"
        canonical="https://fictiondbs.com"
        openGraph={{
          url: "https://fictiondbs.com",
        }}
      />
      <div>{/* <Search /> */}</div>
      <section className=" max-w-[1200px]">
        <div className=" mt-3 border-b-[1px] px-1 text-xl font-bold  md:py-1">
          평점 TOP
        </div>
        <FictionList
          data={data}
          type={"fictions_list"}
          pagination={false}
        ></FictionList>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const fictions = await client.fiction.findMany({
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

  return {
    props: {
      fictions: JSON.parse(JSON.stringify(fictions)),
    },
  };
}

export default Home;
