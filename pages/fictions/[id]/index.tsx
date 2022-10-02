import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import FictionRadarChart from "@components/FictionRadarChart";
import useSWR from "swr";
import { useRouter } from "next/router";
import {
  Fiction,
  FictionStat,
  Keyword,
  UserRationOnFiction,
  KeywordsOnFictions,
  Author,
  Comment,
  Category,
} from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import UserStat from "@components/UserStat";
import client from "@libs/server/client";
import Image from "next/image";
import useUser from "@libs/client/useUser";
import Link from "next/link";
import Pagination from "react-js-pagination";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface FictionDetailResponse {
  ok: boolean;
  fiction: FictionWithMore;
  similarFictions: Fiction[];
  isLiked: boolean;
}

interface KeywordsOnFictionsWithMore extends KeywordsOnFictions {
  keyword: Keyword;
}

interface FictionWithMore extends Fiction {
  keywords: [KeywordsOnFictionsWithMore];
  fictionStat: [FictionStat];
  userFictionStat: { userRationOnFictions: [UserRationOnFiction] };
  author: Author;
  categories: [Category];
}

// interface CommentWithMore extends Comment {
//   ok: boolean;
// }

interface CommentResponse {
  comments: Comment[];
  commentsCount: number;
  ok: boolean;
}

