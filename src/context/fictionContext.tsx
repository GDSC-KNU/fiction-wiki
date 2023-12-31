"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";

import { useSearchParams } from "next/navigation";
import useSWR from "swr";

import type {
  Fiction,
  FictionStat,
  Keyword,
  Author,
  Category,
} from "@prisma/client";

// interface FictionContextData {
//   fiction: fictionWithComments;
//   ok: true;
//   mbtis: any;
// }

interface FictionContextData {
  fiction: FictionWithMore;
  similarFictions?: Fiction[];
  mbtis?: any;
  setup?: any;
}

interface FictionWithMore extends Fiction {
  keywords: [
    {
      keyword: Keyword;
    }
  ];
  fictionStat: FictionStat;
  userFictionStat: {
    originality: number;
    writing: number;
    verisimilitude: number;
    value: number;
    synopsisComposition: number;
    character: number;
    total: number;
    _count: {
      userRationOnFictions: number;
    };
  };
  author: Author;
  categories: [
    {
      category: Category;
    }
  ];
  comments: Comment[];
}

interface FictionProviderProps {
  children: ReactNode;
  initialData: FictionContextData;
}

export const FictionContext = createContext({} as FictionContextData);

export const FictionProvider: React.FC<FictionProviderProps> = ({
  children,
  initialData,
}) => {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const [fictionContext, setFictionContext] = useState(initialData);

  const { data, mutate: boundMutate } = useSWR<any>(
    id ? `${process.env.NEXT_PUBLIC_HOST}/api/fictions/${id}` : null
  );

  useEffect(() => {
    const processData = async () => {
      if (data) {
        let updatedFiction = { ...fictionContext.fiction, ...data.fiction };

        updatedFiction.startDate = new Date(updatedFiction.startDate || 0);
        updatedFiction.endDate = new Date(updatedFiction.endDate || 0);
        setFictionContext({
          ...fictionContext,
          ...data,
          fiction: updatedFiction,
        });
      }
    };

    processData();
  }, [data]);

  return (
    <FictionContext.Provider value={fictionContext}>
      {children}
    </FictionContext.Provider>
  );
};
