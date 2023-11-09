"use client";

import { cls } from "@libs/client/utils";
import React from "react";

import { useQueryObject } from "@/hooks/useQueryObject";

import PageLeft from "@public/svg/pageLeft.svg";
import PageRight from "@public/svg/pageRight.svg";
import { Button2 } from "@components/common/Button2";

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

  const currentPage = pageQuery;
  const pageGroup = Math.ceil(currentPage / pageRangeDisplayed);
  const totalPagesGroupCount = Math.ceil(totalPagesCount / pageRangeDisplayed);
  const hasPrev = pageGroup > 1;
  const hasNext = pageGroup < totalPagesGroupCount;

  function handlePageUpdate({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    updatePage(Number(currentTarget.textContent));
  }

  const PageButtons = () => {
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
          <Button2
            size="icon"
            aria-current="page"
            variant="outline"
            className={
              currentPage == item
                ? cls(
                    " z-10 rounded-none border-indigo-300 bg-indigo-50 text-indigo-600"
                  )
                : cls("rounded-none")
            }
            key={item}
            onClick={handlePageUpdate}
          >
            {item}
          </Button2>
        ))}
      </>
    );
  };

  const nextHandler = (e: any) => {
    if (!hasNext) return;
    const nextPage =
      (pageGroup + 1) * pageRangeDisplayed - (pageRangeDisplayed - 1);
    updatePage(nextPage);
  };

  const prevHandler = (e: any) => {
    if (!hasPrev) return;
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
            <Button2
              disabled={!hasPrev}
              variant="outline"
              size="icon"
              onClick={prevHandler}
            >
              <PageLeft />
            </Button2>
            <PageButtons />
            <Button2
              disabled={!hasNext}
              variant="outline"
              size="icon"
              onClick={nextHandler}
            >
              <PageRight />
            </Button2>
          </nav>
        </div>
      </div>
    </div>
  );
}
