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
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import FadeLoader from "react-spinners/FadeLoader";
import { pageAtom } from "../../atoms";
import dynamic from "next/dynamic";
import { useRecoilState } from "recoil";

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

const DynamicFictionListWrapper = dynamic(
  () => import(`@components/fictionListWrapper`),
  {
    suspense: true,
  }
);

const FictionsWithParams: NextPage<FictionsResponse> = ({
  keywords,
  categories,
  nationalities,
}) => {
  // const [pageIndex, setPageIndex] = useRecoilState(pageAtom);
  const router = useRouter();
  const [page, setPage] = useRecoilState(pageAtom);
  let queryString = "";

  //세부 필터링
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [checkedGenres, setCheckedGenres] = useState(new Set());
  const [checkedNationalities, setCheckedNationalities] = useState(new Set());
  const [checkedSortings, setCheckedSortings] = useState(new Set());
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

  const checkHandler = ({
    currentTarget,
  }: React.MouseEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);

    checkedItemHandler(
      currentTarget.parentNode,
      currentTarget.value,
      currentTarget.checked,
      currentTarget.id,
      currentTarget
    );
  };

  const checkedItemHandler = (
    box: any,
    name: any,
    isChecked: any,
    id: any,
    target: any
  ) => {
    // console.log(name);
    // console.log(checkedItems);
    // 키워드
    if (isChecked && id === "keyword") {
      checkedItems.add(name);
      setCheckedItems(checkedItems);
      // box.style.backgroundColor = "blue";
      // box.style.color = "white";
    } else if (!isChecked && checkedItems.has(name) && id === "keyword") {
      checkedItems.delete(name);
      setCheckedItems(checkedItems);
    }
    // 국가
    if (isChecked && id === "nationality") {
      checkedNationalities.add(name);
      setCheckedNationalities(checkedNationalities);
    } else if (
      !isChecked &&
      checkedNationalities.has(name) &&
      id === "nationality"
    ) {
      checkedNationalities.delete(name);
      setCheckedNationalities(checkedNationalities);
    }
    // 장르
    if (isChecked && id === "genre") {
      checkedGenres.add(name);
      setCheckedGenres(checkedGenres);
    } else if (!isChecked && checkedGenres.has(name) && id === "genre") {
      checkedGenres.delete(name);
      setCheckedGenres(checkedGenres);
    }
    // 정렬
    if (isChecked && id === "sorting") {
      checkedSortings.clear();
      checkedSortings.add(name);
      setCheckedSortings(checkedSortings);
      // console.log(name);
    } else if (!isChecked && checkedSortings.has(name) && id === "sorting") {
      checkedSortings.delete(name);
      setCheckedSortings(checkedSortings);
    }
  };

  const buttonFlag = useRef(true);
  const rerenderList = () => {
    // setPageIndex(1);

    if (!buttonFlag.current) {
      alert("새로고침은 5초마다 한번씩 가능합니다.");
      return;
    }
    buttonFlag.current = !buttonFlag.current;
    setTimeout(() => {
      buttonFlag.current = !buttonFlag.current;
    }, 1000);
    // router.push({
    //   pathname: "/fictions",
    //   query: {
    //     keywords: Array.from(checkedItems).join(","),
    //     nationalities: Array.from(checkedNationalities).join(","),
    //     genres: Array.from(checkedGenres).join(","),
    //     sorting: Array.from(checkedSortings).join(","),
    //     page: pageIndex,
    //   },
    // });

    // router.push(
    //   `/fictions/${Array.from(checkedNationalities).join(",") || "all"}/${
    //     Array.from(checkedGenres).join(",") || "all"
    //   }/${Array.from(checkedSortings || "총점").join(",") || "all"}/${
    //     router?.query?.page || 1
    //   }/${Array.from(checkedItems).join(",") || "all"}`
    // );
  };

  useEffect(() => {
    const path = {
      pathname: "/fictions",
      query: {
        keywords: Array.from(checkedItems).join(",") || "all",
        nationalities: Array.from(checkedNationalities).join(",") || "all",
        genres: Array.from(checkedGenres).join(",") || "all",
        sorting: Array.from(checkedSortings).join(",") || "all",
        page: router?.query?.page || 1,
      },
    };
    // console.log(page);
    router.replace(path, undefined, { shallow: true });
  }, [isChecked]);

  return (
    <div className=" mt-10 ">
      <div className=" justify-center">
        <form className=" ">
          <div className=" bg-white px-2 pt-2 pb-1 border-[0.5px] border-[#BBBBBB] rounded-md blue ">
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
                          onClick={(e) => checkHandler(e)}
                          type="checkbox"
                          className=" hidden peer"
                          id="nationality"
                          value={nationality}
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
                          onClick={(e) => checkHandler(e)}
                          type="checkbox"
                          id="genre"
                          className=" hidden peer"
                          value={category.name}
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
                      <label
                        key={i}
                        className=" bg-white  cursor-pointer flex "
                      >
                        <input
                          onClick={(e) => checkHandler(e)}
                          type="radio"
                          className=" hidden peer"
                          id="sorting"
                          value={sorting}
                          name="sorting"
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
                              onClick={(e) => checkHandler(e)}
                              type="checkbox"
                              id="keyword"
                              className=" hidden peer"
                              value={keyword?.name}
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
      <Suspense
        fallback={
          <FadeLoader
            className=" mx-auto"
            height={15}
            width={5}
            radius={2}
            margin={2}
            color={"#000000"}
          />
        }
      >
        <DynamicFictionListWrapper
          checkedItems={checkedItems}
          checkedNationalities={checkedNationalities}
          checkedGenres={checkedGenres}
          checkedSortings={checkedSortings}
          isChecked={isChecked}
        />
      </Suspense>
    </div>
  );
};

export async function getStaticProps() {
  const fictions = await client.fiction.findMany({
    select: {
      keywords: {
        include: {
          keyword: true,
        },
      },
      type: true,
      currentState: true,
      nationality: true,
      categories: {
        include: {
          category: true,
        },
      },
      isTranslated: true,
    },
  });

  const fictionsCount = await client.fiction.count({
    where: {},
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
      fictionsCount: JSON.parse(JSON.stringify(fictionsCount)),
      keywords: JSON.parse(JSON.stringify(keywords)),
      nationalities: JSON.parse(JSON.stringify(nationalities)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
    revalidate: 3600,
  };
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };

export default FictionsWithParams;
