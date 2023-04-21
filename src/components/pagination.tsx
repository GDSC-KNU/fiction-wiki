import { useRouter } from "next/router";
import { cls } from "@libs/client/utils";
import { useRecoilState } from "recoil";
import { fictionPageAtom } from "@store/atoms";

interface PaginationProps {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed: number;
  totalPagesCount: number;
  pageGroup: number;
  checkedParams?: {
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
}: PaginationProps) {
  const router = useRouter();
  const [page, setPage] = useRecoilState(fictionPageAtom);

  // Pagination Rendering function
  const pageButtons = () => {
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

    let arr = [];

    for (let i = firstNumber; i <= lastNumber; i++) {
      arr.push(i);
    }

    return arr.map((item) => {
      // console.log(router?.query?.page || page);
      const currentPage = router?.query?.page || page;
      // console.log(currentPage === item);
      // console.log(currentPage);
      return (
        <div
          onClick={pageChangeHandler}
          aria-current="page"
          className={
            +currentPage === +item
              ? cls(
                  "relative z-10 inline-flex cursor-pointer items-center border border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                )
              : cls(
                  "relative inline-flex cursor-pointer items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black focus:z-20"
                )
          }
          key={item}
        >
          {item}
        </div>
      );
    });
  };

  const pageChangeHandler = (e: any) => {
    const newPage = +e.target.innerHTML;
    if (router?.pathname.includes("/fictions")) {
      setPage(newPage || 1);
    } else if (router?.pathname.includes("/authors/")) {
      router.push({
        pathname: `/authors/[page]`,
        query: {
          page: newPage,
        },
      });
    } else if (router?.pathname.includes("/search/title")) {
      router.push({
        pathname: `/search/title/[title]`,
        query: {
          title: router?.query?.search || "?",
          page: newPage,
        },
      });
    } else if (router?.pathname.includes("/search/keyword")) {
      router.push({
        pathname: `/search/keyword/[keyword]/[page]`,
        query: {
          keyword: router?.query?.search || "?",
          page: newPage,
        },
      });
    } else if (router?.pathname.includes("/search/genre")) {
      router.push({
        pathname: `/search/genre/[genre]/[page]`,
        query: {
          genre: router?.query?.search || "?",
          page: newPage,
        },
      });
    } else if (router?.pathname.includes("/search/type")) {
      router.push({
        pathname: `/search/type/[type]/[page]`,
        query: {
          type: router?.query?.search || "?",
          page: newPage,
        },
      });
    }
  };

  const nextHandler = (e: any) => {
    const isLastGroup =
      pageGroup * pageRangeDisplayed >= totalPagesCount ? true : false;
    if (isLastGroup) {
      alert("마지막 페이지목록입니다.");
      e.preventDefault();
      return;
    }

    const baseUrl = router.pathname;
    const currentPage = +(router?.query?.page || page || 1);
    pageGroup = Math.ceil(currentPage / pageRangeDisplayed);
    let firstPageOfNextPageGroup =
      (pageGroup + 1) * pageRangeDisplayed - (pageRangeDisplayed - 1);

    if (router?.pathname.includes("/fictions?")) {
      // 동적 페이지 페이지 이동(/fictions)
      setPage(firstPageOfNextPageGroup);
    } else {
      // 정적 페이지 페이지 이동
      const query: any = {
        search: router?.query?.search || "",
        page: firstPageOfNextPageGroup,
      };

      if (!router.query.search) delete query.search;

      router.push({
        pathname: baseUrl,
        query: query,
      });
    }

    // else if (router?.pathname.includes("/authors/")) {
    //   router.push({
    //     pathname: `/authors/[page]`,
    //     query: {
    //       page: +e?.target?.innerHTML || 1,
    //     },
    //   });
    // } else if (router?.pathname.includes("/search/title")) {
    //   router.push({
    //     pathname: `/search/title/[title]`,
    //     query: {
    //       title: router?.query?.search || "?",
    //       page: firstPageOfNextPageGroup,
    //     },
    //   });
    // } else if (router?.pathname.includes("/search/keyword")) {
    //   router.push({
    //     pathname: `/search/keyword/[keyword]/[page]`,
    //     query: {
    //       keyword: router?.query?.search || "?",
    //       page: firstPageOfNextPageGroup,
    //     },
    //   });
    // } else if (router?.pathname.includes("/search/genre")) {
    //   router.push({
    //     pathname: `/search/genre/[genre]/[page]`,
    //     query: {
    //       genre: router?.query?.search || "?",
    //       page: firstPageOfNextPageGroup,
    //     },
    //   });
    // } else if (router?.pathname.includes("/search/type")) {
    //   router.push({
    //     pathname: `/search/type/[type]/[page]`,
    //     query: {
    //       type: router?.query?.search || "?",
    //       page: firstPageOfNextPageGroup,
    //     },
    //   });
    // }
  };

  const prevHandler = (e: any) => {
    const isFirstGruop = pageGroup === 1 ? true : false;
    if (isFirstGruop) {
      alert("첫 페이지목록 입니다.");
      e.preventDefault();
      return;
    }
    const baseUrl = router.pathname;
    const currentPage = +(router?.query?.page || page || 1);
    pageGroup = Math.ceil(currentPage / pageRangeDisplayed);
    const firstPageOfPrevPageGroup =
      (pageGroup - 1) * pageRangeDisplayed - (pageRangeDisplayed - 1);

    if (router?.pathname.includes("/fictions/")) {
      // 동적 페이지 페이지 이동(/fictions)
      setPage(firstPageOfPrevPageGroup);
    } else {
      // 정적 페이지 페이지 이동
      const query: any = {
        search: router?.query?.search || "",
        page: firstPageOfPrevPageGroup,
      };

      if (!router.query.search) delete query.search;

      router.push({
        pathname: baseUrl,
        query: query,
      });
    }
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

            {pageButtons()}

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