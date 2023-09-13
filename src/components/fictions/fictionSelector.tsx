"use client";

import {
  Fiction,
  Keyword,
  FictionStat,
  KeywordsOnFictions,
  UserFictionStat,
  Author,
  Category,
} from "@prisma/client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FictionList from "@components/fictionList";
import useSWR, { mutate } from "swr";
import ClipLoader from "react-spinners/ClipLoader";
import { useRecoilState } from "recoil";
import { fictionPageAtom } from "@/store/atoms";
import { ParsedUrlQueryInput } from "querystring";

import ExpandDown from "@public/svg/expandDown.svg";
import CollapseUp from "@public/svg/collapseUp.svg";

interface UserFictionStatWithMore extends UserFictionStat {
  _count: {
    users: number;
  };
}

interface FictionWithMore extends Fiction {
  keywords: [KeywordsOnFictionsWithMore];
  fictionStat: [FictionStat];
  userFictionStat: UserFictionStatWithMore;
  author: Author;
}

interface KeywordsOnFictionsWithMore extends KeywordsOnFictions {
  keyword: Keyword;
}

interface FictionsResponse {
  ok: boolean;
  fictions: FictionWithMore[];
  fictionsCount: number;
  keywords: Keyword[];
  categories: string[];
  nationalities: string[];
}

interface QueryObject extends ParsedUrlQueryInput {
  keywords: string;
  nationalities: string;
  categories: string;
  sorting: string;
  releaseTimeFilter: string;
  dateYear: string;
  page: number;
}

interface FictionSelectorProps {
  staticData: {
    keywordList: Keyword[];
    nationalityList: string[];
    categoryList: Category[];
  };
  queryObject: QueryObject;
  setQueryObject: React.Dispatch<React.SetStateAction<QueryObject>>;
}

