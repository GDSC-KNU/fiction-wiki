import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";
import { useSearchParams } from "next/navigation";

import { CommentWithMore } from "@/type/fiction";
import useCommentsIntegrated from "@/hooks/useCommentsIntegrated";
import { Button2 } from "@components/common/Button2";

export default function FictionReviewDeleteButton({
  comment,
}: {
  comment: CommentWithMore;
}) {
  const { user } = useUser();
  const { mutate } = useCommentsIntegrated({});

  const searchParams = useSearchParams();
  const pageQuery = searchParams.get("page");
  const idQuery = searchParams.get("id");

  const [deleteComment] = useMutation(`/api/fictions/${pageQuery}/review`);

  async function handleDeleteComment(comment: CommentWithMore) {
    await deleteComment({ userId: user?.id, commentId: comment.id }, "DELETE");

    mutate(`/api/fictions/${idQuery}`);
  }

  return (
    <>
      {comment.canDelete && (
        <Button2
          size="xxs"
          variant="ghost"
          onClick={() => handleDeleteComment(comment)}
          className="absolute bottom-0 right-0 cursor-pointer text-xs text-red-400"
        >
          삭제
        </Button2>
      )}
    </>
  );
}
