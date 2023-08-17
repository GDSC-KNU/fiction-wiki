import {
  Author,
  CategoriesOnFictions,
  Category,
  Fiction,
  FictionStat,
  Keyword,
  KeywordsOnFictions,
  UserFictionStat,
} from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@components/pagination";
import { useRouter } from "next/router";
import React from "react";
import CountryFlag_China from "@public/svg/countryFlag_China.svg";
import CountryFlag_Korea from "@public/svg/countryFlag_Korea.svg";
import CountryFlag_Japan from "@public/svg/countryFlag_Japan.svg";
import CountryFlag_USA from "@public/svg/countryFlag_USA.svg";
import fictions from "pages/api/fictions";

interface UserFictionStatWithMore extends UserFictionStat {
  _count: {
    userRationOnFictions: number;
  };
}

interface FictionWithMore extends Fiction {
  keywords: [KeywordsOnFictionsWithMore];
  fictionStat: [FictionStat];
  userFictionStat: UserFictionStatWithMore;
  author: Author;
  categories: [CategoriesOnFictionsWithMore];
}

interface CategoriesOnFictionsWithMore extends CategoriesOnFictions {
  category: Category;
}

interface KeywordsOnFictionsWithMore extends KeywordsOnFictions {
  keyword: Keyword;
}

interface authorWithMore extends Author {
  fictions: Fiction;
}

