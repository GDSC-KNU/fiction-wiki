import { useQueryObject } from "@/hooks/useQueryObject";
import FictionList from "@components/FictionList";
import Pagination from "@components/fictions/Pagination";
import useSWR from "swr";

import {
  Fiction,
  Keyword,
  FictionStat,
  KeywordsOnFictions,
  UserFictionStat,
  Author,
  Category,
} from "@prisma/client";
import { useEffect, useRef } from "react";
import useSWRWithFallbackData from "@/hooks/useSwrWithFallbackData";

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

export default function FictionsDisplayer({
  fallbackData,
}: {
  fallbackData: FictionsResponse;
}) {
  const hasMounted = useRef(false);
  const { queryString } = useQueryObject();
  const { data, isLoading, isValidating } = useSWR<FictionsResponse>(
    `${process.env.NEXT_PUBLIC_HOST}/api/fictions?${queryString}`,

    {
      suspense: true,
      fallbackData: hasMounted.current ? undefined : fallbackData,
    }
  );

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  return (
    <>
      <FictionList
        data={data?.fictions}
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
  );
}
