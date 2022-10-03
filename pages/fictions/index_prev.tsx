import {
  Fiction,
  Keyword,
  FictionStat,
  KeywordsOnFictions,
  UserFictionStat,
  Author,
} from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { title } from "process";
import useSWR from "swr";
import client from "@libs/server/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  keywords: Keyword[];
}

const Fictions_prev: NextPage<FictionsResponse> = ({ fictions, keywords }) => {
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

  const checkedItemHandler = (
    box: any,
    name: any,
    isChecked: any,
    id: any,
    target: any
  ) => {
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
              <li className=" relative flex-col w-[144px] h-[190] my-3 mx-1 cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                <Image
                  className=" "
                  src={`https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction.image}/fiction`}
                  width={142}
                  height={199.69}
                />
                <div className=" ml-1 absolute bottom-[16.2rem] z-10">
                  {fiction.nationality === "중국" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      zoomAndPan="magnify"
                      viewBox="0 0 30 30.000001"
                      height="24"
                      preserveAspectRatio="xMidYMid meet"
                      version="1.0"
                    >
                      <defs>
                        <clipPath id="id1">
                          <path
                            d="M 2.546875 5.527344 L 27.226562 5.527344 L 27.226562 23.671875 L 2.546875 23.671875 Z M 2.546875 5.527344 "
                            clipRule="nonzero"
                          />
                        </clipPath>
                      </defs>
                      <g clipPath="url(#id1)">
                        <path
                          fill="rgb(87.059021%, 16.079712%, 6.269836%)"
                          d="M 27.214844 20.882812 C 27.214844 22.425781 25.988281 23.671875 24.476562 23.671875 L 5.296875 23.671875 C 3.785156 23.671875 2.558594 22.425781 2.558594 20.882812 L 2.558594 8.320312 C 2.558594 6.777344 3.785156 5.527344 5.296875 5.527344 L 24.476562 5.527344 C 25.988281 5.527344 27.214844 6.777344 27.214844 8.320312 Z M 27.214844 20.882812 "
                          fillOpacity="1"
                          fillRule="nonzero"
                        />
                      </g>
                      <path
                        fill="rgb(100%, 87.059021%, 0.779724%)"
                        d="M 10.1875 8.304688 L 10.691406 8.550781 L 11.09375 8.15625 L 11.019531 8.722656 L 11.511719 8.992188 L 10.960938 9.09375 L 10.863281 9.652344 L 10.597656 9.152344 L 10.042969 9.230469 L 10.429688 8.816406 Z M 13.382812 10.355469 L 13.136719 10.871094 L 13.523438 11.28125 L 12.972656 11.203125 L 12.707031 11.707031 L 12.609375 11.144531 L 12.058594 11.042969 L 12.550781 10.773438 L 12.472656 10.210938 L 12.878906 10.605469 Z M 12.726562 12.992188 L 12.910156 13.53125 L 13.46875 13.542969 L 13.023438 13.890625 L 13.183594 14.433594 L 12.726562 14.109375 L 12.265625 14.433594 L 12.429688 13.890625 L 11.980469 13.542969 L 12.542969 13.53125 Z M 10.1875 15.28125 L 10.691406 15.53125 L 11.09375 15.136719 L 11.019531 15.703125 L 11.511719 15.972656 L 10.960938 16.070312 L 10.863281 16.632812 L 10.597656 16.128906 L 10.042969 16.207031 L 10.429688 15.796875 Z M 7.351562 9.683594 L 7.988281 11.546875 L 9.925781 11.585938 L 8.382812 12.777344 L 8.941406 14.667969 L 7.351562 13.539062 L 5.761719 14.667969 L 6.324219 12.777344 L 4.78125 11.585938 L 6.71875 11.546875 Z M 7.351562 9.683594 "
                        fillOpacity="1"
                        fillRule="nonzero"
                      />
                    </svg>
                  ) : fiction.nationality === "한국" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      zoomAndPan="magnify"
                      viewBox="0 0 30 30.000001"
                      height="24"
                      preserveAspectRatio="xMidYMid meet"
                      version="1.0"
                    >
                      <defs>
                        <clipPath id="id1">
                          <path
                            d="M 2.550781 5.53125 L 27.230469 5.53125 L 27.230469 23.675781 L 2.550781 23.675781 Z M 2.550781 5.53125 "
                            clipRule="nonzero"
                          />
                        </clipPath>
                      </defs>
                      <g clipPath="url(#id1)">
                        <path
                          fill="rgb(93.328857%, 93.328857%, 93.328857%)"
                          d="M 27.21875 20.882812 C 27.21875 22.425781 25.992188 23.675781 24.480469 23.675781 L 5.300781 23.675781 C 3.789062 23.675781 2.5625 22.425781 2.5625 20.882812 L 2.5625 8.324219 C 2.5625 6.78125 3.789062 5.53125 5.300781 5.53125 L 24.480469 5.53125 C 25.992188 5.53125 27.21875 6.78125 27.21875 8.324219 Z M 27.21875 20.882812 "
                          fillOpacity="1"
                          fillRule="nonzero"
                        />
                      </g>
                      <path
                        fill="rgb(77.648926%, 4.708862%, 18.818665%)"
                        d="M 17.246094 11.171875 C 15.390625 9.847656 12.828125 10.308594 11.523438 12.203125 C 10.875 13.148438 11.097656 14.453125 12.027344 15.117188 C 12.957031 15.78125 14.238281 15.550781 14.890625 14.605469 C 15.542969 13.65625 16.824219 13.425781 17.753906 14.089844 C 18.683594 14.753906 18.910156 16.058594 18.257812 17.003906 C 19.558594 15.113281 19.105469 12.5 17.246094 11.171875 Z M 17.246094 11.171875 "
                        fillOpacity="1"
                        fillRule="nonzero"
                      />
                      <path
                        fill="rgb(0%, 20.388794%, 47.059631%)"
                        d="M 17.753906 14.089844 C 16.824219 13.425781 15.542969 13.65625 14.890625 14.605469 C 14.238281 15.550781 12.957031 15.78125 12.027344 15.117188 C 11.097656 14.453125 10.875 13.148438 11.523438 12.203125 C 10.222656 14.097656 10.675781 16.707031 12.535156 18.03125 C 14.394531 19.359375 16.953125 18.898438 18.257812 17.003906 C 18.90625 16.058594 18.683594 14.753906 17.753906 14.089844 Z M 17.753906 14.089844 "
                        fillOpacity="1"
                        fillRule="nonzero"
                      />
                      <path
                        fill="rgb(16.079712%, 18.429565%, 19.999695%)"
                        d="M 19.230469 19.886719 L 20.550781 18.285156 L 21.074219 18.734375 L 19.753906 20.335938 Z M 20.988281 17.75 L 22.308594 16.148438 L 22.835938 16.597656 L 21.515625 18.199219 Z M 20.277344 20.785156 L 21.597656 19.183594 L 22.125 19.632812 L 20.804688 21.234375 Z M 22.039062 18.648438 L 23.363281 17.042969 L 23.886719 17.492188 L 22.566406 19.097656 Z M 21.328125 21.683594 L 22.648438 20.082031 L 23.171875 20.53125 L 21.851562 22.132812 Z M 23.089844 19.546875 L 24.40625 17.941406 L 24.933594 18.390625 L 23.613281 19.996094 Z M 23.089844 9.660156 L 23.617188 9.214844 L 24.9375 10.816406 L 24.414062 11.265625 Z M 21.328125 7.523438 L 21.855469 7.074219 L 23.175781 8.679688 L 22.648438 9.125 Z M 20.277344 8.421875 L 20.804688 7.972656 L 23.886719 11.714844 L 23.363281 12.164062 Z M 19.230469 9.316406 L 19.753906 8.867188 L 21.074219 10.472656 L 20.550781 10.921875 Z M 20.988281 11.457031 L 21.515625 11.007812 L 22.835938 12.609375 L 22.3125 13.058594 Z M 6.945312 16.59375 L 7.46875 16.148438 L 10.550781 19.890625 L 10.027344 20.339844 Z M 5.898438 17.492188 L 6.421875 17.046875 L 7.742188 18.648438 L 7.21875 19.097656 Z M 7.65625 19.632812 L 8.179688 19.183594 L 9.503906 20.785156 L 8.976562 21.234375 Z M 4.847656 18.390625 L 5.371094 17.941406 L 8.453125 21.683594 L 7.929688 22.132812 Z M 4.847656 10.816406 L 7.925781 7.074219 L 8.453125 7.523438 L 5.371094 11.265625 Z M 5.894531 11.714844 L 8.976562 7.972656 L 9.503906 8.421875 L 6.421875 12.164062 Z M 6.945312 12.609375 L 10.027344 8.867188 L 10.550781 9.316406 L 7.46875 13.058594 Z M 6.945312 12.609375 "
                        fillOpacity="1"
                        fillRule="nonzero"
                      />
                    </svg>
                  ) : fiction.nationality === "일본" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      zoomAndPan="magnify"
                      viewBox="0 0 30 30.000001"
                      height="24"
                      preserveAspectRatio="xMidYMid meet"
                      version="1.0"
                    >
                      <defs>
                        <clipPath id="id1">
                          <path
                            d="M 2.226562 6.132812 L 27.628906 6.132812 L 27.628906 24.277344 L 2.226562 24.277344 Z M 2.226562 6.132812 "
                            clipRule="nonzero"
                          />
                        </clipPath>
                      </defs>
                      <g clipPath="url(#id1)">
                        <path
                          fill="rgb(93.328857%, 93.328857%, 93.328857%)"
                          d="M 27.621094 21.488281 C 27.621094 23.027344 26.359375 24.277344 24.800781 24.277344 L 5.054688 24.277344 C 3.496094 24.277344 2.234375 23.027344 2.234375 21.488281 L 2.234375 8.925781 C 2.234375 7.382812 3.496094 6.132812 5.054688 6.132812 L 24.800781 6.132812 C 26.359375 6.132812 27.621094 7.382812 27.621094 8.925781 Z M 27.621094 21.488281 "
                          fillOpacity="1"
                          fillRule="nonzero"
                        />
                      </g>
                      <path
                        fill="rgb(92.939758%, 10.5896%, 18.429565%)"
                        d="M 19.863281 15.207031 C 19.863281 15.527344 19.832031 15.84375 19.769531 16.160156 C 19.707031 16.472656 19.613281 16.78125 19.488281 17.074219 C 19.363281 17.371094 19.210938 17.652344 19.03125 17.921875 C 18.851562 18.1875 18.648438 18.433594 18.417969 18.660156 C 18.1875 18.886719 17.941406 19.089844 17.671875 19.269531 C 17.402344 19.445312 17.117188 19.597656 16.816406 19.71875 C 16.515625 19.84375 16.207031 19.933594 15.890625 19.996094 C 15.574219 20.058594 15.25 20.089844 14.925781 20.089844 C 14.601562 20.089844 14.28125 20.058594 13.964844 19.996094 C 13.644531 19.933594 13.335938 19.84375 13.039062 19.71875 C 12.738281 19.597656 12.453125 19.445312 12.183594 19.269531 C 11.914062 19.089844 11.664062 18.886719 11.4375 18.660156 C 11.207031 18.433594 11.003906 18.1875 10.824219 17.921875 C 10.644531 17.652344 10.492188 17.371094 10.367188 17.074219 C 10.242188 16.78125 10.148438 16.472656 10.085938 16.160156 C 10.023438 15.84375 9.992188 15.527344 9.992188 15.207031 C 9.992188 14.886719 10.023438 14.566406 10.085938 14.253906 C 10.148438 13.9375 10.242188 13.632812 10.367188 13.335938 C 10.492188 13.039062 10.644531 12.757812 10.824219 12.492188 C 11.003906 12.226562 11.207031 11.980469 11.4375 11.75 C 11.664062 11.523438 11.914062 11.324219 12.183594 11.144531 C 12.453125 10.964844 12.738281 10.816406 13.039062 10.691406 C 13.335938 10.570312 13.644531 10.476562 13.964844 10.414062 C 14.28125 10.351562 14.601562 10.320312 14.925781 10.320312 C 15.25 10.320312 15.574219 10.351562 15.890625 10.414062 C 16.207031 10.476562 16.515625 10.570312 16.816406 10.691406 C 17.117188 10.816406 17.402344 10.964844 17.671875 11.144531 C 17.941406 11.324219 18.1875 11.523438 18.417969 11.75 C 18.648438 11.980469 18.851562 12.226562 19.03125 12.492188 C 19.210938 12.757812 19.363281 13.039062 19.488281 13.335938 C 19.613281 13.632812 19.707031 13.9375 19.769531 14.253906 C 19.832031 14.566406 19.863281 14.886719 19.863281 15.207031 Z M 19.863281 15.207031 "
                        fillOpacity="1"
                        fillRule="nonzero"
                      />
                    </svg>
                  ) : fiction.nationality === "영미권" ? (
                    "EN"
                  ) : null}
                </div>
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
                    {fiction.author?.name || "작가 미상"}
                  </div>
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
    take: 18,
    skip: 18,
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
      author: true,
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

export default Fictions_prev;

// const fictions = await client.fiction.findMany({
//   include: {
//     _count: {
//       select: {
//         favs: true,
//       },
//     },
//   },
// });
