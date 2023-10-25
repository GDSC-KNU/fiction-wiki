import { Control, useController, useFieldArray } from "react-hook-form";
import { EditFictionForm } from "@/type/fiction";

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
      minLength: {
        value: 2,
        message: "[원제] 최소 2자 이상 입력해주세요.",
      },
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
      required: {
        value: true,
        message: "[작가 이름(원어)] 를 입력해주세요.",
      },
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
        message: "[분량] 최소 1자 이상 입력해주세요.",
      },
      pattern: {
        value: /^\d+$/, // matches any sequence of one or more digits
        message: "[분량] 숫자만 입력해주세요.",
      },
    },
    defaultValue: 0,
  });

  const {
    append: categoriesAppend,
    remove: categoriesRemove,
    fields: categoriesFields,
  } = useFieldArray({
    control,
    name: "categories",
  });

  const {
    append: platformsAppend,
    remove: platformsRemove,
    fields: platformsFields,
  } = useFieldArray({
    control,
    name: "platforms",
  });

  const {
    append: mediaMixAppend,
    remove: mediaMixRemove,
    fields: mediaMixFields,
  } = useFieldArray({
    control,
    name: "mediaMix",
  });

  return {
    title,
    originalTitle,
    author,
    originalAuthor,
    volume,
    categoriesFields,
    categoriesAppend,
    categoriesRemove,
    platformsFields,
    platformsAppend,
    platformsRemove,
    mediaMixFields,
    mediaMixAppend,
    mediaMixRemove,
  };
}
