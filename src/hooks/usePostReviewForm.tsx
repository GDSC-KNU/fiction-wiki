import { UpdateUserFictionStatForm } from "@/type/fiction";
import { Control, useController, useFieldArray } from "react-hook-form";

export default function UsePostReviewForm({
  control,
}: {
  control: Control<UpdateUserFictionStatForm>;
}) {
  const { field: comment } = useController({
    name: "comment",
    control,
    rules: {
      required: true,
      minLength: {
        value: 1,
        message: "[리뷰] 최소 1자 이상 입력해주세요.",
      },
      maxLength: {
        value: 500,
        message: "[리뷰] 최대 500자 이하로 입력해주세요.",
      },
    },
    defaultValue: "",
  });

  return {
    comment,
  };
}
