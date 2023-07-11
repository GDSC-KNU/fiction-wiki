import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { FictionContext } from "@src/context/fictionContext";

import StarRating from "@components/starRating";

import urlToString from "@helper/urlToString";
import formatDate from "@helper/formatDate";

export default function InfoBox(synopsisRef: any) {
  const fictionContext = useContext(FictionContext);

  return (
    <div className=" mb-3 grid h-fit grid-cols-7 overflow-hidden rounded-md  bg-white object-cover ">
      <div className=" col-span-7 flex sm:absolute sm:col-span-2">
        <div className=" ">
          <div className=" relative h-[178px] w-[120px] sm:h-[278px] sm:w-[187.4157px] ">
            <Image
              src={`https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fictionContext?.fiction?.image}/fiction`}
              fill
              className=" object-contain"
              alt={fictionContext?.fiction?.title}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
        <div className=" ml-2  sm:hidden">
          <div className=" flex-col px-2">
            <StarRating />

            <p className=" mt-1 h-[144px] overflow-x-hidden text-xs ">
              {fictionContext?.fiction?.setup.slice(6, 96) ||
                "줄거리 업데이트 예정".slice(0, 150)}
              <button
                onClick={() => {
                  synopsisRef?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className=" cursor-pointer text-blue-800"
              >
                {fictionContext?.fiction?.setup ? `... 더보기` : ""}
              </button>
            </p>
            <p className=" text-xs"></p>
            <p className=" overflow-hidden text-xs "></p>
          </div>
        </div>
      </div>

      <div className=" col-span-7 pt-2 sm:col-span-7 sm:ml-[187.4157px] sm:px-3 sm:pt-0">
        <div className=" mb-1 mt-2 hidden  sm:block">
          <div className=" flex">
            <StarRating />
          </div>
        </div>
        <div className=" hidden overflow-x-hidden border-b-[1px] pb-2 sm:block">
          <p className="  h-20 text-xs">
            {fictionContext?.fiction?.setup.slice(6, 206) ||
              "줄거리 업데이트 예정"}
            <button
              className=" cursor-pointer text-blue-600"
              onClick={() => {
                synopsisRef?.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            >
              {fictionContext?.fiction?.setup ? `... 더보기` : ""}
            </button>
          </p>
        </div>
        <div className=" overflow-hidden text-sm">
          <div className=" col-span-10 grid grid-cols-2">
            <dl id="infoBox-left" className=" col-span-2 sm:col-span-1">
              <div className=" col-span-10 grid w-full grid-cols-10 py-[5px] ">
                <dt className=" col-span-4 font-sans font-bold">원제</dt>
                <dd className=" col-span-6">
                  {fictionContext?.fiction?.originalTitle ||
                    fictionContext?.fiction?.title}
                </dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">작가</dt>
                <dd className=" col-span-6 w-fit text-blue-600">
                  <Link
                    title={fictionContext?.fiction?.author?.name}
                    className=" hover:cursor-pointer"
                    passHref
                    href={`/authors/name/${fictionContext?.fiction?.author?.name}`}
                  >
                    {fictionContext?.fiction?.author?.name}
                  </Link>
                </dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">국가</dt>
                <dd className=" col-span-6">
                  {fictionContext?.fiction?.nationality}
                </dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">장르</dt>
                <dd className=" col-span-6">
                  <span>
                    {fictionContext?.fiction?.categories
                      .reduce(
                        (acc: any, cur: any) => [...acc, cur?.category?.name],
                        []
                      )
                      .map((item, index) => (
                        <Link
                          className=" col-span-6 mr-2 text-blue-600 hover:cursor-pointer"
                          key={index}
                          href={`/search/genre/${item}/1`}
                        >
                          {item}
                        </Link>
                      ))}
                  </span>
                </dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">연재기간</dt>
                <dd className="col-span-6 whitespace-nowrap">
                  {`${formatDate(fictionContext?.fiction?.startDate)} ~ ${
                    JSON.stringify(fictionContext.fiction?.endDate) ===
                    JSON.stringify(new Date(0))
                      ? ""
                      : formatDate(fictionContext?.fiction?.endDate)
                  }`}
                </dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px] ">
                <dt className=" col-span-4 font-sans font-bold ">원본</dt>
                <dd className=" col-span-6 text-blue-600">
                  <a
                    className=" flex w-fit"
                    href={fictionContext?.fiction?.original}
                    title={fictionContext?.fiction?.original}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                      <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                    </svg>
                    {urlToString(fictionContext?.fiction?.original)}
                  </a>
                </dd>
              </div>
            </dl>
            <dl id="infoBox-right" className=" col-span-2 sm:col-span-1">
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px] sm:border-t-[0px]">
                <dt className=" col-span-4 font-sans font-bold">플랫폼</dt>
                <dd className=" col-span-6 ">
                  <span
                    className=" flex"
                    title={fictionContext?.fiction?.platforms}
                  >
                    {fictionContext?.fiction?.platforms}
                  </span>
                </dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">상태</dt>
                <dd className=" col-span-6">
                  {fictionContext?.fiction?.volume}&nbsp;
                  {fictionContext?.fiction?.currentState || "??"}
                </dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">미디어믹스</dt>
                <dd className=" col-span-6">
                  {fictionContext?.fiction?.mediaMix || "X"}
                </dd>
              </div>
              {fictionContext?.fiction?.isTranslated ? (
                <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                  <dt className=" col-span-4 font-sans font-bold">번역상태</dt>
                  <dd className=" col-span-6">
                    {fictionContext?.fiction?.isTranslated === "번역"
                      ? "O"
                      : fictionContext?.fiction?.isTranslated === "미번"
                      ? "X"
                      : ""}
                  </dd>
                </div>
              ) : null}
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">Related</dt>
                <dd className=" col-span-6">
                  {fictionContext?.fiction?.relatedTitle
                    ? fictionContext?.fiction?.relatedTitle + " | "
                    : ""}
                  {fictionContext?.fiction?.author?.rawName}
                  {fictionContext?.fiction?.author?.relatedName
                    ? ", " + fictionContext?.fiction?.author?.relatedName
                    : ""}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className=" mb-2"></div>
      </div>
    </div>
  );
}