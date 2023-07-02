import React, { createContext, useEffect, useState, ReactNode } from "react";

import { useRouter } from "next/router";
import useSWR from "swr";

import type {
  Fiction,
  FictionStat,
  Keyword,
  UserRationOnFiction,
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
  similarFictions: Fiction[];
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
  const router = useRouter();
  const [fictionContext, setFictionContext] = useState(initialData);

  const { data, mutate: boundMutate } = useSWR<any>(
    `/api/fictions/${router.query.id}`
  );
  console.log(fictionContext);

  useEffect(() => {
    if (data) {
      data.fiction.startDate = new Date(data.fiction?.startDate || 0);
      data.fiction.endDate = new Date(data.fiction?.endDate || 0);
      setFictionContext(data);
    }
  }, [data]);

  return (
    <FictionContext.Provider value={fictionContext}>
      {children}
    </FictionContext.Provider>
  );
};