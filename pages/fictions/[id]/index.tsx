import { createContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import useSWR from "swr";
import { remark } from "remark";
import html from "remark-html";

import UserRate from "@components/userRate";
import FictionRadarChart from "@components/fictionRadarChart";
import StarRating from "@components/starRating";
import StructuredData from "@components/structuredData";
import MbtiBarChart from "@components/mbtiBarChart";

import client from "@libs/server/client";
import Comments from "@components/comments";
import useUser from "@libs/client/useUser";
import urlToString from "@helper/urlToString";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type {
  Fiction,
  FictionStat,
  Keyword,
  Author,
  Category,
} from "@prisma/client";

interface FictionDetailResponse {
  fiction: FictionWithMore;
  similarFictions: Fiction[];
  mbtis: any;
  setup: any;
}

interface FictionWithMore extends Fiction {
  keywords: [
    {
      keyword: Keyword;
    }
  ];
  fictionStat: FictionStat;
  userFictionStat: {
    originality: number;
    writing: number;
    verisimilitude: number;
    value: number;
    synopsisComposition: number;
    character: number;
    total: number;
    _count: {
      userRationOnFictions: number;
    };
  };
  author: Author;
  categories: [
    {
      category: Category;
    }
  ];
  comments: Comment[];
}

export const FictionContext = createContext<FictionDetailResponse | null>(null);

const FictionDetail: NextPage<FictionDetailResponse> = ({
  fiction,
  similarFictions,
  mbtis,
  setup,
}) => {
  const { isAdmin } = useUser();
  const router = useRouter();

  const [fictionContext, setFictionContext] = useState({
    fiction,
    similarFictions,
    mbtis,
    setup,
  });

  const { data, mutate: boundMutate } = useSWR<FictionDetailResponse>(
    `/api/fictions/${router.query.id}`
  );

  useEffect(() => {
    if (data) setFictionContext(data);
  }, [data]);

  if (fiction) {
    fiction.startDate = new Date(fiction?.startDate || 0);
    fiction.endDate = new Date(fiction?.endDate || 0);
  }

  const synopsisRef = useRef<null | HTMLDivElement>(null);

  return (
    <FictionContext.Provider value={fictionContext}>
      <div className=" grid grid-cols-10 px-2">
        <StructuredData data={fiction} />
        <NextSeo
          title={`${fiction?.title}`}
          // !! SEO는 Setup이 아닌 fiction.sysnopsis에 의존 (2023.05.30)
          description={fiction?.synopsis}
          canonical={`https://fictiondbs.com/fictions/${fiction?.id}`}
          openGraph={{
            url: `https://fictiondbs.com/fictions/${fiction?.id}`,
          }}
        />
        {isAdmin ? (
          <div className=" col-span-10 mt-2 flex justify-start">
            <Link
              className=" mx-1 rounded-md border-[0.5px] border-[#BBBBBB] bg-white p-1 hover:cursor-pointer"
              passHref
              href={`/fictions/${fiction?.id}/edit`}
            >
              EDIT
            </Link>
            <Link
              className=" ml-1 rounded-md border-[0.5px] border-[#BBBBBB] bg-white p-1 hover:cursor-pointer"
              passHref
              href={`/fictions/${fiction?.id}/delete`}
            >
              DELETE
            </Link>
          </div>
        ) : null}
        <div className=" col-span-10 flex-col justify-between">
          <h1 className=" pt-2 text-3xl font-semibold">{fiction?.title}</h1>
          <div className=" mb-2 flex">
            <p className="  text-sm text-gray-500">{fiction?.originalTitle}</p>
            <p className="  ml-2 text-sm text-gray-500">
              {`(${fiction?.startDate?.getFullYear()})`}
            </p>
          </div>
        </div>
        <div id="main-container" className=" col-span-10 lg:col-span-7">
          <div className=" mb-3 grid h-fit grid-cols-7 overflow-hidden rounded-md  bg-white object-cover ">
            <div className=" col-span-7 flex sm:absolute sm:col-span-2">
              <div className=" ">
                <div className=" relative h-[178px] w-[120px] sm:h-[278px] sm:w-[187.4157px] ">
                  <Image
                    src={`https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction?.image}/fiction`}
                    fill
                    className=" object-contain"
                    alt={fiction?.title}
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  />
                </div>
              </div>
              <div className=" ml-2  sm:hidden">
                <div className=" flex-col px-2">
                  <div className="  mb-2 flex whitespace-nowrap">
                    <StarRating
                      data={fictionContext?.fiction.userFictionStat?.total || 0}
                    />

                    <p className=" ml-2 flex items-center text-sm font-bold text-gray-500">
                      {fictionContext.fiction.userFictionStat.total || 0}(
                      {fiction?.userFictionStat?._count?.userRationOnFictions ||
                        0}
                      )
                    </p>
                  </div>

                  <p className=" mt-1 h-[144px] overflow-x-hidden text-xs ">
                    {fiction?.setup.slice(6, 96) ||
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
                      {fiction?.setup ? `... 더보기` : ""}
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
                  {fiction?.userFictionStat?.total && (
                    <StarRating
                      data={
                        (fiction?.userFictionStat?.total ||
                          +fiction?.userFictionStat?.total) ??
                        0
                      }
                    />
                  )}
                  <p className=" ml-2 flex items-center text-sm font-bold text-gray-500">
                    {fiction?.userFictionStat?.total ||
                      +fiction?.userFictionStat?.total ||
                      0}
                    (
                    {fiction?.userFictionStat?._count?.userRationOnFictions ||
                      0}
                    )
                  </p>
                </div>
              </div>
              <div className=" hidden overflow-x-hidden border-b-[1px] pb-2 sm:block">
                <p className="  h-20 text-xs">
                  {fiction?.setup.slice(6, 206) || "줄거리 업데이트 예정"}
                  <button
                    className=" cursor-pointer text-blue-600"
                    onClick={() => {
                      synopsisRef?.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                  >
                    {fiction?.setup ? `... 더보기` : ""}
                  </button>
                </p>
              </div>
              <div className=" overflow-hidden text-sm">
                <div className=" col-span-10 grid grid-cols-2">
                  <dl id="infoBox-left" className=" col-span-2 sm:col-span-1">
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
                              (acc: any, cur: any) => [
                                ...acc,
                                cur?.category?.name,
                              ],
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
                      <dt className=" col-span-4 font-sans font-bold">
                        연재기간
                      </dt>
                      <dd className=" col-span-6 whitespace-nowrap">{`${fiction?.startDate.getFullYear()}. ${
                        fiction?.startDate.getMonth() + 1
                      }. ${fiction?.startDate.getDate()} ~ ${
                        JSON.stringify(fiction?.endDate) ===
                        JSON.stringify(new Date(0))
                          ? ""
                          : `${fiction?.endDate.getFullYear()}. ${
                              fiction?.endDate.getMonth() + 1
                            }. ${fiction?.endDate.getDate()}`
                      }`}</dd>
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
                  <dl id="infoBox-right" className=" col-span-2 sm:col-span-1">
                    <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px] sm:border-t-[0px]">
                      <dt className=" col-span-4 font-sans font-bold">
                        플랫폼
                      </dt>
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
                      <dt className=" col-span-4 font-sans font-bold">
                        미디어믹스
                      </dt>
                      <dd className=" col-span-6">
                        {fiction?.mediaMix || "X"}
                      </dd>
                    </div>
                    {fiction?.isTranslated ? (
                      <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                        <dt className=" col-span-4 font-sans font-bold">
                          번역상태
                        </dt>
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
                      <dt className=" col-span-4 font-sans font-bold">
                        Related
                      </dt>
                      <dd className=" col-span-6">
                        {fiction?.relatedTitle
                          ? fiction?.relatedTitle + " | "
                          : ""}
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

          <div className=" mb-3 grid grid-cols-5 ">
            <div className=" col-span-5 mb-3 mr-0 sm:col-span-3 sm:mb-0 sm:mr-3">
              <div className=" mb-3 h-full w-full rounded-md sm:mb-0">
                <h2 className=" border-b-[1px] pt-1 font-bold">메인 태그</h2>
                <ul className=" inline-flex flex-wrap pt-2">
                  {fiction?.keywords
                    ?.filter(
                      (item) =>
                        item?.keyword?.isOfHeroine === false &&
                        item?.keyword?.isOfMC === false &&
                        item?.keyword?.isOfCons === false
                    )
                    .map((item: any, index: any) => (
                      <li
                        key={index}
                        className={
                          item?.keyword?.isOfMC
                            ? " m-1 h-fit rounded-md border-[#BBBBBB] text-center text-sm ring-2 ring-red-500"
                            : item?.keyword?.isOfHeroine
                            ? " m-1 h-fit rounded-md border-[#BBBBBB] text-center text-sm ring-2 ring-blue-500"
                            : " m-1 h-fit cursor-pointer whitespace-nowrap rounded-3xl bg-gray-200 p-1 text-center text-sm text-[#666676]"
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
                <div className=" border-b-[1px] pt-1 font-bold">
                  주인공 태그
                </div>
                <ul className=" inline-flex flex-wrap pt-2">
                  {fiction?.keywords
                    .filter((item) => item?.keyword?.isOfMC === true)
                    .map((item: any, index: any) => (
                      <li
                        key={index}
                        className=" m-1 h-fit whitespace-nowrap rounded-3xl bg-gray-200 p-1 text-center text-sm text-[#666676]"
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
                <div className=" border-b-[1px] pt-1 font-bold">
                  히로인 태그
                </div>
                <ul className=" inline-flex flex-wrap pt-2">
                  {fiction?.keywords
                    .filter((item) => item?.keyword?.isOfHeroine === true)
                    .map((item: any, index: any) => (
                      <li
                        key={index}
                        className=" m-1 h-fit whitespace-nowrap rounded-3xl bg-gray-200 p-1 text-center text-sm text-[#666676]"
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
                <div className=" border-b-[1px] pt-1 font-bold">
                  호불호 태그
                </div>
                <ul className=" inline-flex flex-wrap pt-2">
                  {fiction?.keywords
                    .filter((item) => item?.keyword?.isOfCons === true)
                    .map((item: any, index: any) => (
                      <li
                        key={index}
                        className=" m-1 h-fit whitespace-nowrap rounded-3xl bg-red-200 p-1 text-center text-sm text-[#666676]"
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
              </div>
            </div>
            <div className=" col-span-5 sm:col-span-2">
              <div className=" h-full w-full rounded-md bg-[#F4F4F4]">
                <FictionRadarChart props={data?.fiction.fictionStat} />
                <UserRate />
              </div>
            </div>
          </div>

          <div className=" row-span-3 flex flex-col">
            <h2 className=" border-b-[1px] py-2 text-xl font-bold">코멘트</h2>
            <Comments />
          </div>

          <div className=" mt-3 rounded-md bg-white sm:pt-3">
            <div className=" mb-3">
              <div ref={synopsisRef}></div>
            </div>
            <div
              className=" prose prose-slate max-w-full prose-h2:w-full prose-h2:border-b-[1px] prose-h2:pb-2 prose-img:float-right prose-img:my-0"
              dangerouslySetInnerHTML={{ __html: setup }}
            ></div>
          </div>
          <div className=" mt-12">
            <h3 className=" mb-2 text-2xl font-bold">비슷한 소설</h3>
            <div className=" lg:grid-cols-4">
              {similarFictions?.slice(0, 4).map((fiction) => (
                <div className=" mb-1 border-b-[1px] pb-1" key={fiction?.id}>
                  <Link
                    href={`/fictions/${fiction.id}`}
                    className=" cursor-pointer text-gray-700"
                  >
                    {fiction?.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="side-container"
          className=" col-span-10 mt-3 lg:col-span-3 lg:mt-0 lg:pl-3"
        >
          <h3 className=" mt-4 py-2 text-xl font-bold">MBTI별 선호도</h3>
          <div className=" flex items-center rounded-md bg-[#F4F4F4] sm:mt-0 ">
            <MbtiBarChart mbtis={fictionContext.mbtis} />
          </div>
        </div>
      </div>
    </FictionContext.Provider>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const fictionId = ctx?.params?.id;
  if (!fictionId) {
    return {
      props: {},
    };
  }

  const fiction = await client.fiction.findUnique({
    where: {
      id: +fictionId ?? 1,
    },
    include: {
      fictionStat: true,
      userFictionStat: {
        include: {
          userRationOnFictions: true,
          _count: {
            select: {
              userRationOnFictions: true,
            },
          },
        },
      },
      keywords: {
        include: {
          keyword: {
            select: {
              name: true,
              isOfHeroine: true,
              isOfMC: true,
              isOfCons: true,
            },
          },
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      author: true,
      comments: {
        include: {
          createdBy: {
            select: {
              nickname: true,
            },
          },
        },
      },
    },
  });

  const mdHtml = await remark()
    .use(html)
    .process(fiction?.setup || "");

  const arr: any[] = [];
  fiction?.keywords.map((item) => arr.push(item?.keyword?.name));
  const keywordSame = arr.map((word) => ({
    keywords: {
      some: {
        keyword: {
          name: {
            equals: word,
          },
        },
      },
    },
  }));

  const arr2: any[] = [];
  const similarFictions = await client.fiction.findMany({
    where: {
      OR: keywordSame,
      AND: {
        id: {
          not: fiction?.id,
        },
      },
    },
    select: {
      id: true,
      title: true,
      // setup: true,
    },
  });

  similarFictions.map((item) => arr2.push([item.id, item.title]));

  const isLiked = false;

  const groupedByMBTI = await client.$queryRaw`
  SELECT User.mbti,
  CAST(SUM(UserRationOnFiction.originality
  + UserRationOnFiction.synopsisComposition +
  UserRationOnFiction.value +
  UserRationOnFiction.writing +
  UserRationOnFiction.character +
  UserRationOnFiction.verisimilitude)
  / (COUNT(*)*6)
  AS CHAR(32)) AS avg,
  CAST(COUNT(*) AS CHAR(32)) AS cnt
  FROM UserRationOnFiction
  JOIN User ON UserRationOnFiction.userId = User.id
  JOIN UserFictionStat ON UserRationOnFiction.userFictionStatId = UserFictionStat.id
  WHERE UserFictionStat.fictionId = ${fictionId}
  GROUP by User.mbti
  `;

  const mbtis = groupedByMBTI;

  return {
    props: {
      fiction: JSON.parse(JSON.stringify(fiction)),
      similarFictions: JSON.parse(JSON.stringify(similarFictions)),
      isLiked,
      mbtis: JSON.parse(JSON.stringify(mbtis)),
      setup: mdHtml.toString(),
    },
    revalidate: 60 * 60 * 24 * 30,
  };
};

export default FictionDetail;
