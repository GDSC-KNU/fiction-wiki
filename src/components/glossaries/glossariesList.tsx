"use client";

import { Fiction, Glossary } from "@prisma/client";
import { Fragment, useState } from "react";
import useSWR from "swr";
import GlossariesPagination from "./glossariesPagination";

interface glossaryWithMore extends Glossary {
  fiction: Fiction;
}

interface ISearchData {
  glossaries: glossaryWithMore[];
  glossariesCount: number;
}

export default function GlossariesList() {
  const [queryObject, setQueryObject] = useState({
    page: 1,
    title: "",
  });

  const [search, setSearch] = useState("");

  const queryString = Object.entries(queryObject).reduce(
    (acc, [k, v], curIndex, arr): any => {
      if (curIndex === arr.length - 1) return acc + `${k}=${v}`;
      return acc + `${k}=${v}&`;
    },
    ""
  );

  const { data: searchData } = useSWR<ISearchData>(
    `${process.env.NEXT_PUBLIC_HOST}/api/glossaries?${queryString}`
  );

  const searchHandler = async (e: any) => {
    if (e.key === "Enter") {
      if (search.length < 1) {
        setQueryObject({ page: 1, title: "" });
        return;
      }
      // setData(
      //   initialData.filter((glossary) =>
      //     glossary.fiction.title.includes(search)
      //   )
      // );
      setQueryObject({ ...queryObject, title: search });
    }
  };

  return (
    <div className=" px-4 pt-4">
      <div className=" mb-2 flex flex-col justify-between sm:flex-row">
        <div className=" mb-2 flex  items-center whitespace-nowrap font-bold sm:mb-0">
          용어집
        </div>
        <div className=" relative ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchHandler}
            type="text"
            id="table-search-users"
            className=" max:w-80 block rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="작품명으로 검색"
          ></input>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="">
                <div className="flex items-center"></div>
              </th>
              <th scope="col" className="px-2 py-3">
                작품명(*)
              </th>
              <th scope="col" className="px-2 py-3">
                원어(*)
              </th>
              <th scope="col" className="px-2 py-3">
                한글(*)
              </th>
              <th scope="col" className="px-2 py-3">
                카테고리
              </th>
              <th scope="col" className="px-2 py-3">
                편집
              </th>
            </tr>
          </thead>
          <tbody>
            {searchData &&
              searchData.glossaries.map((glossary) => (
                <Fragment key={glossary.id}>
                  <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                    <td className="">
                      <div className="flex items-center"></div>
                    </td>
                    <th
                      scope="row"
                      className="whitespace-nowrap px-2 py-1 font-medium text-gray-900 dark:text-white"
                    >
                      <div className=" flex flex-col">
                        <div>{glossary.fiction.title}</div>
                        <div className=" text-xs text-gray-600">
                          {glossary.fiction.originalTitle}
                        </div>
                      </div>
                    </th>
                    <td className="px-2 py-1">{glossary.chinese}</td>
                    <td className="px-2 py-1">{glossary.korean}</td>
                    <td className="px-2 py-1">{glossary.category}</td>
                    <td className="px-2 py-1">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      ></a>
                    </td>
                  </tr>
                </Fragment>
              ))}
          </tbody>
        </table>
      </div>
      {
        <GlossariesPagination
          showingCount={searchData?.glossaries.length}
          count={searchData?.glossariesCount}
          setQueryObject={setQueryObject}
        />
      }
    </div>
  );
}
