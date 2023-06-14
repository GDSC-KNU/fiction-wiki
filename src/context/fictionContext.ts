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

interface FictionContextData {
  fictions: fictionWithComments[] | undefined;
  loading: boolean;
  error: any;
}

interface fictionWithComments extends Fiction {
  comments: Comment[];
}

export const FictionContext = createContext(null);
