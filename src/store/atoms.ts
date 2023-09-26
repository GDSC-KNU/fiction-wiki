"use client";

import { atom, selector } from "recoil";

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

export const queryObjectAtom = atom({
  key: "queryObject",
  default: {
    keywords: [],
    nationalities: "all",
    categories: [],
    sorting: "all",
    releaseTimeFilter: "all",
    dateYear: "all",
    page: 1,
  },
});

export const queryStringSelector = selector({
  key: "queryString",
  get: ({ get }) => {
    const queryObject = get(queryObjectAtom);
    return Object.entries(queryObject)
      .map(
        ([key, value]) =>
          `${key}=${Array.isArray(value) ? value.join(",") : value}`
      )
      .join("&");
  },
});
