import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { pageAtom, authorPageAtom, searchPageAtom } from "../atoms";

interface PaginationProps {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed: number;
  totalPagesCount: number;
  pageGroup: number;
}

export default function Pagination({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  totalPagesCount,
  pageRangeDisplayed,
  pageGroup,
}: PaginationProps) {
  //   const [pageIndex, setPageIndex] = useRecoilState(pageAtom);
  //   const [authorPageIndex, setAuthorPageIndex] = useRecoilState(authorPageAtom);
  //   const [searchPageIndex, setSearchPageIndex] = useRecoilState(searchPageAtom);
  const router = useRouter();

  const [pagingSetupState, setPaginSetupState] = useState();

  let lastNumber =
    pageRangeDisplayed * pageGroup > totalPagesCount
      ? totalPagesCount
      : pageGroup * pageRangeDisplayed;
  // pageGroup * pageCount > totalPage ? totalPage : pageGroup * pageCount;
  // //pageGroup 내 첫번째 페이지 숫자
  let firstNumber = lastNumber - (pageRangeDisplayed - 1);
  //   console.log({
  //     activePage,
  //     itemsCountPerPage,
  //     totalItemsCount,
  //     totalPagesCount,
  //     pageRangeDisplayed,
  //     pageGroup,
  //   });

  //   useEffect(() => {
  //     // console.log(router.query);
  //     if (router.query.search) {
  //       router.push(`${router?.query?.search}?page=${router?.query?.page || 1}`);
  //     }
  //   }, []);

  const handleChange = (e: any) => {
    // setPageIndex(e?.target?.innerHTML);
    // console.log(router.pathname);
    // window.history.pushState("", pageTitle, `${router.pathname}?page=${pageIndex}`)
    router.push(`${router?.query?.search}?page=${e?.target?.innerHTML || 1}`);
  };

  let pagingSetup = () => {
    // console.log(pageGroup);
    pageGroup = Math.ceil(+(router?.query?.page || 1)?.toString() / 5) || 1;
    let lastNumber =
      pageGroup * pageRangeDisplayed > totalPagesCount
        ? totalPagesCount
        : pageGroup * pageRangeDisplayed;

    let firstNumber =
      lastNumber - (pageRangeDisplayed - 1) < 1
        ? 1
        : lastNumber - (pageRangeDisplayed - 1);
    let arr = [];
    for (let i = firstNumber; i <= lastNumber; i++) {
      arr.push(i);
    }
    // console.log(arr);
    return arr;
  };

  const pageGroupChange = (e: any) => {
    // console.log(e.currentTarget.id === "next");
    if (e.currentTarget.id === "next") {
      if (+(router?.query?.page || 1) < totalPagesCount) {
        pageGroup++;
        router.push(
          `${router?.query?.search}?page=${+(router?.query?.page || 1) + 1}`
        );
      }
    } else {
      if (+(router?.query?.page || 1) > 1) {
        pageGroup--;
        router.push(
          `${router?.query?.search}?page=${+(router?.query?.page || 1) - 1}`
        );
      }
    }
  };
  //   console.log(pageGroup);
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            {/* Showing */}
            {/* <span className="font-medium">
              {(+(router?.query?.page || 0).toString() - 1) *
                itemsCountPerPage +
                1}
            </span>
            to
            <span className="font-medium">
              {+(router?.query?.page || 0).toString() * itemsCountPerPage + 1}
            </span>
            of */}
            <span className="font-medium">{totalItemsCount} </span>
            results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              id="prev"
              onClick={pageGroupChange}
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
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
            {pagingSetup().map((item, i) => (
              <a
                onClick={handleChange}
                key={i}
                aria-current="page"
                className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
              >
                {item}
              </a>
            ))}

            <a
              id="next"
              onClick={pageGroupChange}
              className="relative inline-flex itecems-nter rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
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
