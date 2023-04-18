import {
  Fiction,
  Keyword,
  FictionStat,
  KeywordsOnFictions,
  UserFictionStat,
  Author,
} from "@prisma/client";
import useSWR from "swr";
import React, { useEffect, useState } from "react";
import FictionList from "@components/fictionList";
import { useRouter } from "next/router";
// import { pageAtom } from "../atoms";
// import { useRecoilState } from "recoil";

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

const FictionListWrapper = ({
  isChecked,
  checkedItems,
  checkedGenres,
  checkedNationalities,
  checkedSortings,
  checkedDateYear,
}: any) => {
  const router = useRouter();
  // console.log(process.env.NODE_ENV);
  //http://localhost:3000/api/fictions
  //  process.env.NODE_ENV === "development"
  // ? "http://localhost:3000/api/fictions"
  // : "https://fdbs-proto.vercel.app/api/fictions?"

  let queryString = `${
    process.env.NODE_ENV === "production"
      ? "https://fdbs-proto.vercel.app/api/fictions"
      : "http://localhost:3000/api/fictions"
  }?${"keywords=" + (Array.from(checkedItems).join(",") || "all")}${
    "&nationalities=" + (Array.from(checkedNationalities).join(",") || "all")
  }${"&genres=" + (Array.from(checkedGenres).join(",") || "all")}${
    "&sorting=" + (Array.from(checkedSortings).join(",") || "all")
  }${"&dateYear=" + (router?.query?.dateYear || "all")}${
    "&page=" + (router?.query?.page || 1)
  }
  `;

  const [ready, setReady] = useState(false);

  const { data } = useSWR<FictionsResponse>(ready ? queryString : null, {
    suspense: true,
  });
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <FictionList
      data={data}
      type={"fictions_list"}
      count={data?.fictions?.length}
    />
  );
};

export default FictionListWrapper;
