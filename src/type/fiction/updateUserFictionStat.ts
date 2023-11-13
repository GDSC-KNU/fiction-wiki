import {
  Comment,
  User,
  Fiction,
  FictionStat,
  Author,
  Category,
  Keyword,
} from "@prisma/client";

interface CommentWithMore extends Comment {
  createdBy: User;
  canDelete: boolean;
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
  comments: CommentWithMore[];
}

interface MBTI {
  mbti: string;
  avg: string;
  cnt: string;
}

interface FictionResponse {
  ok: boolean;
  fiction: FictionWithMore;
  setup: string;
  mbtis?: MBTI[];
  similarFictions: FictionWithMore[];
}

interface PostCommentAndRateForm {
  comment: string;
  userFictionStat: any;
}

interface UpdateUserFictionStatForm {
  comment: string;
  originality: number;
  synopsisComposition: number;
  character: number;
  value: number;
  writing: number;
  verisimilitude: number;
}

export type {
  CommentWithMore,
  FictionResponse,
  PostCommentAndRateForm,
  UpdateUserFictionStatForm,
};