export default function FictionList({
  data,
  type,
  pagination,
  checkedParams,
  authorsCount,
}: any) {
  const router = useRouter();

  return (
    <div className=" flex justify-center">
      {type === "fictions_list" ? (
        <div className="">
          <ul className=" grid grid-cols-1 py-2 md:grid-cols-2 xl:grid-cols-3 ">
            {data?.fictions?.map((fiction: FictionWithMore, i: number) => (
              <li
                key={fiction?.id || i}
                className=" m-2 flex border-[#BBBBBB] bg-white"
              >
                <Link
                  href={`/fictions/${fiction?.id}`}
                  passHref
                  className=" relative h-[166px] w-[108px] min-w-[108px]"
                >
                  <Image
                    className=" cursor-pointer"
                    src={
                      fiction?.image
                        ? `https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction?.image}/fiction`
                        : "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                    }
                    fill
                    sizes="108px, 165.99px"
                    alt={fiction?.title}
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  />
                </Link>
                <div className=" absolute z-10 ml-1">
                  {fiction?.nationality === "중국" ? (
                    <CountryFlag_China />
                  ) : fiction?.nationality === "한국" ? (
                    <CountryFlag_Korea />
                  ) : fiction?.nationality === "일본" ? (
                    <CountryFlag_Japan />
                  ) : fiction?.nationality === "미국" ? (
                    <CountryFlag_USA />
                  ) : null}
                </div>
                <div className=" flex-col px-2 pb-2">
                  <p className=" mr-[0.35rem] mt-[2.5px] flex text-xs text-gray-400">
                    <span className=" mr-2 hover:underline">
                      <Link href={`/search/type/${fiction?.type}/1`}>
                        {fiction?.type || "type?"}
                      </Link>
                    </span>
                    |
                    <span className=" ml-2">
                      {(fiction?.categories || Array.from({ length: 1 })).map(
                        (category, i) => (
                          <Link
                            key={i}
                            href={`/search/genre/${category?.category?.name}/1`}
                            className=" mr-[0.35rem] text-xs text-gray-400 hover:underline"
                          >
                            {category?.category?.name || "genre"}
                          </Link>
                        )
                      )}
                    </span>
                  </p>
                  <h3>
                    <Link
                      title={`${fiction?.title}`}
                      className=" cursor-pointer font-bold hover:underline "
                      href={`/fictions/${fiction?.id}`}
                    >
                      {fiction?.title || "Loading"}
                    </Link>
                  </h3>
                  <p className=" text-xs text-gray-400">
                    {"by "}
                    <Link
                      title={`${fiction?.author?.name}`}
                      className=" cursor-pointer hover:underline"
                      href={`/authors/name/${fiction?.author?.name}`}
                    >
                      {fiction?.author?.name || "작자 미상"}
                    </Link>
                  </p>
                  <p className=" mt-1 h-[24px] overflow-hidden">
                    {(
                      fiction?.keywords?.filter(
                        (keyword) => keyword?.keyword.isOfCons === false
                      ) || Array.from({ length: 3 })
                    ).map((keyword, i) => (
                      <Link
                        key={i}
                        href={`/search/keyword/${keyword?.keyword.name}/1`}
                        passHref
                        title={`${keyword?.keyword.name}`}
                        className=" mr-[0.35rem] mt-1 cursor-pointer whitespace-nowrap rounded-3xl border-[#BBBBBB] bg-gray-200  p-[0.2rem] text-center text-sm text-[#666676] peer-checked:bg-blue-600 peer-checked:text-white hover:border-gray-400 hover:bg-gray-200 hover:underline"
                      >
                        #{keyword?.keyword.name || "loading"}
                      </Link>
                    ))}
                  </p>
                  <p className=" mt-1 h-12 overflow-hidden text-xs ">
                    {fiction?.setup?.slice(6, 150) || "loading ".slice(0, 150)}
                    ...
                  </p>
                  <p className=" text-xs"></p>
                  <p className=" overflow-hidden text-xs "></p>
                  <p className=" mt-1 flex text-xs font-bold">
                    <strong className=" flex w-[4.2rem] text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                      </svg>
                      &nbsp;
                      {fiction?.userFictionStat?.total || 0}(
                      {fiction?.userFictionStat?._count?.userRationOnFictions ??
                        0}
                      )
                    </strong>
                    <strong className=" w-24">
                      {fiction?.volume || "???"}화 &nbsp;
                      {fiction?.currentState || "???화 완결"}
                    </strong>
                    <strong className=" w-20 whitespace-nowrap">
                      {fiction?.isTranslated}
                    </strong>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className=" ">
            {pagination === false ? null : (
              <Pagination
                activePage={+(router?.query?.page || 1)?.toString()}
                itemsCountPerPage={18}
                totalItemsCount={data?.fictionsCount || 0}
                totalPagesCount={Math.ceil((data?.fictionsCount || 1) / 18)}
                pageRangeDisplayed={5}
                pageGroup={
                  Math.ceil(+(router?.query?.page || 1)?.toString() / 5) || 1
                }
                checkedParams={checkedParams}
                // onChange={() => {}}
              />
            )}
          </div>
        </div>
      ) : type === "authors_list" ? (
        <div>
          <div className=" grid grid-cols-3 px-1 py-2  sm:grid-cols-4 lg:grid-cols-8 ">
            {data?.map((author: authorWithMore) => (
              <Link
                key={author.id}
                href={`/authors/name/${author.name}`}
                passHref
                className=" relative m-1 h-[150] min-w-[104px] cursor-pointer flex-col overflow-hidden  bg-white"
              >
                <Image
                  className=" "
                  src="/anoynymous_user.png"
                  width={142}
                  height={160}
                  alt={author.name}
                />
                <div className=" absolute bottom-[17.2rem] z-10 ml-1"></div>
                <div className=" flex-col px-2 pb-2">
                  <div className=" flex justify-between"></div>
                  <div className=" text-center text-sm">{author.name}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className=" ">
            {pagination === false ? null : (
              <Pagination
                activePage={+(router?.query?.page || 1)?.toString()}
                itemsCountPerPage={18}
                totalItemsCount={authorsCount || 0}
                totalPagesCount={Math.ceil((authorsCount || 1) / 18)}
                pageRangeDisplayed={5}
                pageGroup={
                  Math.ceil(+(router?.query?.page || 1)?.toString() / 5) || 1
                }
                checkedParams={checkedParams}
              />
            )}
          </div>
        </div>
      ) : (
        <div>
          <ul className=" grid grid-cols-1 py-2 md:grid-cols-2 xl:grid-cols-3"></ul>
        </div>
      )}
    </div>
  );
}
