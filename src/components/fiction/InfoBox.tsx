import Image from "next/image";
import Link from "next/link";
import { FictionWithMore } from "@/type/type";

import StarRating from "@/components/starRating";

import urlToString from "@helper/urlToString";
import formatDate from "@helper/formatDate";

export default function InfoBox({
  fiction,
}: {
  fiction: FictionWithMore | any;
}) {
  return (
    <div className=" mb-3 grid h-fit grid-cols-7 overflow-hidden rounded-md  bg-white object-cover ">
      <div className=" col-span-7 flex-col lg:absolute lg:col-span-2">
        <div className=" lg:hidden">
          <div className=" flex-col">
            <StarRating />
          </div>
        </div>
        <div className="  h-[190px] overflow-hidden lg:h-[213px]">
          <div className=" absolute h-[190px] w-[150px] overflow-hidden lg:relative lg:h-[253px] lg:w-[187px]">
            <Image
              src={`https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction?.image}/fiction`}
              fill
              className=" object-fill "
              alt={fiction?.title}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </div>
          <div className=" ml-40 lg:hidden">
            <ul className=" mb-2 inline-flex flex-wrap pt-2 text-xs">
              {fiction?.keywords
                ?.filter(
                  (item: any) =>
                    item?.keyword?.isOfHeroine === false &&
                    item?.keyword?.isOfMC === false &&
                    item?.keyword?.isOfCons === false
                )
                .map((item: any, index: any) => (
                  <li
                    key={index}
                    className={
                      item?.keyword?.isOfMC
                        ? " m-1 h-fit rounded-md border-[#BBBBBB] text-center ring-2 ring-red-500"
                        : item?.keyword?.isOfHeroine
                        ? " m-1 h-fit rounded-md border-[#BBBBBB] text-center ring-2 ring-blue-500"
                        : " m-1 h-fit cursor-pointer whitespace-nowrap rounded-3xl bg-gray-200 p-1 text-center text-[#666676]"
                    }
                  >
                    <Link
                      href={`/search/keyword/${item?.keyword?.name}/1`}
                      passHref
                    >
                      #{item?.keyword?.name}
                    </Link>
                  </li>
                ))}
            </ul>
            <div className=" text-xs">{`${fiction?.setup.slice(
              6,
              140
            )}...`}</div>
          </div>
        </div>
      </div>

      <div className=" col-span-7 pt-2 text-sm lg:col-span-7 lg:ml-[187.4157px] lg:px-3 lg:pt-0">
        <div className=" mb-1 mt-2 hidden  lg:block">
          <div className=" flex lg:pl-2">
            <StarRating />
          </div>
        </div>
        <div className=" overflow-hidden px-2">
          <div className=" col-span-10 grid grid-cols-2">
            <dl id="infoBox-left" className=" col-span-2 lg:col-span-1">
              <div className=" col-span-10 grid w-full grid-cols-10 py-[5px] ">
                <dt className=" col-span-4 font-sans font-bold">원제</dt>
                <dd className=" col-span-6">
                  {fiction?.originalTitle || fiction?.title}
                </dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">작가</dt>
                <dd className=" col-span-6 w-fit text-blue-600">
                  <Link
                    title={fiction?.author?.name}
                    className=" hover:cursor-pointer"
                    passHref
                    href={`/authors/name/${fiction?.author?.name}`}
                  >
                    {fiction?.author?.name}
                  </Link>
                </dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">국가</dt>
                <dd className=" col-span-6">{fiction?.nationality}</dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">장르</dt>
                <dd className=" col-span-6">
                  <span>
                    {fiction?.categories
                      .reduce(
                        (acc: any, cur: any) => [...acc, cur?.category?.name],
                        []
                      )
                      .map((item: any, index: number) => (
                        <Link
                          className=" col-span-6 mr-2 text-blue-600 hover:cursor-pointer"
                          key={index}
                          href={`/search/category/${item}/1`}
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
                  {`${formatDate(fiction?.startDate)} ~ ${
                    JSON.stringify(fiction?.endDate) ===
                    JSON.stringify(new Date(0))
                      ? ""
                      : formatDate(fiction?.endDate)
                  }`}
                </dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px] ">
                <dt className=" col-span-4 font-sans font-bold ">원본</dt>
                <dd className=" col-span-6 text-blue-600">
                  <a
                    className=" flex w-fit"
                    href={fiction?.original}
                    title={fiction?.original}
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
                    {urlToString(fiction?.original)}
                  </a>
                </dd>
              </div>
            </dl>
            <dl id="infoBox-right" className=" col-span-2 lg:col-span-1">
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px] lg:border-t-[0px]">
                <dt className=" col-span-4 font-sans font-bold">플랫폼</dt>
                <dd className=" col-span-6 ">
                  <span className=" flex" title={fiction?.platforms}>
                    {fiction?.platforms}
                  </span>
                </dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">상태</dt>
                <dd className=" col-span-6">
                  {fiction?.volume}&nbsp;
                  {fiction?.currentState || "??"}
                </dd>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">미디어믹스</dt>
                <dd className=" col-span-6">{fiction?.mediaMix || "X"}</dd>
              </div>
              {fiction?.isTranslated ? (
                <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                  <dt className=" col-span-4 font-sans font-bold">번역상태</dt>
                  <dd className=" col-span-6">
                    {fiction?.isTranslated === "번역"
                      ? "O"
                      : fiction?.isTranslated === "미번"
                      ? "X"
                      : ""}
                  </dd>
                </div>
              ) : null}
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <dt className=" col-span-4 font-sans font-bold">Related</dt>
                <dd className=" col-span-6">
                  {fiction?.relatedTitle ? fiction?.relatedTitle + " | " : ""}
                  {fiction?.author?.rawName}
                  {fiction?.author?.relatedName
                    ? ", " + fiction?.author?.relatedName
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
