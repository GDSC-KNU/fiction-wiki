import { Control, useController, useFieldArray } from "react-hook-form";
import { EditFictionForm, CreateFictionForm } from "@/type/fiction";

export default function UseFictionForms({
  control,
}: {
  control: Control<EditFictionForm> | Control<CreateFictionForm>;
}) {
  const { field: title } = useController({
    name: "title",
    control,
    rules: {
      required: {
        value: true,
        message: "[제목] 을 입력해주세요.",
      },
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
      required: {
        value: true,
        message: "[제목(원제)] 을 입력해주세요.",
      },
      // minLength: {
      //   value: 2,
      //   message: "[제목(원제)] 최소 2자 이상 입력해주세요.",
      // },
    },
    defaultValue: "",
  });

  const { field: author } = useController({
    name: "author",
    control,
    rules: {
      required: {
        value: true,
        message: "[작가 이름(한글)] 을 입력해주세요.",
      },
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
      required: {
        value: true,
        message: "[분량] 을 입력해주세요.",
      },
      validate: (value) => value !== 0 || "[분량] 을 입력해주세요.",
      pattern: {
        value: /^\d+$/, // matches any sequence of one or more digits
        message: "[분량] 숫자만 입력해주세요.",
      },
    },
    defaultValue: 0,
  });

  const { field: type } = useController({
    name: "type",
    control,
    rules: {
      required: {
        value: true,
        message: "[타입] 을 입력해주세요.",
      },
    },
    defaultValue: "",
  });

  const { field: image } = useController({
    name: "image",
    control,
    rules: {
      // required: {
      //   value: true,
      //   message: "[이미지] 를 업로드해 주세요.",
      // },
      // minLength: {
      //   value: 1,
      //   message: "[이미지] 를 업로드해 주세요.",
      // },
    },
    defaultValue: "",
  });

  const { field: original } = useController({
    name: "original",
    control,
    rules: {
      required: {
        value: true,
        message: "[오리지널 링크] 를 입력해 주세요.",
      },
    },
    defaultValue: "",
  });

  // const { field: platforms } = useController({
  //   name: "platforms",
  //   control,
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "[플랫폼] 을 입력해 주세요.",
  //     },
  //     minLength: {
  //       value: 1,
  //       message: "[플랫폼] 을 입력해 주세요.",
  //     },
  //   },
  //   defaultValue: [],
  // });

  const { field: currentState } = useController({
    name: "currentState",
    control,
    rules: {
      required: {
        value: true,
        message: "[연재상태] 를 입력해 주세요.",
      },
    },
    defaultValue: "",
  });

  // const { field: mediaMix } = useController({
  //   name: "mediaMix",
  //   control,
  //   rules: {
  //     // required: {
  //     //   value: true,
  //     //   message: "[미디어믹스] 를 입력해 주세요.",
  //     // },
  //   },
  //   defaultValue: [],
  // });

  const { field: isTranslated } = useController({
    name: "isTranslated",
    control,
    rules: {},
    defaultValue: "",
  });

  const { field: nationality } = useController({
    name: "nationality",
    control,
    rules: {
      required: {
        value: true,
        message: "[국적] 을 입력해주세요.",
      },
    },
    defaultValue: "",
  });

  const dateStart = useController({
    name: "date.0",
    control,
    rules: {
      required: {
        value: true,
        message: "[연재 시작일] 을 입력해주세요.",
      },
      validate: (value) => {
        // Check if the value is only numbers
        // if (!/^\d+$/.test(value)) {
        //   return "[연재 시작일] 유효하지 않은 입력값입니다.(문자)";
        // }

        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          return "[연재 시작일] 유효하지 않은 입력값입니다.(포맷)";
        }
        return true; // Validation passed
      },
    },
    defaultValue: "",
  });

  const dateEnd = useController({
    name: "date.1",
    control,
    // rules: {
    //   required: {
    //     value: true,
    //     message: "[연재 종료일] 을 입력해주세요.",
    //   },
    // },
    defaultValue: "",
  });

  const categories = useFieldArray({
    control,
    name: "categories",
    rules: {
      required: {
        value: true,
        message: "[카테고리] 를 입력해 주세요.",
      },
      // minLength: {
      //   value: 1,
      //   message: "[카테고리] 를 입력해 주세요.",
      // },
    },
  });

  const platforms = useFieldArray({
    control,
    name: "platforms",
  });

  const mediaMix = useFieldArray({
    control,
    name: "mediaMix",
  });

  return {
    title,
    originalTitle,
    author,
    originalAuthor,
    volume,
    type,
    nationality,
    categories,
    platforms,
    mediaMix,
    image,
    original,
    currentState,
    isTranslated,
    dateStart,
    dateEnd,
  };
}
