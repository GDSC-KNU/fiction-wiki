import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import { pageAtom, authorPageAtom, searchPageAtom } from "../atoms";
import { cls } from "@libs/client/utils";
import Link from "next/link";

interface PaginationProps {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed: number;
  totalPagesCount: number;
  pageGroup: number;
  checkedParams: {
    checkedItems: any;
    checkedNationalities: any;
    checkedGenres: any;
    checkedSortings: any;
  };
}

export default function Pagination({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  totalPagesCount,
  pageRangeDisplayed,
  pageGroup,
  checkedParams,
}: PaginationProps) {
  const router = useRouter();

  let lastNumber =
    pageRangeDisplayed * pageGroup > totalPagesCount
      ? totalPagesCount
      : pageGroup * pageRangeDisplayed;
  // pageGroup * pageCount > totalPage ? totalPage : pageGroup * pageCount;
  // //pageGroup 내 첫번째 페이지 숫자
  let firstNumber = lastNumber - (pageRangeDisplayed - 1);

  // console.log(router.query, router.pathname);
  let [nationalities, genres, sorting, page, keywords] =
    router?.query?.params || [];
  // console.log(router.query?.sorting);
  // console.log(router.query);
  // const handleChange = (e: any) => {
  //   // setPageIndex(e?.target?.innerHTML);
  //   // console.log(router.pathname);
  //   // window.history.pushState("", pageTitle, `${router.pathname}?page=${currentPage}`)

  //   console.log(sorting);
  //   if (router?.pathname.includes("/authors/")) {
  //     router.push(`${+e?.target?.innerHTML || 1}`);
  //   } else if (router?.pathname.includes("/search/keyword")) {
  //     router.push(
  //       `/search/keyword/${router?.query?.search}/${+e?.target?.innerHTML || 1}`
  //     );
  //   } else if (router?.pathname.includes("/search/title")) {
  //     router.push(`${router?.query?.search}?page=${e?.target?.innerHTML || 1}`);
  //   } else {
  //     router.push(
  //       `${nationalities}/${genres}/${sorting}/${
  //         e?.target?.innerHTML || 1
  //       }/${keywords}`
  //     );
  //   }
  // };

  let pagingSetup = () => {
    pageGroup = Math.ceil(+(router?.query?.page || 1)?.toString() / 5) || 1;
    let lastIndexOfPageGroup = pageGroup * pageRangeDisplayed;

    let lastNumber =
      lastIndexOfPageGroup > totalPagesCount
        ? totalPagesCount
        : lastIndexOfPageGroup;

    let firstNumber =
      lastNumber - (pageRangeDisplayed - 1) < 1
        ? 1
        : lastIndexOfPageGroup - (pageRangeDisplayed - 1);

    // console.log(pageGroup, firstNumber, lastNumber);
    let arr = [];
    // console.log("pagingSetup", firstNumber, lastNumber);
    for (let i = firstNumber; i <= lastNumber; i++) {
      arr.push(i);
    }
    return arr;
  };

  // const pageGroupChange = (e: any) => {
  //   // console.log(e.currentTarget.id === "next");

  //   if (e.currentTarget.id === "next") {

  //   } else {

  //   }
  // };

  // if (router?.pathname.includes("/authors/")) {
  //   router.push(`${+e?.target?.innerHTML || 1}`);
  // } else if (router?.pathname.includes("/search/keyword")) {
  //   router.push(
  //     `/search/keyword/${router?.query?.search}/${+e?.target?.innerHTML || 1}`
  //   );
  // }

  const pageHrefObject = (i: any) => {
    if (router?.pathname.includes("/fictions/")) {
      return {
        pathname: `/fictions/[nationality]/[genres]/[sorting]/[page]/[keywords]`,
        query: {
          nationality: nationalities,
          genres: genres,
          sorting: sorting,
          keywords: keywords,
          page: i,
        },
      };
    } else if (router?.pathname.includes("/authors/")) {
      return {
        pathname: `/authors/[page]`,
        query: {
          page: i,
        },
      };
    } else if (router?.pathname.includes("/search/title")) {
      return {
        pathname: `/search/title/[title]`,
        query: {
          title: router?.query?.search || "?",
          page: i,
        },
      };
    } else if (router?.pathname.includes("/search/keyword")) {
      return {
        pathname: `/search/keyword/[keyword]/[page]`,
        query: {
          keyword: router?.query?.search || "?",
          page: i,
        },
      };
    }
  };

  // const nextHrefObject = (i: number | string) => {
  //   pageGroup = Math.ceil(+(router?.query?.page || 1)?.toString() / 5) || 1;
  //   let lastIndexOfPageGroup = pageGroup * pageRangeDisplayed;

  //   let lastNumber =
  //     lastIndexOfPageGroup > totalPagesCount
  //       ? totalPagesCount
  //       : lastIndexOfPageGroup;

  //   let firstNumber =
  //     lastNumber - (pageRangeDisplayed - 1) < 1
  //       ? 1
  //       : lastNumber - (pageRangeDisplayed - 2);
  //   return {
  //     pathname: `/fictions/[nationality]/[genres]/[sorting]/[page]/[keywords]`,
  //     query: {
  //       nationality: nationalities,
  //       genres: genres,
  //       sorting: sorting,
  //       keywords: keywords,
  //       page: i + 1,
  //     },
  //   };
  // };

  // const isNextOrPrev = (i: number | string) => {
  //   pageGroup = Math.ceil(+(router?.query?.page || 1)?.toString() / 5) || 1;

  //   let lastIndexOfPageGroup = pageGroup * pageRangeDisplayed;

  //   let lastNumber =
  //     lastIndexOfPageGroup > totalPagesCount
  //       ? totalPagesCount
  //       : lastIndexOfPageGroup;

  //   let firstNumber =
  //     lastNumber - (pageRangeDisplayed - 1) < 1
  //       ? 1
  //       : lastNumber - (pageRangeDisplayed - 2);
  //   // console.log(router?.query.pathname);

  //   console.log(router?.query?.page, pageGroup, firstNumber, lastNumber);
  //   if (lastNumber < totalPagesCount && i === "next") {
  //     return lastNumber + 1;
  //   } else if (firstNumber >= 5 && i === "prev") {
  //     return firstNumber - 5;
  //   } else if (typeof i == "string") {
  //     console.log("b");
  //     return router?.query?.page;
  //   } else {
  //     console.log("c");
  //     return i;
  //   }
  // };

  const nextHandler = (e: any) => {
    const isLastGroup =
      pageGroup * pageRangeDisplayed >= totalPagesCount ? true : false;
    if (isLastGroup) {
      alert("마지막 페이지입니다.");
      e.preventDefault();
      return;
    }
    const currentPage = +(
      router?.query?.page ||
      +(router?.query?.params?.[3] || 1) ||
      1
    );
    pageGroup = Math.ceil(currentPage / 5);
    const firstPageOfNextPageGroup = (pageGroup + 1) * 5 - 4;

    if (router?.pathname.includes("/fictions/")) {
      router.push({
        pathname: `/fictions/[nationality]/[genres]/[sorting]/[page]/[keywords]`,
        query: {
          nationality: nationalities,
          genres: genres,
          sorting: sorting,
          keywords: keywords,
          page: firstPageOfNextPageGroup,
        },
      });
    } else if (router?.pathname.includes("/authors/")) {
      router.push({
        pathname: `/authors/[page]`,
        query: {
          page: +e?.target?.innerHTML || 1,
        },
      });
    } else if (router?.pathname.includes("/search/title")) {
      router.push({
        pathname: `/search/title/[title]`,
        query: {
          title: router?.query?.search || "?",
          page: firstPageOfNextPageGroup,
        },
      });
    } else if (router?.pathname.includes("/search/keyword")) {
      router.push({
        pathname: `/search/keyword/[keyword]/[page]`,
        query: {
          keyword: router?.query?.search || "?",
          page: firstPageOfNextPageGroup,
        },
      });
    }
  };

  const prevHandler = (e: any) => {
    // const isFirstPage = +(router?.query?.page || 1) <= 1;
    // if (!isFirstPage) {
    //   // pageGroup--;
    //   router.push(
    //     `${router?.query?.search}?page=${+(router?.query?.page || 1) - 1}`
    //   );
    // }
    const isFirstGruop = pageGroup === 1 ? true : false;
    if (isFirstGruop) {
      console.log(pageGroup, router?.query);
      alert("첫 페이지목록 입니다.");
      e.preventDefault();
      return;
    }
    const currentPage = +(
      router?.query?.page ||
      +(router?.query?.params?.[3] || 1) ||
      1
    );
    pageGroup = Math.ceil(currentPage / 5);
    const firstPageOfPrevPageGroup = (pageGroup - 1) * 5 - 4;

    if (router?.pathname.includes("/fictions/")) {
      router.push({
        pathname: `/fictions/[nationality]/[genres]/[sorting]/[page]/[keywords]`,
        query: {
          nationality: nationalities,
          genres: genres,
          sorting: sorting,
          keywords: keywords,
          page: firstPageOfPrevPageGroup,
        },
      });
    } else if (router?.pathname.includes("/authors/")) {
      router.push({
        pathname: `/authors/[page]`,
        query: {
          page: +e?.target?.innerHTML || 1,
        },
      });
    } else if (router?.pathname.includes("/search/title")) {
      router.push({
        pathname: `/search/title/[title]`,
        query: {
          title: router?.query?.search || "?",
          page: firstPageOfPrevPageGroup,
        },
      });
    } else if (router?.pathname.includes("/search/keyword")) {
      router.push({
        pathname: `/search/keyword/[keyword]/[page]`,
        query: {
          keyword: router?.query?.search || "?",
          page: firstPageOfPrevPageGroup,
        },
      });
    }
  };

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
              onClick={prevHandler}
              id="prev"
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
              <Link key={item} href={pageHrefObject(+item) || "/"}>
                <a
                  aria-current="page"
                  className={
                    (router?.query?.page || router?.query?.params?.[3]) ===
                    `${item}`
                      ? cls(
                          "relative z-10 inline-flex items-center border border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20 cursor-pointer"
                        )
                      : cls(
                          "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black focus:z-20 cursor-pointer"
                        )
                  }
                >
                  {item}
                  {/* border-indigo-500 bg-indigo-50 text-indigo-600 */}
                </a>
              </Link>
            ))}

            <a
              onClick={nextHandler}
              id="next"
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
