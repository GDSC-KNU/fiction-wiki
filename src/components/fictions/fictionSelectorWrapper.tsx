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

import React, { useMemo, useState } from "react";

import FictionList from "@components/fictionList";
import useSWR from "swr";

import { ParsedUrlQueryInput } from "querystring";

import FictionSelector from "@components/fictions/fictionSelector";
import { useSearchParams } from "next/navigation";

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

interface QueryObject extends ParsedUrlQueryInput {
  keywords: string[];
  nationalities: string;
  categories: string[];
  sorting: string;
  releaseTimeFilter: string;
  dateYear: string;
  page: number;
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
  const searchParams = useSearchParams();
  const [queryObject, setQueryObject] = useState<QueryObject>({
    keywords: searchParams.get("keywords")?.split(",") || [],
    nationalities: searchParams.get("nationalities") || "all",
    categories: searchParams.get("categories")?.split(",") || [],
    sorting: searchParams.get("sorting") || "all",
    releaseTimeFilter: searchParams.get("releaseTimeFilter") || "all",
    dateYear: searchParams.get("dateYear") || "all",
    page: parseInt(searchParams.get("page") || "1"),
  });

  let queryString = useMemo(() => {
    const queryString = Object.entries(queryObject)
      .map(
        ([key, value]) =>
          `${key}=${
            Array.isArray(value)
              ? value.length
                ? value.join(",")
                : "all"
              : value
          }`
      )
      .join("&");

    if (queryString === "undefined") {
      return `${process.env.NEXT_PUBLIC_HOST + "/api/fictions"}`;
    } else
      return `${process.env.NEXT_PUBLIC_HOST + "/api/fictions"}?${queryString}`;
  }, [queryObject]);

  const { data } = useSWR<FictionsResponse>(queryString);

  return (
    <>
      <FictionSelector
        staticData={staticData}
        queryObject={queryObject}
        setQueryObject={setQueryObject}
      />
      {data && (
        <FictionList
          data={data?.fictions || {}}
          type={"fictions_list"}
          count={data?.fictionsCount || 0}
        />
      )}
    </>
  );
}
