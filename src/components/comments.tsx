"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";

import { Comment, User } from "@prisma/client";
import formatDate from "@helper/formatDate";

interface ICommentItem {
  comment: CommentWithUser;
  user: any;
  handleDeleteComment: any;
}

interface CommentWithUser extends Comment {
  createdBy: User;
}

export default function Comments({ fiction }: any) {
  const { user } = useUser();
  const [commentIndex, setCommentIndex] = useState(1);

  const searchParams = useSearchParams();
  const pageQuery = searchParams.get("page");

  const [deleteComment, { loading }] = useMutation(
    `/api/fictions/${pageQuery}/comment`
  );

  const comments = fiction?.comments as CommentWithUser[];

  if (!comments) return <div>loading</div>;

  const nextHandler = (e: any) => {
    const isBiggerThanLastPage =
      commentIndex >= Math.ceil((comments.length || 1) / 7);
    if (isBiggerThanLastPage) return;

    setCommentIndex(commentIndex + 1);
  };

  const prevHandler = (e: any) => {
    const isLessThanFirstPage = (commentIndex || 1) <= 1;

    if (isLessThanFirstPage) return;

    setCommentIndex(commentIndex - 1);
  };
  ///pagination

  async function handleDeleteComment(comment: Comment) {
    await deleteComment({ userId: user?.id, commentId: comment.id }, "DELETE");

    window.location.href = window.location.href.toString();
  }

  const CommentItem = ({
    comment,
    user,
    handleDeleteComment,
  }: ICommentItem) => {
    return (
      <ul className="relative flex flex-col place-content-between border-b-[1px] pb-1 last:border-b-0 ">
        <div className=" mb-1 flex justify-between ">
          <div className=" flex space-x-1 text-center">
            <Image
              className=" rounded-full"
              src={comment?.createdBy?.image ?? ""}
              width={24}
              height={24}
              alt={user?.id ?? ""}
            ></Image>
            <div className=" flex items-center text-xs font-bold">
              {comment?.createdBy?.nickname || "익명"}
            </div>
          </div>
          <div className=" text-xs">{formatDate(comment.createdAt)}</div>
        </div>
        <div className=" relative">
          <div className=" text-sm">
            <span>{comment.comment}</span>
            {user && comment?.createdById === user?.id ? (
              <span
                onClick={() => handleDeleteComment(comment)}
                className="absolute right-0 cursor-pointer text-xs text-red-400"
              >
                삭제
              </span>
            ) : null}
          </div>
        </div>
      </ul>
    );
  };

  // const paddedComments = [
  //   ...(comments || []),
  //   ...Array(7 - (comments?.length || 0)).fill({}),
  // ];

  return (
    <>
      <h2 className=" py-2 text-xl font-bold">코멘트</h2>
      <div className=" h-full ">
        <div className=" flex h-full w-full flex-col justify-between rounded-md bg-white">
          {comments.map((comment, index) => (
            <CommentItem
              key={index}
              comment={comment}
              user={user}
              handleDeleteComment={handleDeleteComment}
            />
          ))}
          <div className=" mb-2 mt-5 flex justify-center">
            <button
              onClick={prevHandler}
              id="prev"
              className=" relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-1 text-sm font-medium text-gray-500 hover:cursor-pointer hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Prev</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="relative inline-flex items-center border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              {commentIndex}
            </button>
            <button
              onClick={nextHandler}
              id="next"
              className=" relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-1 text-sm font-medium text-gray-500 hover:cursor-pointer hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