export default function FictionSelector({
  staticData,
  queryObject,
  setQueryObject,
}: FictionSelectorProps) {
  const {
    keywordList: keywords,
    nationalityList: nationalities,
    categoryList: categories,
  } = staticData;
  const router = useRouter();
  //expand
  const [isExpanded, setIsExpanded] = useState(true);

  //세부 필터링
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [checkedCategories, setCheckedCategories] = useState(new Set());
  const [checkedNationalities, setCheckedNationalities] = useState(new Set());
  const [checkedSortings, setCheckedSortings] = useState("");
  const [checkedReleaseTimeFilter, setCheckedReleaseTimeFilter] = useState("");
  const [checkedDateYear, setCheckedDateYear] = useState("");
  // const [queryObject, setQueryObject] = useState<QueryObject>();
  const sortingList = [
    "총점",
    "캐릭터성",
    "오리지널리티",
    "스토리",
    "작품성",
    "핍진성",
    "필력",
    "화수",
  ];
  // const [page, setPage] = useRecoilState(fictionPageAtom);
  const searchParams = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  useEffect(() => {
    const updatedQueryObject = {
      keywords: Array.from(checkedItems).sort().reverse().join(",") || "all",
      nationalities:
        Array.from(checkedNationalities).sort().reverse().join(",") || "all",
      categories:
        Array.from(checkedCategories).sort().reverse().join(",") || "all",
      sorting: checkedSortings || "all",
      releaseTimeFilter: checkedReleaseTimeFilter.toString() || "all",
      dateYear:
        checkedReleaseTimeFilter.toString() === "전체"
          ? "all"
          : checkedDateYear || "all",
      // page 초기화
      page: queryObject.page == page ? 1 : +page,
    };

    // console.log(updatedQueryObject);
    setQueryObject(updatedQueryObject);
  }, [
    checkedItems,
    checkedNationalities,
    checkedCategories,
    checkedSortings,
    checkedReleaseTimeFilter,
    checkedDateYear,
    page,
    setQueryObject,
  ]);

  const checkHandler = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    checkedItemHandler(currentTarget);
  };

  const checkedItemHandler = (target: EventTarget & HTMLInputElement) => {
    const { value, checked: isChecked, name } = target;

    if (isChecked) {
      switch (name) {
        case "keyword":
          setCheckedItems((prev) => new Set([...prev, value]));
          break;
        case "nationality":
          setCheckedNationalities((prev) => new Set([...prev, value]));
          break;
        case "category":
          setCheckedCategories((prev) => new Set([...prev, value]));
          break;
        case "sorting":
          setCheckedSortings(() => value);
          break;
        case "releaseTimeFilter":
          setCheckedReleaseTimeFilter((prev) => {
            if (prev === "전체") setCheckedDateYear("all");
            return value;
          });
          break;
        case "dateYear":
          setCheckedDateYear(() => value);
          break;
        default:
          break;
      }
    } else {
      switch (name) {
        case "keyword":
          setCheckedItems((prev) => {
            prev.delete(value);
            return new Set([...prev]);
          });
          break;
        case "nationality":
          setCheckedNationalities((prev) => {
            prev.delete(value);
            return new Set([...prev]);
          });
          break;
        case "category":
          setCheckedCategories((prev) => {
            prev.delete(value);
            return new Set([...prev]);
          });
          break;
        case "sorting":
          setCheckedSortings(() => "");
          break;
        case "releaseTimeFilter":
          setCheckedReleaseTimeFilter(() => "전체");
          break;
        case "dateYear":
          setCheckedDateYear(() => "");
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    const path = {
      pathname: "/fictions",
      query: queryObject,
    };

    const queryString = Object.entries(queryObject)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const baseUrl = process.env.NEXT_PUBLIC_HOST + "/fictions";
    const newUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;
    console.log(newUrl);
    window.history.pushState(null, "", newUrl);
  }, [queryObject]);

  const releaseTimeFilters = ["전체", "연도별"];
  const thisYear = new Date().getFullYear();
  const yearDummy = [
    thisYear,
    thisYear - 1,
    thisYear - 2,
    thisYear - 3,
    thisYear - 4,
    thisYear - 5,
  ];

  return (
    <div className=" m-2 justify-center rounded bg-white p-2">
      <form className=" ">
        <div>
          <h5 className=" border-b-2 text-sm text-gray-400">
            Filter by Release Time
          </h5>
          <div className=" flex flex-wrap leading-[1.8rem]">
            {releaseTimeFilters.map((criteria, i) => (
              <label key={i} className=" flex cursor-pointer">
                <input
                  onChange={(e) => checkHandler(e)}
                  type="checkbox"
                  className=" peer hidden"
                  // id="releaseTimeFilter"
                  value={criteria}
                  name="releaseTimeFilter"
                  checked={checkedReleaseTimeFilter === criteria}
                />
                <div className=" mx-[0.35rem] mt-1  rounded-md border-[0.5px] border-[#BBBBBB] p-[0.12rem] text-center text-lg  ring-gray-500 peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200">
                  {criteria}
                </div>
              </label>
            ))}
          </div>
          <div className=" mb-2 flex">
            {checkedReleaseTimeFilter === "연도별" ? (
              yearDummy.map((year, i) => (
                <label key={i} className=" flex cursor-pointer">
                  <input
                    onChange={(e) => checkHandler(e)}
                    type="checkbox"
                    className=" peer hidden"
                    // id="dateYear"
                    value={year}
                    name="dateYear"
                    checked={+checkedDateYear === year}
                  />
                  <div className=" mx-[0.35rem] mt-1  p-[0.12rem] text-center text-xs peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200">
                    {year}
                  </div>
                </label>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <h5 className=" border-b-2 text-sm text-gray-400">Filter by options</h5>
        <div className=" ">
          <table className=" leading-7">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className=" min-w-[35px]">국가</th>
                <td className=" flex flex-wrap leading-[1.8rem]">
                  {nationalities.map((nationality, i) => (
                    <label key={i + 1} className=" flex cursor-pointer">
                      <input
                        onChange={(e) => checkHandler(e)}
                        type="checkbox"
                        className=" peer hidden"
                        // id="nationality"
                        value={nationality}
                        name="nationality"
                        // checked={checkedNationalities.has(nationality)}
                      />
                      <div className=" mx-[0.35rem] mt-1  rounded-md border-[0.5px] border-[#BBBBBB] p-[0.12rem] text-center text-sm  ring-gray-500 peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200">
                        {nationality}
                      </div>
                    </label>
                  ))}
                </td>
              </tr>
              <tr>
                <th className=" ">정렬</th>
                <td className=" flex flex-wrap leading-[1.8rem]">
                  {sortingList.map((sorting, i) => (
                    <label key={i} className="  flex cursor-pointer ">
                      <input
                        onChange={(e) => checkHandler(e)}
                        type="checkbox"
                        className=" peer hidden"
                        id="sorting"
                        value={sorting}
                        name="sorting"
                        checked={sorting === checkedSortings}
                      ></input>
                      <div className=" mx-[0.35rem] mt-1  rounded-md border-[0.5px] border-[#BBBBBB] p-[0.12rem] text-center text-sm  ring-gray-500 peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200 ">
                        {sorting}
                      </div>
                    </label>
                  ))}
                </td>
              </tr>
              <tr>
                <th>장르</th>
                <td className=" flex flex-wrap leading-[1.8rem]">
                  {categories.map((category: any, i) => (
                    <label key={i} className=" flex cursor-pointer">
                      <input
                        onChange={(e) => checkHandler(e)}
                        type="checkbox"
                        // id="genre"
                        className=" peer hidden"
                        value={category.name}
                        name="genre"
                        // checked={checkedCategories.has(category.name)}
                      />
                      <div className=" mx-[0.35rem] mt-1  rounded-md border-[0.5px] border-[#BBBBBB] p-[0.12rem] text-center text-sm  ring-gray-500 peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200 ">
                        {category.name}
                      </div>
                    </label>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" relative flex text-center leading-[1.8rem] ">
          <div className=" mt-2 ">
            <div className=" mt-1 whitespace-nowrap rounded-lg border-[#BBBBBB]   font-bold  peer-checked:bg-blue-600 peer-checked:text-white">
              키워드
            </div>
          </div>
          <div
            className={
              isExpanded
                ? ` relative mt-2 flex h-fit touch-auto flex-nowrap justify-start overflow-x-auto pb-[2px]  scrollbar scrollbar-thumb-slate-200 scrollbar-h-[5px]`
                : ` relative mt-2 flex h-fit touch-auto flex-wrap justify-start overflow-x-auto pb-[2px]  scrollbar scrollbar-thumb-slate-200 scrollbar-h-[5px]`
            }
          >
            {keywords
              .filter((keyword) => keyword?.isOfCons !== true)
              .map((keyword) => (
                <label key={keyword?.id} className=" flex">
                  <input
                    onChange={(e) => checkHandler(e)}
                    type="checkbox"
                    // id="keyword"
                    className=" peer hidden"
                    value={keyword?.name}
                    name="keyword"
                  />
                  <div className=" ml-[0.2rem] mt-1 h-fit cursor-pointer whitespace-nowrap rounded-lg border-[#BBBBBB]  bg-gray-200 p-1 text-center text-sm text-[#666676] peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200  ">
                    {keyword?.name}
                  </div>
                </label>
              ))}
          </div>
          {!isExpanded ? (
            <div className=" absolute bottom-0 left-[-4px] mt-3 flex rounded-lg ">
              <div className=" h-[28.8px] w-6  bg-transparent bg-gradient-to-l from-white backdrop-blur-[1.5px]"></div>
              <span className=" cursor-pointer bg-white">
                <CollapseUp
                  onClick={() => setIsExpanded(!isExpanded)}
                  height={28}
                  width={28}
                />
              </span>
            </div>
          ) : (
            <div className=" absolute right-0 mt-3 flex rounded-lg ">
              <div className=" h-[28.8px] w-6  bg-transparent bg-gradient-to-l from-white backdrop-blur-[1.5px]"></div>
              <span className=" cursor-pointer bg-white">
                <ExpandDown
                  onClick={() => setIsExpanded(!isExpanded)}
                  height={28}
                  width={28}
                />
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
