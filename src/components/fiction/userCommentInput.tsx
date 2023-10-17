"use client";

import { useForm } from "react-hook-form";
import Input from "../common/input";
import { TextArea2 } from "@components/common/textarea2";
import { Button2 } from "@components/common/button2";
import useMutation from "@libs/client/useMutation";
import { useParams } from "next/navigation";

interface PostCommentForm {
  // UserFictionStat: number[];
  comment: string;
}

export default function UserCommentInput() {
  const params = useParams();
  const { id } = params;
  const { register, handleSubmit, watch, reset } = useForm<PostCommentForm>({
    mode: "onBlur",
  });

  const [postComment, { loading, data, error }] = useMutation(
    `/api/fictions/${id}/comment`
  );

  const onValid = async (data: PostCommentForm) => {
    await postComment(data, "POST");
    window.location.href = window.location.href.toString();
  };

  return (
    <div className=" relative">
      <form className=" w-full" onSubmit={handleSubmit(onValid)}>
        <TextArea2
          register={register("comment", {
            maxLength: 500,
            minLength: 1,
          })}
          label="리뷰 작성"
          placeholder="리뷰를 작성해주세요. 과도한 비방, 욕설, 도배는 차단됩니다. 최대 500자."
          name="comment"
          required={true}
        ></TextArea2>
        <Button2 type="submit" size="xs" className="absolute bottom-2 right-2">
          작성
        </Button2>
      </form>
    </div>
  );
}
