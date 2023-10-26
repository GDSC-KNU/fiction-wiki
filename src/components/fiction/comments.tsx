"use client";

import { useState } from "react";

import UserCommentInput from "@components/fiction/userCommentInput";
import CommentItem from "@/components/fiction/commentItem";

import useUser from "@libs/client/useUser";
import useCommentsIntegrated from "@/hooks/useCommentsIntegrated";
import { CommentWithMore, FictionResponse } from "@/type/fiction";

export default function Comments({
  fallbackData,
}: {
  fallbackData: FictionResponse;
}) {
  const { user } = useUser();
  const { comments } = useCommentsIntegrated({ fallbackData });
  const [commentIndex, setCommentIndex] = useState(1);

  const nextHandler = (e: any) => {
    const isBiggerThanLastPage =
      commentIndex >= Math.ceil((comments?.length || 1) / 7);
    if (isBiggerThanLastPage) return;

    setCommentIndex(commentIndex + 1);
  };

  const prevHandler = (e: any) => {
    const isLessThanFirstPage = (commentIndex || 1) <= 1;

    if (isLessThanFirstPage) return;

    setCommentIndex(commentIndex - 1);
  };

  return (
    <>
      <h2 className=" py-2 text-xl font-bold">리뷰</h2>
      <div className=" h-full ">
        <div className=" flex h-full w-full flex-col justify-between rounded-md bg-white">
          <div>
            {comments?.map((comment: any) => (
              <CommentItem key={comment.id} comment={comment} user={user} />
            ))}
          </div>
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
        <UserCommentInput fallbackData={fallbackData} />
      </div>
    </>
  );
}
