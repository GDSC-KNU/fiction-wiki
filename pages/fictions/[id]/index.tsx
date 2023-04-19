import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import type {
  Fiction,
  FictionStat,
  Keyword,
  UserRationOnFiction,
  // KeywordsOnFictions,
  Author,
  Category,
} from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import UserStat from "@components/userRate";
import client from "@libs/server/client";
import Image from "next/image";
import useUser from "@libs/client/useUser";
import Link from "next/link";
import FictionRadarChart from "src/components/fictionRadarChart";
import Comments from "src/components/comment";
// import "@uiw/react-md-editor/markdown-editor.css";
// import "@uiw/react-markdown-preview/markdown.css";
// import HeadMeta from "@components/headMeata";
import StarRating from "src/components/starRating";
import { NextSeo } from "next-seo";
import StructuredData from "src/components/structuredData";
import useSWR from "swr";

interface FictionDetailResponse {
  ok: boolean;
  fiction: FictionWithMore;
  similarFictions: Fiction[];
  isLiked: boolean;
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
}) => {
  const router = useRouter();

  // // FAV을 CSR로 받기, 기존 Data 정리하여 fav만 get하여 가져옴
  const { data, mutate: boundMutate } = useSWR<FictionDetailResponse>(
    router.query.id ? `/api/fictions/${router.query.id}` : null
  );

  // const { data: nextAuthSession } = useSession();
  const { user } = useUser();

  // const { data, mutate: boundMutate } = useSWR<FictionDetailResponse>(
  //   router.query.id
  //     ? typeof window === "undefined"
  //       ? null
  //       : `/api/fictions/${router.query.id}/fav`
  //     : null
  // );

  const [toggleFav] = useMutation(`/api/fictions/${router.query.id}/fav`);

  // 좋아요
  // const onFavClick = () => {
  //   if (!nextAuthSession) {
  //     alert("선호작 기능은 로그인 이후 사용할 수 있습니다.");
  //     return;
  //   }
  //   toggleFav({}, "POST");
  //   if (!data) return;

  //   boundMutate({ ...data, isLiked: !data.isLiked }, false);
  // };

  // if (router?.isFallback) {
  //   return (
  //     <div title="Loaidng for youuuuuuu">
  //       <span>I love you</span>
  //     </div>
  //   );
  // }

  if (fiction) {
    fiction.startDate = new Date(fiction?.startDate || 0);
    fiction.endDate = new Date(fiction?.endDate || 0);
  }

  const urlToString = (string: string) => {
    if (string.includes("munpia")) string = "문피아";
    else if (string.includes("qidian")) string = "치디엔";
    else if (string.includes("series")) string = "시리즈";
    else if (string.includes("kakao")) string = "카카오";
    else if (string.includes("novelpia")) string = "노벨피아";
    else if (string.includes("joara")) string = "조아라";
    return string;
  };

  console.log(data?.fiction.userFictionStat);
  return (
    <div className=" max-w-[1100px] ">
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
        <div className=" mx-5 mt-2 flex justify-end">
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

      <div className=" grid h-fit grid-cols-1 sm:grid-cols-10">
        <div className="  col-span-3 h-fit overflow-hidden rounded-md border-[0.5px] border-[#BBBBBB] bg-white object-cover sm:max-w-[380px] ">
          <div className="  relative h-[467px] w-full">
            <Image
              src={`https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction?.image}/fiction`}
              fill
              alt={fiction?.title}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </div>
          <div className=" px-4">
            <div className=" flex justify-between">
              <h1 className=" mb-2 pt-2 text-2xl font-semibold">
                {fiction?.title}
              </h1>
              {/* <button
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
              </button> */}
            </div>
            <div className=" grid grid-cols-10 overflow-hidden text-xs">
              <div className=" col-span-10 grid w-full grid-cols-10 py-[5px] ">
                <div className=" col-span-4 font-sans font-bold">원제</div>
                <div className=" col-span-6">
                  {fiction?.originalTitle || fiction?.title}
                </div>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <div className=" col-span-4 font-sans font-bold">작가</div>
                <Link
                  title={fiction?.author?.name}
                  className=" col-span-6 w-fit text-blue-500 hover:cursor-pointer"
                  passHref
                  href={`/authors/name/${fiction?.author?.name}`}
                >
                  {fiction?.author?.name}
                </Link>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <div className=" col-span-4 font-sans font-bold">국가</div>
                <div className=" col-span-6">{fiction?.nationality}</div>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <div className=" col-span-4 font-sans font-bold">장르</div>
                <div className=" col-span-6">
                  <span>
                    {fiction?.categories
                      .reduce(
                        (acc: any, cur: any) => [...acc, cur?.category?.name],
                        []
                      )
                      .map((item, index) => (
                        <Link
                          className=" col-span-6 mr-2 text-blue-500 hover:cursor-pointer"
                          key={index}
                          href={`/search/genre/${item}/1`}
                        >
                          {item}
                        </Link>
                      ))}
                  </span>
                </div>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <div className=" col-span-4 font-sans font-bold">연재기간</div>
                <div className=" col-span-6">{`${fiction?.startDate.getFullYear()}. ${
                  fiction?.startDate.getMonth() + 1
                }. ${fiction?.startDate.getDate()} ~ ${
                  JSON.stringify(fiction?.endDate) ===
                  JSON.stringify(new Date(0))
                    ? ""
                    : `${fiction?.endDate.getFullYear()}. ${
                        fiction?.endDate.getMonth() + 1
                      }. ${fiction?.endDate.getDate()}`
                }`}</div>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px] ">
                <div className=" col-span-4 font-sans font-bold ">원본</div>
                <div className=" col-span-6 text-blue-500">
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
                </div>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px] sm:col-span-10">
                <div className=" col-span-4 font-sans font-bold">플랫폼</div>
                <div className=" col-span-6 ">
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
                </div>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <div className=" col-span-4 font-sans font-bold">상태</div>
                <div className=" col-span-6">
                  {fiction?.volume}&nbsp;
                  {fiction?.currentState || "??"}
                </div>
              </div>
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <div className=" col-span-4 font-sans font-bold">
                  미디어믹스
                </div>
                <div className=" col-span-6">{fiction?.mediaMix || "X"}</div>
              </div>
              {fiction?.isTranslated ? (
                <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                  <div className=" col-span-4 font-sans font-bold">
                    번역상태
                  </div>
                  <div className=" col-span-6">
                    {fiction?.isTranslated === "번역"
                      ? "O"
                      : fiction?.isTranslated === "미번"
                      ? "X"
                      : ""}
                  </div>
                </div>
              ) : null}
              <div className=" col-span-10 grid w-full grid-cols-10 border-t-[1px] py-[5px]">
                <div className=" col-span-4 font-sans font-bold">Related</div>
                <div className=" col-span-6">
                  {fiction?.relatedTitle ? fiction?.relatedTitle + " | " : ""}
                  {fiction?.author?.rawName}
                  {fiction?.author?.relatedName
                    ? ", " + fiction?.author?.relatedName
                    : ""}
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
        <div className=" col-span-7  sm:grid lg:grid-rows-5">
          <div className=" row-span-3 grid grid-cols-10">
            <div className=" col-span-10 h-full pb-3 sm:pl-5 lg:col-span-5 lg:px-5 ">
              <div className=" flex h-full flex-col">
                <div className="  my-3 w-full rounded-md border-[0.5px] border-[#BBBBBB] bg-white pb-3 sm:mt-0">
                  <h2 className=" mx-3 flex items-center border-b-[1px] pt-1">
                    평점
                    <p className="ml-2 text-sm font-bold text-gray-500">
                      {data?.fiction.userFictionStat?.total ??
                        (+fiction?.userFictionStat?.total || 0)}{" "}
                      / 5 (
                      {data?.fiction.userFictionStat._count
                        .userRationOnFictions ??
                        (fiction?.userFictionStat?.userRationOnFictions
                          ?.length ||
                          0)}
                      )
                    </p>
                  </h2>
                  <StarRating
                    data={
                      data?.fiction.userFictionStat?.total ??
                      (+fiction?.userFictionStat?.total || 0)
                    }
                  />
                </div>
                <div className=" h-full w-full rounded-md border-[0.5px] border-[#BBBBBB] bg-white">
                  <h2 className=" mx-3 border-b-[1px] pt-1">메인 태그</h2>
                  <ul className=" inline-flex flex-wrap px-3 pt-2">
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
                  <h2 className=" mx-3 border-b-[1px] pt-1">주인공 태그</h2>
                  <ul className=" inline-flex flex-wrap px-3 pt-2">
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
                  <h2 className=" mx-3 border-b-[1px] pt-1">히로인 태그</h2>
                  <ul className=" inline-flex flex-wrap px-3 pt-2">
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
                  <h2 className=" mx-3 border-b-[1px] pt-1">호불호 키워드</h2>
                  <ul className=" inline-flex flex-wrap px-3 pt-2">
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
            </div>
            <div className=" col-span-10 pb-3 sm:pl-5 lg:col-span-5 lg:px-0">
              <div className=" col-span-6 mb-3 h-full w-full rounded-md border-[0.5px] border-[#BBBBBB] bg-white">
                <h2 className=" px-2 pt-1 font-bold"></h2>

                <FictionRadarChart props={fiction?.fictionStat} />

                <div className=" mx-auto my-2 h-fit w-full px-3">
                  <UserStat />
                </div>
              </div>
            </div>
          </div>
          <div className=" row-span-3 flex flex-col">
            <Comments />
          </div>
        </div>
      </div>
      <div className=" mt-4 rounded-md border-[0.5px] border-[#BBBBBB] bg-white p-3">
        <div className=" ">
          <h2 className=" border-b-[1px] text-xl font-bold">줄거리</h2>
          <p className=" mt-2 whitespace-pre-wrap">{fiction?.synopsis}</p>
        </div>
        <div className=" mt-3">
          <h2 className=" mt-4 border-b-[1px] py-2 text-xl font-bold">개요</h2>
          <p className=" mt-2 whitespace-pre-wrap">{fiction?.introduction}</p>
        </div>
        <div className=" mt-3">
          <h2 className=" mt-4 border-b-[1px] py-2 text-xl font-bold">
            등장인물
          </h2>
          <p className=" mt-2 whitespace-pre-wrap"> {fiction?.characters}</p>
          {/* <div className=" mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {similarFictions?.slice(0, 4).map((fiction) => (
              <div key={fiction?.id}>
                <div className="h-56 w-full mb-4 bg-slate-300"></div>
                <h3 className=" text-gray-700 -mb-1">{fiction?.title}</h3>
      
              </div>
            ))}
          </div> */}
        </div>
        {/* <div>
          <h2 className=" font-bold text-xl mt-4 border-b-[1px] py-2">
            세계관 및 설정
          </h2>
          <EditerMarkdown source={fiction.setup || ""}></EditerMarkdown>
        </div> */}
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
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
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

  // if (ctx.query.secret !== process.env.MY_SECRET_TOKEN) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }

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

  return {
    props: {
      fiction: JSON.parse(JSON.stringify(fiction)),
      similarFictions: JSON.parse(JSON.stringify(similarFictions)),
      isLiked,
    },
  };
};

export default FictionDetail;
