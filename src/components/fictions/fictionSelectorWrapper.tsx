"use client";

import {
  Fiction,
  Keyword,
  FictionStat,
  KeywordsOnFictions,
  UserFictionStat,
  Author,
  Category,
} from "@prisma/client";

import React from "react";

import FictionList from "@components/fictionList";
import useSWR from "swr";

import FictionSelector from "@components/fictions/fictionSelector";

import { useQueryObject } from "@/hooks/useQueryObject";
import { useHrefChangeNotifier } from "@/hooks/useHrefChangeNotifier";
import Pagination from "@components/fictions/pagination";

interface UserFictionStatWithMore extends UserFictionStat {
  _count: {
    users: number;
  };
}

interface FictionWithMore extends Fiction {
  keywords: [KeywordsOnFictionsWithMore];
  fictionStat: [FictionStat];
  userFictionStat: UserFictionStatWithMore;
  author: Author;
}

interface KeywordsOnFictionsWithMore extends KeywordsOnFictions {
  keyword: Keyword;
}

interface FictionsResponse {
  ok: boolean;
  fictions: FictionWithMore[];
  fictionsCount: number;
  keywords: Keyword[];
  categories: string[];
  nationalities: string[];
}

interface FictionSelectorProps {
  staticData: {
    keywordList: Keyword[];
    nationalityList: string[];
    categoryList: Category[];
  };
}

export default function FictionSelectorWrapper({
  staticData,
}: FictionSelectorProps) {
  const { queryString } = useQueryObject();

  const { data } = useSWR<FictionsResponse>(
    `${process.env.NEXT_PUBLIC_HOST}/api/fictions?${queryString}`
  );

  useHrefChangeNotifier();

  return (
    <>
      <FictionSelector
        staticData={staticData}
        // queryObject={queryObject}
        // setQueryObject={setQueryObject}
      />
      {data && (
        <>
          <FictionList
            data={data?.fictions || {}}
            type={"fictions_list"}
            count={data?.fictionsCount || 0}
            pagination={false}
          />
          <Pagination
            totalItemsCount={data?.fictionsCount || 0}
            totalPagesCount={Math.ceil((data?.fictionsCount || 1) / 18)}
            pageRangeDisplayed={5}
          />
        </>
      )}
    </>
  );
}
