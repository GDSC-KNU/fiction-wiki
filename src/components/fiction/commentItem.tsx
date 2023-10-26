import Image from "next/image";
import { User, Comment } from "@prisma/client";
import formatDate from "@helper/formatDate";
import dynamic from "next/dynamic";

const CommentDeleteButton = dynamic(
  () => import("@components/fiction/commentDeleteButton"),
  {
    ssr: false,
  }
);

interface ICommentItem {
  comment: CommentWithUser;
  user: any;
}

interface CommentWithUser extends Comment {
  createdBy: User;
  canDelete: boolean;
}

export default function CommentItem({ comment, user }: ICommentItem) {
  return (
    <div className=" relative flex flex-col place-content-between border-b-[1px] pb-1 pt-2 last:border-b-0">
      <div className=" mb-1 flex justify-between ">
        <div className=" flex space-x-1 text-center">
          <Image
            className=" rounded-full"
            src={comment?.createdBy?.image ?? ""}
            width={24}
            height={24}
            alt={"익명"}
          ></Image>
          <div className=" flex items-center text-xs font-bold">
            {comment?.createdBy?.nickname || "익명"}
          </div>
        </div>
        <div className=" text-xs">{formatDate(comment.createdAt)}</div>
      </div>
      <div className=" relative">
        <div className="text-sm">
          <span>{comment.comment}</span>
          <CommentDeleteButton comment={comment} />
        </div>
      </div>
    </div>
  );
}
