import useUser from "@libs/client/useUser";
import {
  Fiction,
  Keyword,
  FictionStat,
  KeywordsOnFictions,
  UserFictionStat,
} from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { title } from "process";
import useSWR from "swr";
import client from "@libs/server/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface FictionWithMore extends Fiction {
  keywords: [KeywordsOnFictionsWithMore];
  fictionStat: [FictionStat];
  userFictionStat: UserFictionStat;
}

interface KeywordsOnFictionsWithMore extends KeywordsOnFictions {
  keyword: Keyword;
}

interface FictionsResponse {
  ok: boolean;
  fictions: FictionWithMore[];
  keywords: Keyword[];
}

const Fictions: NextPage<FictionsResponse> = ({ fictions, keywords }) => {
  // const { user, isLoading } = useUser();
  // const { data } = useSWR<FictionsResponse>("/api/fictions");
  // console.log(fictions);
  // console.log(keywords);

  //keywords 중복제거
  keywords = keywords.filter(
    (arr, index, callback) =>
      index === callback.findIndex((t) => t.name === arr.name)
  );
  // genre 중복제거 (fiction.genre -> genre)
  let genres: Array<any> = [];
  fictions.map((fiction) => genres.push(fiction.genre));
  genres = [...new Set(genres)];
  // console.log(genres);
  // nationality 중복제거 (fiction.nationality -> nationality)
  let nationalities: Array<any> = [];
  fictions.map((fiction) => nationalities.push(fiction.nationality));
  nationalities = [...new Set(nationalities)];
  // console.log(nationalities);

  //Keywords-tag
  const map = new Map();
  const mapG = new Map();
  const mapN = new Map();
  // keyword map 생성
  for (let i = 0; i < fictions.length; i++) {
    for (let j = 0; j < fictions[i].keywords.length; j++) {
      if (map.get(fictions[i].keywords[j].keyword.name)) {
        map.set(fictions[i].keywords[j].keyword.name, [
          ...map.get(fictions[i].keywords[j].keyword.name),
          fictions[i].id,
        ]);
      } else {
        map.set(fictions[i].keywords[j].keyword.name, [fictions[i].id]);
      }
    }
  }
  // genre map 생성
  for (let i = 0; i < fictions.length; i++) {
    if (mapG.get(fictions[i].genre))
      mapG.set(fictions[i].genre, [
        ...mapG.get(fictions[i].genre),
        fictions[i].id,
      ]);
    else mapG.set(fictions[i].genre, [fictions[i].id]);
  }
  // nationality map 생성
  for (let i = 0; i < fictions.length; i++) {
    if (mapN.get(fictions[i].nationality))
      mapN.set(fictions[i].nationality, [
        ...mapN.get(fictions[i].nationality),
        fictions[i].id,
      ]);
    else mapN.set(fictions[i].nationality, [fictions[i].id]);
  }

  // console.log(fictions[0].keywords[0].keyword.name);

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
  ];

  let [sFictions, setSFictions] = useState(fictions);

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

  const checkedItemHandler = (box, name, isChecked, id, target) => {
    // console.log(name);
    // console.log(isChecked);
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
    // return checkedItems;
  };
  // console.log(fictions);
  // console.log(checkedItems);
  // console.log(checkedGenres);
  // console.log(checkedNationalities);

  let temp: any = [];
  let temp2: any = [];
  let temp3: any = [];
  console.log(fictions);

  const rerenderList = () => {
    sFictions = fictions;
    setSFictions(sFictions);
    Array.from(checkedItems).map((keyword) => {
      temp = [...new Set([...temp, ...(map.get(keyword) || [])])].sort(
        (a, b) => a - b
      );
    });

    Array.from(checkedGenres).map((keyword) => {
      temp2 = [...new Set([...temp2, ...(mapG.get(keyword) || [])])].sort(
        (a, b) => a - b
      );
    });

    Array.from(checkedNationalities).map((keyword) => {
      temp3 = [...new Set([...temp3, ...(mapN.get(keyword) || [])])].sort(
        (a, b) => a - b
      );
    });

    //키워드 필터링
    let allTemp: any[] = [];
    sFictions.map((fiction) => allTemp.push(fiction.id));

    if (!temp.length) temp = allTemp;
    if (!temp2.length) temp2 = allTemp;
    if (!temp3.length) temp3 = allTemp;
    // console.log(temp);
    // console.log(temp2);
    // console.log(temp3);

    temp = temp
      .filter((x: any) => temp2.includes(x))
      .filter((y: any) => temp3.includes(y));

    sFictions = sFictions.filter((fiction) => temp.includes(fiction.id));
    setSFictions(sFictions);

    // console.log(temp);

    if (!sFictions.length) {
      sFictions = fictions;
      setSFictions(sFictions);
    }

    //장르 필터링
    sFictions = sFictions.filter((fiction) => fiction.id);
    console.log(sFictions);

    //정렬 Sorting
    if (checkedSortings.has("오리지널리티")) {
      sFictions = sFictions.sort(
        (a, b) =>
          (b.userFictionStat?.originality || 0) -
          (a.userFictionStat?.originality || 0)
      );
      setSFictions(sFictions);
    } else if (checkedSortings.has("캐릭터성")) {
      sFictions = sFictions.sort(
        (a, b) =>
          (b.userFictionStat?.character || 0) -
          (a.userFictionStat?.character || 0)
      );
      setSFictions(sFictions);
    } else if (checkedSortings.has("스토리")) {
      sFictions = sFictions.sort(
        (a, b) =>
          (b.userFictionStat?.synopsisComposition || 0) -
          (a.userFictionStat?.synopsisComposition || 0)
      );
      setSFictions(sFictions);
    } else if (checkedSortings.has("작품성")) {
      sFictions = sFictions.sort(
        (a, b) =>
          (b.userFictionStat?.value || 0) - (a.userFictionStat?.value || 0)
      );
      setSFictions(sFictions);
    } else if (checkedSortings.has("핍진성")) {
      sFictions = sFictions.sort(
        (a, b) =>
          (b.userFictionStat?.verisimilitude || 0) -
          (a.userFictionStat?.verisimilitude || 0)
      );
      setSFictions(sFictions);
    } else if (checkedSortings.has("필력")) {
      sFictions = sFictions.sort(
        (a, b) =>
          (b.userFictionStat?.writing || 0) - (a.userFictionStat?.writing || 0)
      );
      setSFictions(sFictions);
    } else if (checkedSortings.has("총점")) {
      sFictions = sFictions.sort(
        (a, b) =>
          (b.userFictionStat?.total || 0) - (a.userFictionStat?.total || 0)
      );
      setSFictions(sFictions);
    }

    console.log(checkedSortings);
  };

  return (
    <div className=" mt-10  ">
      <div className=" bg-white px-2 pt-2 pb-1 border-[0.5px] border-[#BBBBBB] rounded-md blue ">
        <form>
          <table className=" leading-7">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <th className=" w-16">제목</th>
                <td>
                  <input
                    className=" w-full"
                    type="text"
                    placeholder="검색어"
                  ></input>
                </td>
                <span className=" hover:border-gray-400 hover:bg-gray-200 bg-white border-[0.5px] border-[#BBBBBB] rounded-md mt-2 p-1">
                  {" "}
                  검색
                </span>
              </tr> */}
              {/* <tr>
                <th>작가</th>
                <td>
                  <input type="text" placeholder="검색어"></input>
                </td>
                <span className=" hover:border-gray-400 hover:bg-gray-200 bg-white border-[0.5px] border-[#BBBBBB] rounded-md mt-2 p-1">
                  {" "}
                  검색
                </span>
              </tr> */}
              <tr>
                <th>국가</th>
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
                        {" "}
                        {nationality}
                      </div>
                    </label>
                  ))}
                </td>
              </tr>
              <tr>
                <th>장르</th>
                <td className=" leading-[1.8rem] flex flex-wrap">
                  {genres.map((genre, i) => (
                    <label key={i} className=" cursor-pointer flex">
                      <input
                        onClick={(e) => checkHandler(e)}
                        type="checkbox"
                        id="genre"
                        className=" hidden peer"
                        value={genre}
                      />
                      <div className=" peer-checked:bg-blue-600 peer-checked:text-white  hover:border-gray-400 hover:bg-gray-200 p-[0.12rem] mt-1 text-sm text-center  ring-gray-500 mx-[0.35rem] rounded-md border-[#BBBBBB] border-[0.5px] ">
                        {" "}
                        {genre}
                      </div>
                    </label>
                  ))}
                </td>
              </tr>
              <tr>
                <th className=" min-w-[50px]">키워드</th>
                <td className=" leading-[1.8rem] flex flex-wrap">
                  {keywords.map((keyword) => (
                    <label key={keyword.id} className=" cursor-pointer flex ">
                      <input
                        onClick={(e) => checkHandler(e)}
                        type="checkbox"
                        id="keyword"
                        className=" hidden peer"
                        value={keyword.name}
                      />
                      <div className=" peer-checked:bg-blue-600 peer-checked:text-white  hover:border-gray-400 hover:bg-gray-200 p-[0.12rem] mt-1 text-sm text-center  ring-gray-500 mx-[0.35rem] rounded-md border-[#BBBBBB] border-[0.5px] ">
                        {" "}
                        {keyword.name}
                      </div>
                    </label>
                  ))}
                </td>
              </tr>
              <tr>
                <th>정렬</th>
                <td className=" leading-[1.8rem] flex flex-wrap">
                  {sortingList.map((sorting, i) => (
                    <label key={i} className=" bg-white  cursor-pointer flex ">
                      <input
                        // defaultChecked
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
        </form>
      </div>
      <div className=" w-full flex justify-end">
        <button
          onClick={rerenderList}
          className=" hover:border-gray-400 hover:bg-gray-200 bg-white border-[0.5px] border-[#BBBBBB] rounded-md mt-2 p-1"
        >
          새로고침
        </button>
      </div>
      <div className=" flex justify-center">
        <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-1 py-2 ">
          {sFictions?.map((fiction, i) => (
            <Link key={fiction.id} href={`/fictions/${fiction.id}`}>
              <li className=" flex-col w-[144px] h-[190] my-3 mx-1 cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                <Image
                  className=" "
                  src={`https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction.image}/fiction`}
                  width={142}
                  height={199.69}
                />
                <div className=" flex-col px-2 pb-2">
                  <div className=" flex justify-between">
                    <div className=" text-xs text-gray-400">
                      {fiction.genre}
                    </div>
                    <div className="  text-xs font-bold">
                      {fiction.userFictionStat?.total || 0}(
                      {fiction.userFictionStat?._count?.users || 0})
                    </div>
                  </div>
                  <div className=" font-bold">{fiction.title}</div>
                  <div className=" text-xs">
                    {fiction.currentState || "???화 완결"}
                  </div>
                  <div className=" overflow-hidden text-xs">
                    {fiction.author}
                  </div>
                  <div className=" text-xs">{fiction.nationality}</div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  console.log("BUILDING fictions index Statically");
  const fictions = await client.fiction.findMany({
    include: {
      keywords: {
        include: {
          keyword: true,
        },
      },
      userFictionStat: {
        include: {
          _count: {
            select: {
              users: true,
            },
          },
        },
      },
    },
  });
  const keywords = await client.keyword.findMany();
  return {
    props: {
      fictions: JSON.parse(JSON.stringify(fictions)),
      keywords: JSON.parse(JSON.stringify(keywords)),
    },
  };
}

export default Fictions;

// const fictions = await client.fiction.findMany({
//   include: {
//     _count: {
//       select: {
//         favs: true,
//       },
//     },
//   },
// });
