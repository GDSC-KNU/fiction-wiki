import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import type {
  Fiction,
  FictionStat,
  Keyword,
  UserRationOnFiction,
  Author,
  Category,
} from "@prisma/client";
import UserRate from "@components/userRate";
import client from "@libs/server/client";
import Image from "next/image";
import Link from "next/link";
import FictionRadarChart from "src/components/fictionRadarChart";
import StarRating from "src/components/starRating";
import { NextSeo } from "next-seo";
import StructuredData from "src/components/structuredData";
import useSWR from "swr";
import MbtiBarChart from "@components/mbtiBarChart";
import ReviewFeed from "@components/fiction/reviewFeed";
import { useEffect, useRef, useState } from "react";
import Comments from "@components/comment";
import useUser from "@libs/client/useUser";

interface FictionDetailResponse {
  ok: boolean;
  fiction: FictionWithMore;
  similarFictions: Fiction[];
  isLiked: boolean;
  reviews: any;
  mbtis: any;
}

// interface KeywordsOnFictionsWithMore extends KeywordsOnFictions {
//   keyword: Keyword;
// }

interface FictionWithMore extends Fiction {
  keywords: [
    {
      keyword: Keyword;
    }
  ];
  fictionStat: FictionStat;
  userFictionStat: {
    userRationOnFictions: [UserRationOnFiction];
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
}

const FictionDetail: NextPage<FictionDetailResponse> = ({
  fiction,
  similarFictions,
  reviews,
  mbtis,
}) => {
  // console.log(mbtis);
  const { user } = useUser();
  const router = useRouter();
  const [deferredMbtis, setDeferredMbtis] = useState(mbtis);

  // // FAV을 CSR로 받기, 기존 Data 정리하여 fav만 get하여 가져옴
  const { data, mutate: boundMutate } = useSWR<FictionDetailResponse>(
    router.query.id ? `/api/fictions/${router.query.id}` : null
  );
  const mbtisResponse = data ? data?.mbtis : [];
  // console.log(data?.mbtis);
  // const { data: nextAuthSession } = useSession();

  // const { data, mutate: boundMutate } = useSWR<FictionDetailResponse>(
  //   router.query.id
  //     ? typeof window === "undefined"
  //       ? null
  //       : `/api/fictions/${router.query.id}/fav`
  //     : null
  // );

  // const [toggleFav] = useMutation(`/api/fictions/${router.query.id}/fav`);

  /// swr로 data fetching이후 데이터 synchronize
  useEffect(() => {
    if (data) setDeferredMbtis(mbtisResponse);
  }, [data]);

  if (fiction) {
    fiction.startDate = new Date(fiction?.startDate || 0);
    fiction.endDate = new Date(fiction?.endDate || 0);
  }

  const urlToString = (string: string) => {
    if (string.includes("munpia")) string = "문피아";
    else if (string.includes("qidian")) string = "치디엔";
    else if (string.includes("series.naver")) string = "시리즈";
    else if (string.includes("kakao")) string = "카카오";
    else if (string.includes("novelpia")) string = "노벨피아";
    else if (string.includes("joara")) string = "조아라";
    else if (string.includes("tapas")) string = "타파스";
    return string;
  };
  const synopsisRef = useRef<null | HTMLDivElement>(null);

  return (
    <div className=" grid grid-cols-10 px-2">
      <StructuredData data={fiction} />
      <NextSeo
        title={`${fiction?.title}`}
        description={fiction?.synopsis}
        canonical={`https://fictiondbs.com/fictions/${fiction?.id}`}
        openGraph={{
          url: `https://fictiondbs.com/fictions/${fiction?.id}`,
        }}
      />
      {user ? (
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
        <h1 className=" pt-2 text-2xl font-semibold">{fiction?.title}</h1>
        <div className=" mb-2 flex">
          <p className="  text-sm text-gray-500">{fiction?.originalTitle}</p>
          <p className="  ml-2 text-sm text-gray-500">
            {`(${fiction?.startDate?.getFullYear()})`}
          </p>
          {/* <p className=" mb-2 ml-3 text-sm text-gray-500">
            {fiction?.volume}
          </p> */}
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
                    data={
                      (data?.fiction?.userFictionStat?.total ||
                        +fiction?.userFictionStat?.total) ??
                      0
                    }
                  />

                  <p className=" ml-2 flex items-center text-sm font-bold text-gray-500">
                    {(data?.fiction?.userFictionStat?.total ||
                      +fiction?.userFictionStat?.total) ??
                      0}
                    (
                    {fiction?.userFictionStat?._count?.userRationOnFictions ||
                      0}
                    )
                  </p>
                </div>

                <p className=" mt-1 h-[144px] overflow-x-hidden text-xs ">
                  {fiction?.synopsis.slice(0, 90) ||
                    "로딩중입니다".slice(0, 150)}
                  <button
                    onClick={() => {
                      synopsisRef?.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    className=" cursor-pointer text-blue-800"
                  >
                    ... 더보기
                  </button>
                </p>
                <p className=" text-xs"></p>
                <p className=" overflow-hidden text-xs "></p>
              </div>
            </div>
          </div>

          <div className=" col-span-7 pt-2 sm:col-span-7 sm:ml-[187.4157px] sm:px-3 sm:pt-0">
            {/* <div className=" flex justify-between">
              <h1 className=" mb-2 pt-2 text-2xl font-semibold">
                {fiction?.title}
              </h1>
            </div> */}
            <div className=" mb-1 mt-2 hidden  sm:block">
              <div className=" flex">
                {fiction?.userFictionStat?.total && (
                  <StarRating
                    data={
                      (data?.fiction?.userFictionStat?.total ||
                        +fiction?.userFictionStat?.total) ??
                      0
                    }
                  />
                )}
                <p className=" ml-2 flex items-center text-sm font-bold text-gray-500">
                  {data?.fiction?.userFictionStat?.total ||
                    +fiction?.userFictionStat?.total ||
                    0}
                  ({fiction?.userFictionStat?._count?.userRationOnFictions || 0}
                  )
                </p>
              </div>
            </div>
            <div className=" hidden overflow-x-hidden border-b-[1px] pb-2 sm:block">
              <p className="  h-20 text-xs">
                {fiction?.synopsis.slice(0, 200) || "로딩중입니다"}
                <button
                  className=" cursor-pointer text-blue-600"
                  onClick={() => {
                    synopsisRef?.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  ... 더보기
                </button>
              </p>
            </div>
            <div className=" overflow-hidden text-xs">
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
                    <dt className=" col-span-4 font-sans font-bold">플랫폼</dt>
                    <dd className=" col-span-6 ">
                      <span
                        className=" flex"
                        // href={fiction?.platforms}
                        title={fiction?.platforms}
                      >
                        {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-link"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                      <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                    </svg> */}
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
                    <dd className=" col-span-6">{fiction?.mediaMix || "X"}</dd>
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
                    <dt className=" col-span-4 font-sans font-bold">Related</dt>
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
        {/* <div className=" col-span-10 grid h-fit sm:grid-cols-10"></div> */}

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
              <h2 className=" border-b-[1px] pt-1 font-bold">주인공 태그</h2>
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
              <h2 className=" border-b-[1px] pt-1 font-bold">히로인 태그</h2>
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
              <h2 className=" border-b-[1px] pt-1 font-bold">호불호 태그</h2>
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
              <FictionRadarChart props={fiction?.fictionStat} />
              <UserRate />
            </div>
          </div>
        </div>

        <div className=" row-span-3 flex flex-col">
          <h2 className=" border-b-[1px] py-2 text-xl font-bold">코멘트</h2>
          <Comments />
        </div>
        <div className="  rounded-md ">
          <ReviewFeed data={reviews}></ReviewFeed>
        </div>

        <div className=" mt-3 rounded-md bg-white sm:pt-3">
          <div className=" ">
            <h2 className=" border-b-[1px] py-2 text-xl font-bold">줄거리</h2>
            <p ref={synopsisRef} className=" mt-2 whitespace-pre-wrap">
              {fiction?.synopsis}
            </p>
          </div>
          <div className=" mt-3">
            <h2 className=" mt-4 border-b-[1px] py-2 text-xl font-bold">
              개요
            </h2>
            <p className=" mt-2 whitespace-pre-wrap">{fiction?.introduction}</p>
          </div>
          <div className=" mt-3">
            <h2 className=" mt-4 border-b-[1px] py-2 text-xl font-bold">
              등장인물
            </h2>
            <p className=" mt-2 whitespace-pre-wrap"> {fiction?.characters}</p>
          </div>
        </div>
        <div className=" mt-4 rounded-md border-[0.5px] border-[#BBBBBB] bg-white p-3">
          <h3 className=" text-xl font-bold">비슷한 소설</h3>
          <div className=" mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {similarFictions?.slice(0, 4).map((fiction) => (
              <div key={fiction?.id}>
                <div className="mb-4 h-56 w-full bg-slate-300"></div>
                <h3 className=" -mb-1 text-gray-700">{fiction?.title}</h3>
                {/* <span>description</span> */}
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
          <MbtiBarChart mbtis={deferredMbtis} />
        </div>
      </div>
    </div>
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
    },
  });

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
    },
  });

  similarFictions.map((item) => arr2.push([item.id, item.title]));

  const isLiked = false;

  const { google } = require("googleapis");

  /// scrape Google SearchResult for review data.
  const customsearch = google.customsearch("v1");
  const API_KEY = process.env.GOOGLE_API_KEY;
  const cx = process.env.GOOGLE_SEARCH_ENGINE_ID;
  const searchQuery = `${fiction?.title} 리뷰`;

  const search = async (query: string) => {
    const res = await customsearch.cse.list({
      q: query,
      cx: cx,
      key: API_KEY,
      num: 5, // number of search results to return
    });
    return res.data.items;
  };

  const reviewResponse = await search(searchQuery ?? "");

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
      reviews: reviewResponse,
      mbtis: JSON.parse(JSON.stringify(mbtis)),
    },
    // revalidate: 60 * 60 * 24 * 30,
  };
};

export default FictionDetail;
