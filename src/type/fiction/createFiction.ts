import { Fiction } from "@prisma/client";

interface CreateFictionForm {
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

interface CreateFictionMutation {
  ok: boolean;
  fiction: Fiction;
}

export type { CreateFictionForm, CreateFictionMutation };
