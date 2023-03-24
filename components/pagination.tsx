import { useRouter } from "next/router";
import { cls } from "@libs/client/utils";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { fictionPageAtom } from "../atoms";

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
}: // checkedParams,
PaginationProps) {
  const router = useRouter();
  const [page, setPage] = useRecoilState(fictionPageAtom);

  let { nationalities, genres, sorting, keywords } = router?.query || {};
  // console.log(router?.query);

  // PageSetup function
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

  const pageHrefObject = (i: any) => {
    if (router?.pathname.includes("/fictions")) {
      return {
        pathname: `/fictions`,
        query: {
          nationality: nationalities || "all",
          genres: genres || "all",
          sorting: sorting || "all",
          keywords: keywords || "all",
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
    } else if (router?.pathname.includes("/search/genre")) {
      return {
        pathname: `/search/genre/[genre]/[page]`,
        query: {
          genre: router?.query?.search || "?",
          page: i,
        },
      };
    } else if (router?.pathname.includes("/search/type")) {
      return {
        pathname: `/search/type/[type]/[page]`,
        query: {
          type: router?.query?.search || "?",
          page: i,
        },
      };
    }
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

    const currentPage = +(router?.query?.page || page || 1);
    // pageGroup 게산후 해당 pageGroup의 첫번째 페이지 계산
    pageGroup = Math.ceil(currentPage / pageRangeDisplayed);
    let firstPageOfNextPageGroup =
      (pageGroup + 1) * pageRangeDisplayed - (pageRangeDisplayed - 1);

    // 현재 페이지 pathname 기준으로 query생성하여 라우팅
    if (router?.pathname.includes("/fictions?")) {
      // fictionPage 갱신
      setPage(firstPageOfNextPageGroup);
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
    } else if (router?.pathname.includes("/search/genre")) {
      router.push({
        pathname: `/search/genre/[genre]/[page]`,
        query: {
          genre: router?.query?.search || "?",
          page: firstPageOfNextPageGroup,
        },
      });
    } else if (router?.pathname.includes("/search/type")) {
      router.push({
        pathname: `/search/type/[type]/[page]`,
        query: {
          type: router?.query?.search || "?",
          page: firstPageOfNextPageGroup,
        },
      });
    }
  };

  const prevHandler = (e: any) => {
    const isFirstGruop = pageGroup === 1 ? true : false;
    if (isFirstGruop) {
      // console.log(pageGroup, router?.query);
      alert("첫 페이지목록 입니다.");
      e.preventDefault();
      return;
    }
    const currentPage = +(router?.query?.page || page || 1);
    pageGroup = Math.ceil(currentPage / pageRangeDisplayed);
    const firstPageOfPrevPageGroup =
      (pageGroup - 1) * pageRangeDisplayed - (pageRangeDisplayed - 1);

    if (router?.pathname.includes("/fictions/")) {
      setPage(firstPageOfPrevPageGroup);
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
    } else if (router?.pathname.includes("/search/genre")) {
      router.push({
        pathname: `/search/genre/[genre]/[page]`,
        query: {
          genre: router?.query?.search || "?",
          page: firstPageOfPrevPageGroup,
        },
      });
    } else if (router?.pathname.includes("/search/type")) {
      router.push({
        pathname: `/search/type/[type]/[page]`,
        query: {
          type: router?.query?.search || "?",
          page: firstPageOfPrevPageGroup,
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-between  bg-white px-4 py-3 rounded-md m-2">
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
              className=" hover:cursor-pointer relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
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
              <div
                onClick={pageChangeHandler}
                aria-current="page"
                className={
                  (router?.query?.page || page) === `${item}` ||
                  (!page && item === 1)
                    ? cls(
                        "relative z-10 inline-flex items-center border border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20 cursor-pointer"
                      )
                    : cls(
                        "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black focus:z-20 cursor-pointer"
                      )
                }
                key={item}
                // href={pageHrefObject(+item) || "/"}
              >
                {item}
              </div>
            ))}

            <a
              onClick={nextHandler}
              id="next"
              className=" hover:cursor-pointer relative inline-flex itecems-nter rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
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