const FictionDetail: NextPage<FictionDetailResponse> = ({
  fiction,
  similarFictions,
}) => {
  const router = useRouter();

  // // FAV을 CSR로 받기, 기존 Data 정리하여 fav만 get하여 가져옴
  // const { data, mutate: boundMutate } = useSWR<FictionDetailResponse>(
  //   router.query.id ? `/api/fictions/${router.query.id}` : null
  // );
  const [commentIndex, setCommentIndex] = useState(1);
  const { user, isLoading } = useUser();

  const { data, mutate: boundMutate } = useSWR<FictionDetailResponse>(
    router.query.id ? `/api/fictions/${router.query.id}/fav` : null
  );

  const { data: commentsResponse } = useSWR<CommentResponse>(
    router.query.id
      ? `/api/fictions/${router.query.id}/comment?page=${commentIndex}`
      : null
  );

  const [toggleFav] = useMutation(`/api/fictions/${router.query.id}/fav`);
  const onFavClick = () => {
    toggleFav({}, "GET");
    if (!data) return;

    boundMutate({ ...data, isLiked: !data.isLiked }, false);
  };

  if (router.isFallback) {
    return (
      <div title="Loaidng for youuuuuuu">
        <span>I love you</span>
      </div>
    );
  }

  const handlePageChange = (PI: number) => {
    setCommentIndex(PI);
  };

  fiction.startDate = new Date(fiction?.startDate);
  fiction.endDate = new Date(fiction?.endDate);
  // console.log(
  //   fiction?.categories.reduce((acc, cur) => [...acc, cur?.category?.name], [])
  // );
  // console.log(fiction?.categories);

  return (
    <div className=" max-w-[1100px]">
      {user ? (
        <div className=" flex justify-end mx-5 mt-2">
          <Link href={`/fictions/${fiction.id}/edit`}>
            <div className=" hover:cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md p-1 mx-1">
              EDIT
            </div>
          </Link>
          <Link href={`/fictions/${fiction.id}/delete`}>
            <div className=" hover:cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md p-1 ml-1">
              DELETE
            </div>
          </Link>
        </div>
      ) : null}

      <div className=" grid grid-cols-1 sm:grid-cols-10 h-fit">
        <div className="  sm:max-w-[380px] object-cover h-fit bg-white col-span-3 mt-7 border-[0.5px] border-[#BBBBBB] rounded-md ">
          <div className="  w-full h-[467px] relative">
            <Image
              src={`https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction.image}/fiction`}
              layout="fill"
              objectFit="contain"
              alt={fiction.title}
            />
          </div>
          <div className=" px-4">
            <div className=" flex justify-between">
              <h1 className=" font-semibold text-2xl mb-2 pt-2 ml-">
                {fiction?.title}
              </h1>
              <button
                onClick={onFavClick}
                className={cls(
                  "px-3 py-2 rounded-md flex items-center hover:bg-gray-100 justify-center",
                  data?.isLiked
                    ? "text-red-400 hover:text-red-500"
                    : "text-gray-400  hover:text-gray-500"
                )}
              >
                {data?.isLiked ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className=" grid grid-cols-10 text-xs overflow-hidden">
              <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] ">
                <div className=" col-span-4 font-bold font-sans">원제</div>
                <div className=" col-span-6">{fiction?.title}</div>
              </div>
              <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]">
                <div className=" col-span-4 font-bold font-sans">작가</div>
                <Link passHref href={`/authors/${fiction?.author?.name}`}>
                  <a
                    title={`${fiction?.author?.name}`}
                    className=" col-span-6 hover:cursor-pointer text-blue-500"
                  >
                    {fiction?.author?.name}
                  </a>
                </Link>
              </div>
              <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]">
                <div className=" col-span-4 font-bold font-sans">국가</div>
                <div className=" col-span-6">{fiction?.nationality}</div>
              </div>
              <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]">
                <div className=" col-span-4 font-bold font-sans">장르</div>
                <div className=" col-span-6">
                  <span>
                    {fiction?.categories
                      .reduce(
                        (acc: any, cur: any) => [...acc, cur?.category?.name],
                        []
                      )
                      .join(", ")}
                  </span>
                </div>
              </div>
              <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]">
                <div className=" col-span-4 font-bold font-sans">연재기간</div>
                <div className=" col-span-6">{`${fiction.startDate.getFullYear()}. ${
                  fiction.startDate.getMonth() + 1
                }. ${fiction.startDate.getDate()} ~ ${fiction.endDate.getFullYear()}. ${
                  fiction.endDate.getMonth() + 1
                }. ${fiction.endDate.getDate()}`}</div>
              </div>
              <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px] ">
                <div className=" col-span-4 font-bold font-sans ">원본</div>
                <div className=" col-span-6 text-blue-500">
                  <a
                    className=" flex"
                    href={fiction?.original}
                    title={fiction?.original}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-link"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                      <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                    </svg>
                    바로가기
                  </a>
                </div>
              </div>
              <div className=" w-full col-span-10 sm:col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]">
                <div className=" col-span-4 font-bold font-sans">플랫폼</div>
                <div className=" col-span-6 text-blue-500">
                  <a
                    className=" flex"
                    href={fiction?.platforms}
                    title={fiction?.platforms}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-link"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                      <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                    </svg>
                    바로가기
                  </a>
                </div>
              </div>
              <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]">
                <div className=" col-span-4 font-bold font-sans">상태</div>
                <div className=" col-span-6">
                  {fiction?.volume}&nbsp;
                  {fiction?.currentState || "??"}
                </div>
              </div>
              <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]">
                <div className=" col-span-4 font-bold font-sans">
                  미디어믹스
                </div>
                <div className=" col-span-6">{fiction?.mediaMix || "X"}</div>
              </div>
              {fiction.isTranslated ? (
                <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]">
                  <div className=" col-span-4 font-bold font-sans">
                    번역상태
                  </div>
                  <div className=" col-span-6">
                    {fiction.isTranslated ? "O" : ""}
                  </div>
                </div>
              ) : null}
              <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]">
                <div className=" col-span-4 font-bold font-sans">Related</div>
                <div className=" col-span-6">
                  {fiction?.relatedTitle} &nbsp;
                  {fiction?.relatedAuthor}
                </div>
              </div>
            </div>
            <div className=" mb-2"></div>
            <div className=" mb-2"></div>
            <div className=" mb-2"></div>
            <div className=" mb-2"></div>
            <div className=" mb-2"></div>
            <div className=" mb-2"></div>
            <div className=" mb-2"></div>
          </div>
        </div>
        <div className=" col-span-7 mt-3 sm:mt-7  sm:grid lg:grid-rows-5">
          <div className=" grid grid-cols-10 row-span-3">
            <div className=" col-span-10 lg:col-span-5 sm:pl-5 lg:px-5 h-full pb-3">
              <div className=" mb-5 pb-3 px- w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md h-full">
                <h2 className=" pt-1 border-b-[1px] mx-3 text-md">메인 태그</h2>
                <ul className=" pt-2 px-3 inline-flex flex-wrap">
                  {fiction?.keywords
                    ?.filter(
                      (item) =>
                        item.keyword.isOfHeroine === false &&
                        item.keyword.isOfMC === false &&
                        item.keyword.isOfCons === false
                    )
                    .map((item: any, index: any) => (
                      <li
                        key={index}
                        className={
                          item.keyword.isOfMC
                            ? " text-sm text-center ring-2 ring-red-500 mx-1 my-1 rounded-md h-fit border-[#BBBBBB]"
                            : item.keyword.isOfHeroine
                            ? " text-sm text-center ring-2 ring-blue-500 mx-1 my-1 rounded-md h-fit border-[#BBBBBB]"
                            : " text-sm text-center  mx-1 my-1 rounded-3xl h-fit bg-gray-200 text-[#666676] p-1 whitespace-nowrap cursor-pointer"
                        }
                      >
                        <Link
                          href={`/search/keyword/${item.keyword.name}`}
                          passHref
                        >
                          <a>#{item?.keyword?.name}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
                <h2 className=" pt-1 border-b-[1px] mx-3 text-md">
                  주인공 태그
                </h2>
                <ul className=" pt-2 px-3 inline-flex flex-wrap">
                  {fiction.keywords
                    .filter((item) => item.keyword.isOfMC === true)
                    .map((item: any, index: any) => (
                      <li
                        key={index}
                        className=" text-sm text-center  mx-1 my-1 rounded-3xl h-fit bg-gray-200 text-[#666676] p-1 whitespace-nowrap"
                      >
                        <Link
                          href={`/search/keyword/${item.keyword.name}`}
                          passHref
                        >
                          <a>#{item?.keyword?.name}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
                <h2 className=" pt-1 border-b-[1px] mx-3 text-md">
                  히로인 태그
                </h2>
                <ul className=" pt-2 px-3 inline-flex flex-wrap">
                  {fiction.keywords
                    .filter((item) => item.keyword.isOfHeroine === true)
                    .map((item: any, index: any) => (
                      <li
                        key={index}
                        className=" text-sm text-center  mx-1 my-1 rounded-3xl h-fit bg-gray-200 text-[#666676] p-1 whitespace-nowrap"
                      >
                        <Link
                          href={`/search/keyword/${item.keyword.name}`}
                          passHref
                        >
                          <a>#{item?.keyword?.name}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
                <h2 className=" pt-1 border-b-[1px] mx-3 text-md">
                  호불호 키워드
                </h2>
                <ul className=" pt-2 px-3 inline-flex flex-wrap">
                  {fiction.keywords
                    .filter((item) => item.keyword.isOfCons === true)
                    .map((item: any, index: any) => (
                      <li
                        key={index}
                        className=" text-sm text-center  mx-1 my-1 rounded-3xl h-fit bg-red-200 text-[#666676] p-1 whitespace-nowrap"
                      >
                        <Link
                          href={`/search/keyword/${item.keyword.name}`}
                          passHref
                        >
                          <a>#{item?.keyword?.name}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className=" col-span-10 sm:pl-5 lg:px-0 lg:col-span-5 pb-3">
              <div className=" bg-white mb-5 w-full border-[0.5px] border-[#BBBBBB] rounded-md col-span-6 h-full">
                <h2 className=" font-bold pt-1 px-2"></h2>

                <FictionRadarChart props={fiction?.fictionStat} />

                <div className=" w-full px-3 h-fit mx-auto my-2">
                  <details>
                    <summary
                      style={{ listStyle: "none" }}
                      className=" text-center font-bold cursor-pointer my-2 border-[0.5px] border-[#BBBBBB] rounded-md"
                    >
                      평가하기
                    </summary>
                    <UserStat />
                  </details>
                </div>
              </div>
            </div>
          </div>
          <div className=" row-span-3 mt-2">
            <div className=" sm:pl-5 ">
              <div className=" w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md h-fit">
                <h2 className=" font-bold pt-1 px-2 "></h2>
                <ul className=" ">
                  {commentsResponse?.comments?.map(
                    (comment: Comment, index: number) => (
                      <ul
                        key={index}
                        className=" flex place-content-between mx-2 border-b-2 pb-1 last:border-b-0 relative"
                      >
                        <li className=" mt-2 text-sm overflow-hidden mr-16">
                          {comment.comment}
                        </li>
                        <li className=" mt-2 text-sm absolute right-24">
                          {`${comment.createdById.slice(0, 5)}...`}
                        </li>
                        <li className=" mt-2 ml-5 text-sm min-w-[78px]">
                          👍 👎 (+3)
                        </li>
                      </ul>
                    )
                  )}
                </ul>
                <div className=" mb-2 mt-7">
                  <Pagination
                    activePage={commentIndex}
                    itemsCountPerPage={7}
                    totalItemsCount={commentsResponse?.commentsCount || 1}
                    pageRangeDisplayed={5}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={handlePageChange}
                    innerClass=" flex justify-center mt-[15px]"
                    itemClass=" hover:text-blue-400 flex border-[1px] divide-solid border-[#e2e2e2] inline-block w-[30px] h-[30px] justify-center align-center"
                    linkClass=" w-full flex justify-center mt-[0.8px]"
                    activeClass=" text-blue-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-3 sm:mt-7  px-3 py-3 ">
        <div className=" ">
          <h2 className=" font-bold text-xl border-b-[1px] py-2">줄거리</h2>
          <p className=" whitespace-pre-wrap mt-2">{fiction?.synopsis}</p>
        </div>
        <div className=" mt-3">
          <h2 className=" font-bold text-xl mt-4 border-b-[1px] py-2">
            등장인물
          </h2>
          {fiction?.characters}
        </div>
        <div className=" ">
          <h2 className=" font-bold text-xl mt-4 border-b-[1px] py-2">
            세계관 및 설정
          </h2>
          {/* <a className=" ">{fiction?.setup || ""}</a> */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {fiction.setup || ""}
          </ReactMarkdown>
        </div>
      </div>
      <div className=" mt-3 sm:mt-7 bg-white px-3 py-3 border-[0.5px] border-[#BBBBBB] rounded-md">
        <h3 className=" font-bold text-xl">비슷한 소설</h3>
        <div className=" mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {similarFictions?.slice(0, 4).map((fiction) => (
            <div key={fiction?.id}>
              <div className="h-56 w-full mb-4 bg-slate-300"></div>
              <h3 className=" text-gray-700 -mb-1">{fiction?.title}</h3>
              <span>description</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx?.params?.id) {
    return {
      props: {},
    };
  }
  const fiction = await client.fiction.findUnique({
    where: {
      id: +ctx.params.id!.toString(),
    },
    include: {
      fictionStat: true,
      userFictionStat: {
        include: {
          userRationOnFictions: true,
          _count: {
            select: {
              users: true,
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
  fiction?.keywords.map((item) => arr.push(item.keyword?.name));
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
  });

  similarFictions.map((item) => arr2.push([item.id, item.title]));

  const isLiked = false;

  // const ration = await client.userFictionStat.findFirst({
  //   where: {
  //     fictionId: fiction?.id,
  //   },
  //   select: {
  //     originality: true,
  //     writing: true,
  //     character: true,
  //     verisimilitude: true,
  //     synopsisComposition: true,
  //     value: true,
  //   },
  // });

  return {
    props: {
      fiction: JSON.parse(JSON.stringify(fiction)),
      similarFictions: JSON.parse(JSON.stringify(similarFictions)),
      isLiked,
    },
  };
};

export default FictionDetail;
