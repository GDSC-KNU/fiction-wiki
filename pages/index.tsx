import React from "react";
import type { NextPage } from "next";
import { Author, UserFictionStat } from "@prisma/client";
import client from "@libs/server/client";
import Search from "@components/search";
import FictionList from "@components/fictionList";
import HeadMeta from "@components/headMeata";

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
      <HeadMeta />
      <div>
        <Search />
      </div>
      <section className=" max-w-[1200px]">
        <div className="mt-5 font-bold text-xl border-b-[1px] py-4">
          평점 TOP{" "}
        </div>
        <FictionList
          data={data}
          type={"fictions_list"}
          isMain={true}
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
