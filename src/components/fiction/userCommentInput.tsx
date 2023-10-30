"use client";

import { useForm } from "react-hook-form";
import { TextArea2 } from "@components/common/Textarea2";
import { Button2 } from "@components/common/Button2";
import useMutation from "@libs/client/useMutation";
import { useParams } from "next/navigation";
import useFiction from "@/hooks/useFiction";
import useUser from "@libs/client/useUser";
import UsePostReviewForm from "@/hooks/usePostReviewForm";
import { FictionResponse, PostCommentForm } from "@/type/fiction";

export default function UserCommentInput({
  fallbackData,
}: {
  fallbackData?: FictionResponse;
}) {
  const { user } = useUser();
  const params = useParams();
  const { id } = params;
  const { mutate } = useFiction({ fallbackData });

  const methods = useForm<PostCommentForm>({
    mode: "onBlur",
    defaultValues: {
      comment: "",
    },
  });

  const { handleSubmit, resetField } = methods;

  const [postComment, { loading, data, error }] = useMutation(
    `/api/fictions/${id}/comment`
  );

  const onValid = async (data: PostCommentForm) => {
    if (!user) return alert("로그인 해주세요.");
    await postComment(data, "POST");

    resetField("comment");
    mutate(`/api/fictions/${id}`);
  };

  const { comment } = UsePostReviewForm({
    control: methods.control,
  });

  return (
    <div className=" relative">
      <form className=" w-full" onSubmit={handleSubmit(onValid)}>
        <TextArea2
          {...comment}
          label="리뷰 작성"
          placeholder={
            user
              ? `리뷰를 작성해주세요. 과도한 비방, 욕설, 도배는 차단됩니다. 최대 500자.`
              : "댓글작성을 위해선 로그인 해주세요."
          }
        ></TextArea2>
        <Button2
          disabled={comment.value.length === 0 || loading || !user}
          type="submit"
          size="xs"
          className="absolute bottom-2 right-2"
        >
          작성
        </Button2>
      </form>
    </div>
  );
}
