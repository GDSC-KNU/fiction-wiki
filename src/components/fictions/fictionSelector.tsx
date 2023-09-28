import { Keyword, Category } from "@prisma/client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

import ExpandDown from "@public/svg/expandDown.svg";
import CollapseUp from "@public/svg/collapseUp.svg";

import { useQueryObject } from "@/hooks/useQueryObject";

interface FictionSelectorProps {
  staticData: {
    keywordList: Keyword[];
    nationalityList: string[];
    categoryList: Category[];
  };
}

export default function FictionSelector({ staticData }: FictionSelectorProps) {
  const { updateQueryObject, queryObject } = useQueryObject();

  const {
    keywordList: keywords,
    nationalityList: nationalities,
    categoryList: categories,
  } = staticData;
  //expand
  const [isExpanded, setIsExpanded] = useState(true);

  //세부 필터링

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

  const searchParams = useSearchParams();
  const page = +(searchParams.get("page") || 1);

  const checkHandler = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    updateQueryObject(currentTarget);
  };

  // const releaseTimeFilters = ["전체", "연도별"];
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
          <h5 className=" border-b-2 text-gray-400">연도별</h5>
          <div className=" flex flex-wrap leading-[1.8rem]">
            {/* {releaseTimeFilters.map((criteria, i) => (
              <label key={i} className=" flex cursor-pointer">
                <input
                  onChange={(e) => checkHandler(e)}
                  type="checkbox"
                  className=" peer hidden"
                  // id="releaseTimeFilter"
                  value={criteria}
                  name="releaseTimeFilter"
                  checked={queryObject.releaseTimeFilter === criteria}
                />
                <div className=" mx-[0.35rem] mt-1  rounded-md border-[0.5px] border-[#BBBBBB] p-[0.12rem] text-center text-lg  ring-gray-500 peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200">
                  {criteria}
                </div>
              </label>
            ))} */}
          </div>
          <div className=" mb-2 flex">
            {yearDummy.map((year, i) => (
              <label key={i} className=" flex cursor-pointer">
                <input
                  onChange={(e) => checkHandler(e)}
                  type="checkbox"
                  className=" peer hidden"
                  // id="dateYear"
                  value={year}
                  name="dateYear"
                  checked={queryObject.dateYear === year.toString()}
                />
                <div className=" mx-[0.35rem] mt-1  p-[0.12rem] text-center text-sm peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200">
                  {year}
                </div>
              </label>
            ))}
          </div>
        </div>
        <h5 className=" border-b-2 text-gray-400">분류별</h5>
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
                  {nationalities.map((nationalities, i) => (
                    <label key={i + 1} className=" flex cursor-pointer">
                      <input
                        onChange={(e) => checkHandler(e)}
                        type="checkbox"
                        className=" peer hidden"
                        // id="nationality"
                        value={nationalities}
                        name="nationalities"
                        checked={queryObject.nationalities?.includes(
                          nationalities
                        )}
                      />
                      <div className=" mx-[0.35rem] mt-1  rounded-md border-[0.5px] border-[#BBBBBB] p-[0.12rem] text-center text-sm  ring-gray-500 peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200">
                        {nationalities}
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
                        checked={queryObject.sorting === sorting}
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
                        className=" peer hidden"
                        value={category.name}
                        name="categories"
                        checked={queryObject.categories?.includes(
                          category.name
                        )}
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
                    name="keywords"
                    checked={queryObject.keywords?.includes(keyword?.name)}
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
