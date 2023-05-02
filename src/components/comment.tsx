import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import { Comment } from "@prisma/client";

interface CommentResponse {
  comments: Comment[];
  commentsCount: number;
  ok: boolean;
}

export default function Comments() {
  const router = useRouter();
  // comments displayer
  const [commentIndex, setCommentIndex] = useState(1);
  const { data: commentsResponse } = useSWR<CommentResponse>(
    router.query.id
      ? `/api/fictions/${router.query.id}/comment?page=${commentIndex}`
      : null
  );

  const nextHandler = (e: any) => {
    const isBiggerThanLastPage =
      commentIndex >= Math.ceil((commentsResponse?.commentsCount || 1) / 7);
    if (isBiggerThanLastPage) return;

    setCommentIndex(commentIndex + 1);
  };

  const prevHandler = (e: any) => {
    const isLessThanFirstPage = (commentIndex || 1) <= 1;

    if (isLessThanFirstPage) return;

    setCommentIndex(commentIndex - 1);
  };

  ///pagination

  return (
    <div className=" h-full ">
      <div className=" flex h-full w-full flex-col justify-between rounded-md bg-white">
        {(commentsResponse?.comments || []).length < 7
          ? (commentsResponse?.comments || [])
              .concat(
                Array.from({
                  length: 7 - (commentsResponse?.comments || []).length,
                })
              )
              .map((comment: Comment, index: number) => (
                <ul
                  key={index}
                  className=" relative flex place-content-between border-b-[1px] pb-1 last:border-b-0"
                >
                  <li className=" mr-16 mt-2 overflow-hidden text-sm">
                    {comment?.comment || ""}
                  </li>
                  <li className=" absolute right-20 mt-2 text-sm">
                    {`${comment?.createdById?.slice(0, 5) || ""}...`}
                  </li>
                  <li className=" ml-5 mt-2 min-w-[60px] text-sm">👍 👎 ()</li>
                </ul>
              ))
          : commentsResponse?.comments?.map(
              (comment: Comment, index: number) => (
                <ul
                  key={index}
                  className=" relative mx-2 flex place-content-between border-b-2 pb-1 last:border-b-0"
                >
                  <li className=" mr-16 mt-2 overflow-hidden text-sm">
                    {comment?.comment || " asd"}
                  </li>
                  <li className=" absolute right-24 mt-2 text-sm">
                    {`${comment?.createdById?.slice(0, 5)}...`}
                  </li>
                  <li className=" ml-5 mt-2 min-w-[78px] text-sm">
                    👍 👎 (+3)
                  </li>
                </ul>
              )
            )}

        <div className=" mb-2 mt-5 flex justify-center">
          <button
            onClick={prevHandler}
            id="prev"
            className=" relative inline-flex items-center rounded-l-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:cursor-pointer hover:bg-gray-50 focus:z-20"
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
          <button className="relative inline-flex items-center border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
            {commentIndex}
          </button>
          <button
            onClick={nextHandler}
            id="next"
            className=" relative inline-flex items-center rounded-r-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:cursor-pointer hover:bg-gray-50 focus:z-20"
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
  );
}
