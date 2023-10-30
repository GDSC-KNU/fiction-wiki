"use client";

import {
  Fiction,
  Keyword,
  FictionStat,
  KeywordsOnFictions,
  UserFictionStat,
  Author,
} from "@prisma/client";

import React from "react";

import FictionList from "@components/FictionList";
import useSWR from "swr";

import { useQueryObject } from "@/hooks/useQueryObject";
import Pagination from "@components/fictions/Pagination";

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

export default function FictionSelectorWrapper({
  fallbackData,
}: {
  fallbackData?: FictionsResponse;
}) {
  const { queryString } = useQueryObject();
  const { data } = useSWR<FictionsResponse>(
    `${process.env.NEXT_PUBLIC_HOST}/api/fictions?${queryString}`,
    { suspense: true }
  );

  return (
    <>
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
