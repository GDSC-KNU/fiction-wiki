import {
  Fiction,
  Keyword,
  FictionStat,
  KeywordsOnFictions,
  UserFictionStat,
  Author,
} from "@prisma/client";
import type { NextPage } from "next";
import client from "@libs/server/client";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import FictionList from "@components/fictionList";
import useSWR from "swr";
import ClipLoader from "react-spinners/ClipLoader";
import { useRecoilState } from "recoil";
import { fictionPageAtom } from "../../atoms";
import HeadMeta from "@components/headMeata";
import { ParsedUrlQueryInput } from "querystring";

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
  genres: string;
  sorting: string;
  releaseTimeFilter: string;
  dateYear: string;
  page: number;
}

const FictionsWithParams: NextPage<FictionsResponse> = ({
  keywords,
  categories,
  nationalities,
}) => {
  const router = useRouter();

  //세부 필터링
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [checkedGenres, setCheckedGenres] = useState(new Set());
  const [checkedNationalities, setCheckedNationalities] = useState(new Set());
  const [checkedSortings, setCheckedSortings] = useState("");
  const [checkedReleaseTimeFilter, setCheckedReleaseTimeFilter] = useState("");
  const [checkedDateYear, setCheckedDateYear] = useState("");
  const [queryObject, setQueryObject] = useState<QueryObject>({
    keywords: "all",
    nationalities: "all",
    genres: "all",
    sorting: "all",
    releaseTimeFilter: "all",
    dateYear: "all",
    page: 1,
  });
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
  const [page, setPage] = useRecoilState(fictionPageAtom);

  // console.log(process.env.HOST);
  // console.log(process.env.NEXT_PUBLIC_HOST);

  useEffect(() => {
    const updatedQueryObject: QueryObject = {
      keywords: Array.from(checkedItems).sort().reverse().join(",") || "all",
      nationalities:
        Array.from(checkedNationalities).sort().reverse().join(",") || "all",
      genres: Array.from(checkedGenres).sort().reverse().join(",") || "all",
      sorting: checkedSortings || "all",
      releaseTimeFilter: checkedReleaseTimeFilter.toString() || "all",
      dateYear:
        checkedReleaseTimeFilter.toString() === "전체"
          ? "all"
          : checkedDateYear || "all",
      page: page || 1,
    };

    setQueryObject(updatedQueryObject);
  }, [
    checkedItems,
    checkedNationalities,
    checkedGenres,
    checkedSortings,
    checkedReleaseTimeFilter,
    checkedDateYear,
    page,
  ]);

  let queryString = useMemo(() => {
    const queryString = Object.entries(queryObject)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    if (queryString === "undefined") {
      return `${process.env.NEXT_PUBLIC_HOST + "/api/fictions"}`;
    }

    return `${process.env.NEXT_PUBLIC_HOST + "/api/fictions"}?${queryString}`;
  }, [queryObject]);

  const { data, isValidating } = useSWR<FictionsResponse>(queryString, {});

  const checkHandler = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(
    //   currentTarget.value,
    //   currentTarget.name,
    //   currentTarget?.checked
    // );
    checkedItemHandler(currentTarget);
  };

  const checkedItemHandler = (target: EventTarget & HTMLInputElement) => {
    const { value, checked: isChecked, name } = target;

    // console.log();
    // console.log(isChecked);
    if (isChecked) {
      switch (name) {
        case "keyword":
          setCheckedItems((prev) => new Set([...prev, value]));
          break;
        case "nationality":
          setCheckedNationalities((prev) => new Set([...prev, value]));
          break;
        case "genre":
          setCheckedGenres((prev) => new Set([...prev, value]));
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
        case "genre":
          setCheckedGenres((prev) => {
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

    router.replace(path, undefined, { shallow: true });
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
  // console.log("");

  return (
    <div className=" mt-10 ">
      <HeadMeta />
      <div className=" justify-center bg-white rounded m-2 p-2">
        <form className=" ">
          <div>
            <h5 className=" text-sm border-b-2 text-gray-400">
              Filter by Release Time
            </h5>
            <div className=" leading-[1.8rem] flex flex-wrap">
              {releaseTimeFilters.map((criteria, i) => (
                <label key={i} className=" cursor-pointer flex">
                  <input
                    onChange={(e) => checkHandler(e)}
                    type="checkbox"
                    className=" hidden peer"
                    // id="releaseTimeFilter"
                    value={criteria}
                    name="releaseTimeFilter"
                    checked={checkedReleaseTimeFilter === criteria}
                  />
                  <div className=" peer-checked:bg-blue-600 peer-checked:text-white  hover:border-gray-400 hover:bg-gray-200 p-[0.12rem] mt-1 text-lg text-center  ring-gray-500 mx-[0.35rem] rounded-md border-[#BBBBBB] border-[0.5px]">
                    {criteria}
                  </div>
                </label>
              ))}
            </div>
            <div className=" mb-2 flex">
              {checkedReleaseTimeFilter === "연도별" ? (
                yearDummy.map((year, i) => (
                  <label key={i} className=" cursor-pointer flex">
                    <input
                      onChange={(e) => checkHandler(e)}
                      type="checkbox"
                      className=" hidden peer"
                      // id="dateYear"
                      value={year}
                      name="dateYear"
                      checked={+checkedDateYear === year}
                    />
                    <div className=" peer-checked:bg-blue-600 peer-checked:text-white  hover:border-gray-400 hover:bg-gray-200 p-[0.12rem] mt-1 text-xs text-center mx-[0.35rem]">
                      {year}
                    </div>
                  </label>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <h5 className=" text-sm border-b-2 text-gray-400">
            Filter by options
          </h5>
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
                  <td className=" leading-[1.8rem] flex flex-wrap">
                    {nationalities.map((nationality, i) => (
                      <label key={i} className=" cursor-pointer flex">
                        <input
                          onChange={(e) => checkHandler(e)}
                          type="checkbox"
                          className=" hidden peer"
                          // id="nationality"
                          value={nationality}
                          name="nationality"
                          // checked={checkedNationalities.has(nationality)}
                        />
                        <div className=" peer-checked:bg-blue-600 peer-checked:text-white  hover:border-gray-400 hover:bg-gray-200 p-[0.12rem] mt-1 text-sm text-center  ring-gray-500 mx-[0.35rem] rounded-md border-[#BBBBBB] border-[0.5px]">
                          {nationality}
                        </div>
                      </label>
                    ))}
                  </td>
                </tr>
                <tr>
                  <th>장르</th>
                  <td className=" leading-[1.8rem] flex flex-wrap">
                    {categories.map((category: any, i) => (
                      <label key={i} className=" cursor-pointer flex">
                        <input
                          onChange={(e) => checkHandler(e)}
                          type="checkbox"
                          // id="genre"
                          className=" hidden peer"
                          value={category.name}
                          name="genre"
                          // checked={checkedGenres.has(category.name)}
                        />
                        <div className=" peer-checked:bg-blue-600 peer-checked:text-white  hover:border-gray-400 hover:bg-gray-200 p-[0.12rem] mt-1 text-sm text-center  ring-gray-500 mx-[0.35rem] rounded-md border-[#BBBBBB] border-[0.5px] ">
                          {category.name}
                        </div>
                      </label>
                    ))}
                  </td>
                </tr>
                <tr>
                  <th className=" ">정렬</th>
                  <td className=" leading-[1.8rem] flex flex-wrap">
                    {sortingList.map((sorting, i) => (
                      <label key={i} className="  cursor-pointer flex ">
                        <input
                          onChange={(e) => checkHandler(e)}
                          type="checkbox"
                          className=" hidden peer"
                          id="sorting"
                          value={sorting}
                          name="sorting"
                          checked={sorting === checkedSortings}
                        ></input>
                        <div className=" peer-checked:bg-blue-600 peer-checked:text-white  hover:border-gray-400 hover:bg-gray-200 p-[0.12rem] mt-1 text-sm text-center  ring-gray-500 mx-[0.35rem] rounded-md border-[#BBBBBB] border-[0.5px] ">
                          {sorting}
                        </div>
                      </label>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <details className=" text-center">
            <div className=" mt-5 bg-white px-2 pt-2 pb-1 border-[0.5px] border-[#BBBBBB] rounded-md blue ">
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
                    <th className=" min-w-[50px]">키워드</th>
                    <td className=" leading-[1.8rem] flex flex-wrap">
                      {keywords
                        .filter((keyword) => keyword?.isOfCons !== true)
                        .map((keyword) => (
                          <label key={keyword?.id} className="  flex ">
                            <input
                              onChange={(e) => checkHandler(e)}
                              type="checkbox"
                              // id="keyword"
                              className=" hidden peer"
                              value={keyword?.name}
                              name="keyword"
                            />
                            <div className=" cursor-pointer whitespace-nowrap bg-gray-200 text-[#666676] peer-checked:bg-blue-600 peer-checked:text-white  hover:border-gray-400 hover:bg-gray-200 mt-1 text-sm text-center mx-[0.35rem] rounded-3xl border-[#BBBBBB] p-1  ">
                              #{keyword?.name}
                            </div>
                          </label>
                        ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <summary style={{ listStyle: "none" }} className=" mt-4 w-fit">
              <span className=" hover:cursor-pointer hover:bg-gray-200  border-[0.5px] p-1 border-[#BBBBBB] rounded-md flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />{" "}
                </svg>
                &nbsp;
                <span> 키워드 검색</span>
              </span>
            </summary>
          </details>
        </form>
      </div>
      {isValidating && !data ? (
        <div className=" flex justify-center">
          <ClipLoader
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : null}
      <FictionList
        data={data}
        type={"fictions_list"}
        count={data?.fictions?.length}
      />
    </div>
  );
};

export async function getStaticProps() {
  const fictions = await client.fiction.findMany({
    select: {
      nationality: true,
    },
  });

  let keywords = await client.keyword.findMany();

  let categories = await client.category.findMany();

  let nationalities: Array<any> = [];
  fictions.map((fiction: any) => nationalities.push(fiction.nationality));
  nationalities = await [...new Set(nationalities)].filter(
    (item) => item !== ""
  );

  return {
    props: {
      // fictions: JSON.parse(JSON.stringify(fictions)),
      // fictionsCount: JSON.parse(JSON.stringify(fictionsCount)),
      keywords: JSON.parse(JSON.stringify(keywords)),
      nationalities: JSON.parse(JSON.stringify(nationalities)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
    revalidate: 10000,
  };
}

export default FictionsWithParams;
