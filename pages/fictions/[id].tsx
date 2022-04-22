import type { NextPage } from "next";
import FictionRadarChart from "@components/FictionRadarChart";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Fiction, Keyword } from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";

const ItemDetail: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR<FictionDetailResponse>(
    router.query.id ? `/api/fictions/${router.query.id}` : null
  );

  const [toggleFav] = useMutation(`/api/fictions/${router.query.id}/fav`);
  const onFavClick = () => {
    toggleFav({});
  };

  interface FictionWithMore extends Fiction {
    keywords: [Keyword];
  }

  interface FictionDetailResponse {
    ok: boolean;
    fiction: FictionWithMore;
    similarFictions: Fiction[];
    isLiked: boolean;
  }

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

  console.log(data?.similarFictions);

  return (
    <div className=" max-w-[1500px]">
      <div className=" grid grid-cols-1 sm:grid-cols-5 ">
        <div className=" bg-white col-span-2 mx-5 mt-7 h-fit border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
          <img
            className=" min-h-[330px] w-full"
            src="https://picsum.photos/462/599?random=2"
          ></img>
          <div className=" px-4 py-3">
            <div className=" flex justify-between">
              <h2 className=" font-semibold text-2xl mb-2 pt-2">
                {data?.fiction?.title}
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
            <div className=" mb-2">{data?.fiction?.author}</div>
            <div className=" mb-2">{data?.fiction?.nationality}</div>
            <div className=" mb-2">{data?.fiction?.genre}</div>
            <div className=" mb-2">
              {data?.fiction?.startDate} ~ {data?.fiction?.endDate}
            </div>
            <div className=" mb-2">{data?.fiction?.original}</div>
            <div className=" mb-2">{data?.fiction?.platforms}</div>
            <div className=" mb-2">
              {data?.fiction?.currentState || "500화 완결 (예시)"}
            </div>
          </div>
        </div>
        <div className=" col-span-3 mx-5 mt-7">
          <div className=" grid xl:grid-cols-2 sm:grid-cols-1">
            <div className=" mb-10 pb-3 px- w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md">
              <h2 className=" font-bold pt-1 px-2">Keywords</h2>
              <ul className=" grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-5 pt-3 px-3">
                {data?.fiction?.keywords?.map((item: any, index: any) => (
                  <li
                    key={index}
                    className=" text-sm text-center ring-2 ring-offset-1 ring-gray-500 mx-1 my-1 rounded-md h-fit border-[#BBBBBB]"
                  >
                    {item?.keyword?.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" h-max bg-white mb-10 xl:ml-10 w-full border-[0.5px] border-[#BBBBBB] rounded-md">
              <h2 className=" font-bold pt-1 px-2">graphs and charts</h2>
              {/* <img
                className=" mx-auto"
                src="http://picsum.photos/350/350?random=1"
              ></img> */}
              <FictionRadarChart />
            </div>
          </div>
          <div className=" h-fit w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md">
            <h2 className=" font-bold pt-1 px-2"> Comments</h2>
            <ul>
              {Object.keys(dummyComment).map((item, index) => (
                <ul
                  key={index}
                  className=" flex place-content-between mx-2 border-b-2 pb-1 last:border-b-0 relative"
                >
                  <li className=" mt-2 text-sm overflow-hidden mr-16">
                    {dummyComment[item]}
                  </li>
                  <li className=" mt-2 text-sm absolute right-24">{item}</li>
                  <li className=" mt-2 ml-5 text-sm min-w-[78px]">
                    👍 👎 (+3)
                  </li>
                </ul>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=" mx-5 my-7 bg-white px-3 py-3 border-[0.5px] border-[#BBBBBB] rounded-md">
        <div className=" ">
          <h2 className=" font-bold text-xl">줄거리</h2>
          <p>{data?.fiction?.synopsis}</p>
        </div>
        <div className=" mt-3">
          <h3 className=" font-bold text-xl">등장인물</h3>
          {data?.fiction?.characters}
        </div>
      </div>
      <div className=" mx-5 my-7 bg-white px-3 py-3 border-[0.5px] border-[#BBBBBB] rounded-md">
        <h2 className=" font-bold text-xl">비슷한 소설</h2>
        <div className=" mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.similarFictions?.slice(0, 4).map((fiction) => (
            <div key={fiction.id}>
              <div className="h-56 w-full mb-4 bg-slate-300"></div>
              <h3 className=" text-gray-700 -mb-1">{fiction.title}</h3>
              <span>description</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
