import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import FictionRadarChart from "@components/FictionRadarChart";
import useSWR from "swr";
import { useRouter } from "next/router";
import {
  Fiction,
  FictionStat,
  Keyword,
  UserFictionStat,
  UserRationOnFiction,
  KeywordsOnFictions,
  Author,
} from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import Input from "@components/Input";
import { useForm } from "react-hook-form";
import UserStat from "@components/UserStat";
import client from "@libs/server/client";
import Image from "next/image";
import useUser from "@libs/client/useUser";
import Link from "next/link";

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

  const { user, isLoading } = useUser();

  const { data, mutate: boundMutate } = useSWR<FictionDetailResponse>(
    router.query.id ? `/api/fictions/${router.query.id}/fav` : null
  );

  const [toggleFav] = useMutation(`/api/fictions/${router.query.id}/fav`);

  const onFavClick = () => {
    toggleFav({}, "GET");
    if (!data) return;
    // console.log(data);
    boundMutate({ ...data, isLiked: !data.isLiked }, false);
  };

  interface dummyCommentI {
    [key: string]: string;
    익명1234: any;
    익명1235: any;
    익명1236: any;
    익명1237: any;
    익명1238: any;
  }

  const dummyComment: dummyCommentI = {
    익명1234: "안녕하세요, 반갑습니다, 추천합니다. 강추!!",
    익명1235: "안녕하세요, ㅎㅇㅎㅇ",
    익명1236: "ㅂㅊ",
    익명1237: "안녕하세요, 반갑습니다",
    익명1238: "안녕하세요",
  };

  if (router.isFallback) {
    return (
      <div title="Loaidng for youuuuuuu">
        <span>I love you</span>
      </div>
    );
  }

  // console.log(data?.fiction?.fictionStat);
  // console.log(data);

  // console.log(data?.prevFiction?.startDate);
  // console.log(new Date(fiction?.startDate).getDate());
  // console.log(new Date(fiction?.startDate).getMonth());
  // console.log(new Date(fiction?.startDate).getFullYear());
  fiction.startDate = new Date(fiction?.startDate);
  fiction.endDate = new Date(fiction?.endDate);
  console.log(fiction);
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
            />
          </div>
          <div className=" px-4">
            <div className=" flex justify-between">
              <h2 className=" font-semibold text-2xl mb-2 pt-2 ml-">
                {fiction?.title}
              </h2>
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
                <Link href={`/authors/${fiction?.author?.name}`}>
                  <div className=" col-span-6 hover:cursor-pointer text-blue-500">
                    {fiction?.author?.name}
                  </div>
                </Link>
              </div>
              <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]">
                <div className=" col-span-4 font-bold font-sans">국가</div>
                <div className=" col-span-6">{fiction?.nationality}</div>
              </div>
              <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]">
                <div className=" col-span-4 font-bold font-sans">장르</div>
                <div className=" col-span-6">{fiction?.genre}</div>
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
                  <a className=" flex" href={fiction?.original}>
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
                <div className=" col-span-6">{fiction?.platforms}</div>
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
              <div className=" w-full col-span-10 grid grid-cols-10 py-[5px] border-t-[1px]">
                <div className=" col-span-4 font-bold font-sans">Related</div>
                <div className=" col-span-6">
                  {fiction?.relatedTitle} &nbsp;
                  {fiction?.author?.relatedName}
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
        <div className=" col-span-7 mt-3 sm:mt-7  sm:grid lg:grid-rows-6">
          <div className=" grid grid-cols-10 row-span-3">
            <div className=" col-span-10 lg:col-span-5 sm:pl-5 lg:px-5 h-full pb-3">
              <div className=" mb-5 pb-3 px- w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md h-full">
                <h2 className=" pt-1 border-b-[1px] mx-3 text-md">메인 태그</h2>
                <ul className=" pt-2 px-3 inline-flex flex-wrap">
                  {fiction?.keywords
                    ?.filter(
                      (item) =>
                        item.keyword.isOfHeroine === false &&
                        item.keyword.isOfMC === false
                    )
                    .map((item: any, index: any) => (
                      <li
                        key={index}
                        className={
                          item.keyword.isOfMC
                            ? " text-sm text-center ring-2 ring-red-500 mx-1 my-1 rounded-md h-fit border-[#BBBBBB]"
                            : item.keyword.isOfHeroine
                            ? " text-sm text-center ring-2 ring-blue-500 mx-1 my-1 rounded-md h-fit border-[#BBBBBB]"
                            : " text-sm text-center  mx-1 my-1 rounded-3xl h-fit bg-gray-200 text-[#666676] p-1 whitespace-nowrap "
                        }
                      >
                        #{item?.keyword?.name}
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
                        #{item?.keyword?.name}
                      </li>
                    ))}
                </ul>
                <h2 className=" pt-1 border-b-[1px] mx-3 text-md">
                  서브캐릭터 태그
                </h2>
                <ul className=" pt-2 px-3 inline-flex flex-wrap">
                  {fiction.keywords
                    .filter((item) => item.keyword.isOfHeroine === true)
                    .map((item: any, index: any) => (
                      <li
                        key={index}
                        className=" text-sm text-center  mx-1 my-1 rounded-3xl h-fit bg-gray-200 text-[#666676] p-1 whitespace-nowrap"
                      >
                        #{item?.keyword?.name}
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
          <div className=" row-span-3">
            <div className=" sm:pl-5 h-full">
              <div className=" w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md h-fit">
                <h2 className=" font-bold pt-1 px-2 "></h2>
                <ul className=" ">
                  {fiction?.userFictionStat?.userRationOnFictions.map(
                    (item, index) => (
                      <ul
                        key={index}
                        className=" flex place-content-between mx-2 border-b-2 pb-1 last:border-b-0 relative"
                      >
                        <li className=" mt-2 text-sm overflow-hidden mr-16">
                          {item.comment}
                        </li>
                        <li className=" mt-2 text-sm absolute right-24">
                          {`${item.userId.slice(0, 5)}...`}
                        </li>
                        <li className=" mt-2 ml-5 text-sm min-w-[78px]">
                          👍 👎 (+3)
                        </li>
                      </ul>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-3 sm:mt-7  bg-white px-3 py-3 border-[0.5px] border-[#BBBBBB] rounded-md">
        <div className=" ">
          <h2 className=" font-bold text-xl">줄거리</h2>
          <p>{fiction?.synopsis}</p>
        </div>
        <div className=" mt-3">
          <h3 className=" font-bold text-xl">등장인물</h3>
          {fiction?.characters}
        </div>
      </div>
      <div className=" mt-3 sm:mt-7 bg-white px-3 py-3 border-[0.5px] border-[#BBBBBB] rounded-md">
        <h2 className=" font-bold text-xl">비슷한 소설</h2>
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
            },
          },
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
  //   console.log(arr2);

  // console.log(similarFictions);

  const isLiked = false;

  const ration = await client.userFictionStat.findFirst({
    where: {
      fictionId: fiction?.id,
    },
    select: {
      originality: true,
      writing: true,
      character: true,
      verisimilitude: true,
      synopsisComposition: true,
      value: true,
    },
  });

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    props: {
      fiction: JSON.parse(JSON.stringify(fiction)),
      similarFictions: JSON.parse(JSON.stringify(similarFictions)),
      isLiked,
    },
  };
};

export default FictionDetail;
