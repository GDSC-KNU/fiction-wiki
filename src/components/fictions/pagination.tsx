"use client";

import { cls } from "@libs/client/utils";
import React from "react";

import { useQueryObject } from "@/hooks/useQueryObject";

interface PaginationProps {
  totalItemsCount: number;
  pageRangeDisplayed: number;
  totalPagesCount: number;
}

export default function Pagination({
  totalItemsCount,
  totalPagesCount,
  pageRangeDisplayed,
}: PaginationProps) {
  const { queryObject, updatePage } = useQueryObject();

  const { page: pageQuery = 1 }: any = queryObject;

  function handlePageUpdate({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    updatePage(Number(currentTarget.textContent));
  }

  let pageGroup: number;

  // Pagination Rendering function
  const PageButtons = () => {
    pageGroup = Math.ceil(+(pageQuery || 1)?.toString() / 5) || 1;
    let lastIndexOfPageGroup = pageGroup * pageRangeDisplayed;

    let lastNumber =
      lastIndexOfPageGroup > totalPagesCount
        ? totalPagesCount
        : lastIndexOfPageGroup;

    let firstNumber =
      lastNumber - (pageRangeDisplayed - 1) < 1
        ? 1
        : lastIndexOfPageGroup - (pageRangeDisplayed - 1);

    let pageButtons = Array.from(
      { length: lastNumber - firstNumber + 1 },
      (_, i) => i + firstNumber
    );

    return (
      <>
        {pageButtons.map((item) => (
          <button
            aria-current="page"
            className={
              pageQuery == item
                ? cls(
                    "relative z-10 inline-flex cursor-pointer items-center border border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                  )
                : cls(
                    "relative inline-flex cursor-pointer items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black focus:z-20"
                  )
            }
            key={item}
            onClick={handlePageUpdate}
          >
            {item}
          </button>
        ))}
      </>
    );
  };

  const nextHandler = (e: any) => {
    const currentPage = pageQuery;
    pageGroup = Math.ceil(currentPage / pageRangeDisplayed);
    const nextPage =
      (pageGroup + 1) * pageRangeDisplayed - (pageRangeDisplayed - 1);
    updatePage(nextPage);
  };

  const prevHandler = (e: any) => {
    const currentPage = pageQuery;
    pageGroup = Math.ceil(currentPage / pageRangeDisplayed);
    const prevPage =
      (pageGroup - 1) * pageRangeDisplayed - (pageRangeDisplayed - 1);
    updatePage(prevPage);
  };

  return (
    <div className="m-2 flex items-center  justify-between rounded-md bg-white px-4 py-3">
      <div className="flex flex-1 items-center justify-between pr-1">
        <div>
          <p className="text-sm text-gray-700">
            <span className="font-medium">{totalItemsCount || 0} </span>
            results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
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
            </a>
            <PageButtons />
            <a
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
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
