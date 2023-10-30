import {
  Author,
  Category,
  Fiction,
  FictionStat,
  Keyword,
  Comment,
} from "@prisma/client";

interface EditFictionForm {
  title: string;
  author: string;
  nationality: string;
  categories: { value: string }[];
  date: string[];
  status: number[];
  synopsis: string;
  characters: string;
  currentState: string;
  keywords: string[];
  mcKeywords: string[];
  subKeywords: string[];
  consKeywords: string[];
  original: string;
  platforms: { value: string }[];
  image?: FileList | string | File[];
  volume?: number;
  isTranslated?: string;
  relatedTitle?: string[];
  relatedAuthor?: string[];
  originalAuthor?: string;
  type?: string;
  mediaMix?: { value: string }[];
  setup?: string;
  introduction?: string;
  originalTitle?: string;
}

interface FictionWithMore extends Fiction {
  fiction: Fiction;
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

interface EditFictionMutation {
  ok: boolean;
  fiction: Fiction;
}

export type { EditFictionForm, EditFictionMutation, FictionWithMore };
