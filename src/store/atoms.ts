"use client";

import { atom, selector } from "recoil";
import qs from "query-string";
import { QS_PARSE_OPTIONS, QS_STRINGIFY_OPTIONS } from "@/utils/qsOption";

const SetQueryObjectAtomEffect = ({ onSet }: any) => {
  onSet((newValue: any) => {
    const { pathname } = location;
    const newUrl = qs.stringify(newValue, QS_STRINGIFY_OPTIONS as any);
    const as = `${pathname}${newUrl ? "?" : ""}${newUrl}`;
    window.history.replaceState(null, "", as);
  });
};

interface IInitialQueryObject {
  keywords: string[];
  nationalities: string;
  categories: string[];
  sorting: string;
  dateYear: string;
  page: number;
  tab: string;
}

const initialQueryObject = (): IInitialQueryObject => {
  const defaultQueryObject: IInitialQueryObject = {
    keywords: [],
    nationalities: "",
    categories: [],
    sorting: "",
    dateYear: "",
    page: 1,
    tab: "",
  };

  if (!globalThis.location) return defaultQueryObject;

  const search = globalThis.location.search;
  const parsed = qs.parse(search, QS_PARSE_OPTIONS as any);

  return {
    tab: typeof parsed.tab === "string" ? parsed.tab : "",
    keywords: Array.isArray(parsed.keywords) ? parsed.keywords : ([] as any),
    nationalities:
      typeof parsed.nationalities === "string" ? parsed.nationalities : "",
    categories: Array.isArray(parsed.categories)
      ? parsed.categories
      : ([] as any),
    sorting: typeof parsed.sorting === "string" ? parsed.sorting : "",
    dateYear: typeof parsed.dateYear === "string" ? parsed.dateYear : "",
    page: typeof parsed.page === "string" ? parseInt(parsed.page) : 1,
  };
};

export const queryObjectAtom = atom({
  key: "queryObject",
  default: initialQueryObject(),
  effects: [SetQueryObjectAtomEffect],
});

export const queryStringSelector = selector({
  key: "queryString",
  get: ({ get }) => {
    const queryObject = get(queryObjectAtom);
    const queryString = qs.stringify(queryObject, QS_STRINGIFY_OPTIONS as any);
    return queryString;
  },
});

export const fictionPageAtom = atom({
  key: "whatPage",
  default: 1,
});

export const authorPageAtom = atom({
  key: "authorWhatPage",
  default: 1,
});

export const searchPageAtom = atom({
  key: "searchWhatPage",
  default: 1,
});
