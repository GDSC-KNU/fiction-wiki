import { atom } from "recoil";

export const pageAtom = atom({
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
