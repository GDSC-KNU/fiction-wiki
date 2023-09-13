"use client";

import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
import { cls } from "@libs/client/utils";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { fictionPageAtom } from "@store/atoms";

interface PaginationProps {
  // activePage: number;
  // itemsCountPerPage: number;
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

function replaceLastSegment(url: string, newPage: number) {
  const parts = url.split("/");
  parts[parts.length - 1] = newPage.toString();
  return parts.join("/");
}

export default function Pagination({
  // activePage,
  // itemsCountPerPage,
  totalItemsCount,
  totalPagesCount,
  pageRangeDisplayed,
  pageGroup,
}: PaginationProps) {
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const pageQuery = searchParams.get("page");
  // const searchQuery = searchParams.get("search");
  // const params = useParams();
  let search = searchParams.get("search");
  const { page } = params;
  // const [page, setPage] = useRecoilState(fictionPageAtom);

  const generateUrl = (newPage: number) => {
    let baseUrl;
    if (pathname !== "/fictions") {
      baseUrl = replaceLastSegment(pathname, newPage);
      return {
        pathname: baseUrl,
      };
    } else {
      const query: any = {
        keywords: searchParams.get("keywords") || "all",
        nationalities: searchParams.get("nationalities") || "all",
        categories: searchParams.get("categories") || "all",
        sorting: searchParams.get("sorting") || "all",
        releaseTimeFilter: searchParams.get("releaseTimeFilter") || "all",
        dateYear: searchParams.get("dateYear") || "all",
        search: search || "",
        page: newPage || 1,
      };

      if (!search) delete query.search;

      return {
        pathname: baseUrl,
        query,
      };
    }
  };

  // Pagination Rendering function
  const pageButtons = () => {
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

    let arr = [];

    for (let i = firstNumber; i <= lastNumber; i++) {
      arr.push(i);
    }

    return arr.map((item) => {
      return (
        <Link
          aria-current="page"
          className={
            +(pageQuery || page || 1) === +item
              ? cls(
                  "relative z-10 inline-flex cursor-pointer items-center border border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                )
              : cls(
                  "relative inline-flex cursor-pointer items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black focus:z-20"
                )
          }
          key={item}
          href={generateUrl(item)}
        >
          {item}
        </Link>
      );
    });
  };

  const navigateToPage = (newPage: number) => {
    if (pathname.includes("/fictions")) {
      // setPage(newPage);
    } else {
      const url = generateUrl(newPage);
      console.log(url);
      // router.push(createQueryString("key", "value"));
    }
  };

  const nextHandler = (e: any) => {
    const currentPage = +(pageQuery || page || 1);
    pageGroup = Math.ceil(currentPage / pageRangeDisplayed);
    const nextPage =
      (pageGroup + 1) * pageRangeDisplayed - (pageRangeDisplayed - 1);

    navigateToPage(nextPage);
  };

  const prevHandler = (e: any) => {
    const currentPage = +(pageQuery || page || 1);
    pageGroup = Math.ceil(currentPage / pageRangeDisplayed);
    const prevPage =
      (pageGroup - 1) * pageRangeDisplayed - (pageRangeDisplayed - 1);

    navigateToPage(prevPage);
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
