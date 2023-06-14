import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

import type {
  Fiction,
  FictionStat,
  Keyword,
  UserRationOnFiction,
  Author,
  Category,
} from "@prisma/client";
import useSWR from "swr";
import { useRouter } from "next/router";

interface FictionContextData {
  fictions: fictionWithComments[] | undefined;
  loading: boolean;
  error: any;
}

interface fictionWithComments extends Fiction {
  comments: Comment[];
}

export const FictionContext = createContext(null);

export const FictionProvider = ({ children }: any) => {
  const router = useRouter();
  const [data, setData] = useState<FictionContextData>();

  const { data: fiction, error } = useSWR<Fiction[]>(
    `/api/fictions/${router.query.id}`
  );

  useEffect(() => {
    if (fiction) {
      setData({ fiction });
    }
  }, [fiction]);

  return <FictionContext.Provider value={}>{children}</FictionContext.Provider>;
};
