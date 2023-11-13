import { Control, useController, useFieldArray } from "react-hook-form";

export default function UseFictionForms({
  control,
}: {
  control: Control<any> | Control<any>;
}) {
  const { field: comment } = useController({
    name: "comment",
    control,
    rules: {
      required: {
        value: true,
        message: "[댓글] 을 입력해주세요.",
      },
    },
    defaultValue: "",
  });

  const { field: originality } = useController({
    name: "originality",
    control,
    rules: {
      validate: (value) => value !== 0 || "[평점-독창성] 을 입력해주세요.",
    },
    defaultValue: 0,
  });

  const { field: synopsisComposition } = useController({
    name: "synopsisComposition",
    control,
    rules: {
      validate: (value) => value !== 0 || "[평점-스토리] 을 입력해주세요.",
    },
    defaultValue: 0,
  });

  const { field: writing } = useController({
    name: "writing",
    control,
    rules: {
      validate: (value) => value !== 0 || "[평점-필력] 을 입력해주세요.",
    },
    defaultValue: 0,
  });

  const { field: character } = useController({
    name: "character",
    control,
    rules: {
      validate: (value) => value !== 0 || "[평점-캐릭터] 을 입력해주세요.",
    },
    defaultValue: 0,
  });

  const { field: value } = useController({
    name: "value",
    control,
    rules: {
      validate: (value) => value !== 0 || "[평점-필력] 을 입력해주세요.",
    },
    defaultValue: 0,
  });

  const { field: verisimilitude } = useController({
    name: "verisimilitude",
    control,
    rules: {
      validate: (value) => value !== 0 || "[핍진성] 을 입력해주세요.",
    },
    defaultValue: 0,
  });

  return {
    comment,
    originality,
    synopsisComposition,
    writing,
    character,
    value,
    verisimilitude,
  };
}
