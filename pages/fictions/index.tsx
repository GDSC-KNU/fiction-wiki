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
import useSWR, { mutate } from "swr";
import ClipLoader from "react-spinners/ClipLoader";
import { useRecoilState } from "recoil";
import { fictionPageAtom } from "../../src/store/atoms";
import { ParsedUrlQueryInput } from "querystring";
import { NextSeo } from "next-seo";

import { Redis } from "@upstash/redis";

const redisConfig = {
  url:
    process.env.UPSTASH_REDIS_REST_URL ??
    "https://apn1-sacred-manatee-34786.upstash.io",
  token:
    process.env.UPSTASH_REDIS_REST_TOKEN ??
    "AYfiACQgMWQxNjcyY2QtZWM4MS00NzQxLTgyZGItZGY1MjYwNDEwZGExOWJmODI1MWQzNGRlNDUyMDkzODM2NmE3NGQxZThiMmM=",
};

const redis = new Redis(redisConfig);

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

  return (
    <div className=" ">
      {/* <HeadMeta /> */}
      <NextSeo
        title="작품 찾기"
        description="국내외 웹소설에 관련한 다양한 정보를 제공합니다. 작품을 직접 평가하고 검색하세요"
        canonical="https://fictiondbs.com"
        openGraph={{
          url: "https://fictiondbs.com",
        }}
      />
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
                  <div className=" mx-[0.35rem] mt-1  rounded-md border-[0.5px] border-[#BBBBBB] p-[0.12rem] text-center text-lg  ring-gray-500 hover:border-gray-400 hover:bg-gray-200 peer-checked:bg-blue-600 peer-checked:text-white">
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
                    <div className=" mx-[0.35rem] mt-1  p-[0.12rem] text-center text-xs hover:border-gray-400 hover:bg-gray-200 peer-checked:bg-blue-600 peer-checked:text-white">
                      {year}
                    </div>
                  </label>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <h5 className=" border-b-2 text-sm text-gray-400">
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
                  <td className=" flex flex-wrap leading-[1.8rem]">
                    {nationalities.map((nationality, i) => (
                      <label key={i} className=" flex cursor-pointer">
                        <input
                          onChange={(e) => checkHandler(e)}
                          type="checkbox"
                          className=" peer hidden"
                          // id="nationality"
                          value={nationality}
                          name="nationality"
                          // checked={checkedNationalities.has(nationality)}
                        />
                        <div className=" mx-[0.35rem] mt-1  rounded-md border-[0.5px] border-[#BBBBBB] p-[0.12rem] text-center text-sm  ring-gray-500 hover:border-gray-400 hover:bg-gray-200 peer-checked:bg-blue-600 peer-checked:text-white">
                          {nationality}
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
                          // checked={checkedGenres.has(category.name)}
                        />
                        <div className=" mx-[0.35rem] mt-1  rounded-md border-[0.5px] border-[#BBBBBB] p-[0.12rem] text-center text-sm  ring-gray-500 hover:border-gray-400 hover:bg-gray-200 peer-checked:bg-blue-600 peer-checked:text-white ">
                          {category.name}
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
                        <div className=" mx-[0.35rem] mt-1  rounded-md border-[0.5px] border-[#BBBBBB] p-[0.12rem] text-center text-sm  ring-gray-500 hover:border-gray-400 hover:bg-gray-200 peer-checked:bg-blue-600 peer-checked:text-white ">
                          {sorting}
                        </div>
                      </label>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=" flex justify-between text-center">
            <details className=" ">
              <div className=" mt-5 rounded-md border-[0.5px] border-[#BBBBBB] bg-white px-2 pb-1 pt-2 ">
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
                      <td className=" flex flex-wrap leading-[1.8rem]">
                        {keywords
                          .filter((keyword) => keyword?.isOfCons !== true)
                          .map((keyword) => (
                            <label key={keyword?.id} className="  flex ">
                              <input
                                onChange={(e) => checkHandler(e)}
                                type="checkbox"
                                // id="keyword"
                                className=" peer hidden"
                                value={keyword?.name}
                                name="keyword"
                              />
                              <div className=" mx-[0.35rem] mt-1 cursor-pointer whitespace-nowrap rounded-3xl border-[#BBBBBB]  bg-gray-200 p-1 text-center text-sm text-[#666676] hover:border-gray-400 hover:bg-gray-200 peer-checked:bg-blue-600 peer-checked:text-white  ">
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
                <span className=" flex items-center  rounded-md border-[0.5px] border-[#BBBBBB] p-1 hover:cursor-pointer hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />{" "}
                  </svg>
                  &nbsp;
                  <span> 키워드 검색</span>
                </span>
              </summary>
            </details>
            <div
              title="해당 페이지의 ㅛ데이터가 오래된 경우 클릭해주세요. 최신 데이터로 갱신됩니다."
              onClick={() => {
                redis.del(JSON.stringify(queryString));
                window.alert("갱신되었습니다.");
                mutate(queryString);
              }}
              className=" mt-4 flex items-center  rounded-md border-[0.5px] border-[#BBBBBB] p-1 hover:cursor-pointer hover:bg-gray-200"
            >
              데이터 갱신
            </div>
          </div>
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

// async function getFictions() {
//   const fictions = await fetch(`${process.env.SITE_URL}/fictions`, {
//     next: {
//       revalidate: 60 * 60 * 24,
//     },
//   });

//   return fictions;
// }

export default FictionsWithParams;
