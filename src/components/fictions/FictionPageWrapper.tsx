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

import React, { Suspense, lazy } from "react";

import { OverlayProvider } from "@toss/use-overlay";
import FictionSelector from "./FictionSelector";
import ClipLoader from "react-spinners/ClipLoader";

const FictionsDisplayer = lazy(
  () => import("@components/fictions/FictionsDisplayer")
);

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

export default function FictionPageWrapper({
  fallbackData,
  staticDataForSelector,
}: {
  fallbackData: FictionsResponse;
  staticDataForSelector: {
    keywordList: Keyword[];
    nationalityList: string[];
    categoryList: Category[];
  };
}) {
  return (
    <>
      <OverlayProvider>
        <FictionSelector staticData={staticDataForSelector} />
        <Suspense
          fallback={
            <div className="mt-20 flex items-center justify-center">
              <ClipLoader
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          }
        >
          <FictionsDisplayer fallbackData={fallbackData} />
        </Suspense>
      </OverlayProvider>
    </>
  );
}
