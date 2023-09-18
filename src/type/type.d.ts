import {
  Fiction,
  Keyword,
  Category,
  FictionStat,
  Author,
} from "@prisma/client";

export interface FictionWithMore extends Fiction {
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
  author: Author?;
  categories: [
    {
      category: Category?;
    }
  ];
  comments: Comment[]?;
}
