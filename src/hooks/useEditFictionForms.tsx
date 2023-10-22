import { Control, useController } from "react-hook-form";

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
  image?: FileList | string;
  volume?: number;
  isTranslated?: string;
  relatedTitle?: [];
  relatedAuthor?: [];
  originalAuthor?: string;
  type?: string;
  mediaMix?: { value: string }[];
  setup?: string;
  introduction?: string;
  originalTitle?: string;
}

export default function UseEditFictionForms({
  control,
}: {
  control: Control<EditFictionForm>;
}) {
  const { field: title } = useController({
    name: "title",
    control,
    rules: {
      required: true,
      minLength: {
        value: 2,
        message: "[제목] 최소 2자 이상 입력해주세요.",
      },
    },
    defaultValue: "",
  });

  const { field: originalTitle } = useController({
    name: "originalTitle",
    control,
    rules: {
      required: true,
      minLength: 3,
    },
    defaultValue: "",
  });

  const { field: author } = useController({
    name: "author",
    control,
    rules: {
      required: true,
    },
    defaultValue: "",
  });

  const { field: originalAuthor } = useController({
    name: "originalAuthor",
    control,
    rules: {
      required: true,
    },
    defaultValue: "",
  });

  const { field: volume } = useController({
    name: "volume",
    control,
    rules: {
      required: true,
      //   validate: (value) => value?.toString() !== "" || "This field is required",
      minLength: {
        value: 1,
        message: "최소 1자 이상 입력해주세요.",
      },
      pattern: {
        value: /^\d+$/, // matches any sequence of one or more digits
        message: "[분량] 숫자만 입력해주세요.",
      },
    },
    defaultValue: 0,
  });

  return { title, originalTitle, author, originalAuthor, volume };
}
