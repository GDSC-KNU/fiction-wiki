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
  keywords: string;
  nationalities: string;
  categories: string;
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
  // const page = searchparams.get("page");

  const [queryObject, setQueryObject] = useState<QueryObject>({
    keywords: "all",
    nationalities: "all",
    categories: "all",
    sorting: "all",
    releaseTimeFilter: "all",
    dateYear: "all",
    page: 1,
  });

  let queryString = useMemo(() => {
    const queryString = Object.entries(queryObject)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    if (queryString === "undefined") {
      return `${process.env.NEXT_PUBLIC_HOST + "/api/fictions"}`;
    }

    return `${process.env.NEXT_PUBLIC_HOST + "/api/fictions"}?${queryString}`;
  }, [queryObject]);

  const { data } = useSWR<FictionsResponse>(queryString);

  return (
    <div>
      <FictionSelector
        staticData={staticData}
        queryObject={queryObject}
        setQueryObject={setQueryObject}
      />
      {/* {isValidating && !data ? (
        <div className=" flex justify-center">
          <ClipLoader
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : null} */}
      <FictionList
        data={data?.fictions}
        type={"fictions_list"}
        count={data?.fictionsCount}
      />
    </div>
  );
}
