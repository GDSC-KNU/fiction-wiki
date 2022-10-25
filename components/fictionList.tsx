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
import fdbLogo from "/public/fdb_logo.png";

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

export default function FictionList(props: any) {
  const router = useRouter();
  // const [pageIndex, setPageIndex] = useRecoilState(pageAtom);
  // const [authorPageIndex, setAuthorPageIndex] = useRecoilState(authorPageAtom);
  // const [searchPageIndex, setSearchPageIndex] = useRecoilState(searchPageAtom);

  // const handlePageChange = (PI: number) => {
  //   setPageIndex(PI);
  //   setAuthorPageIndex(PI);
  //   setSearchPageIndex(PI);
  // };
  // console.log(props);
  // console.log(posts);
  // console.log(props?.data);

  return (
    <div className=" flex justify-center">
      {props?.type === "fictions_list" ? (
        <div className="">
          <ul className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-2">
            {(props?.data?.fictions || Array.from({ length: 18 }))?.map(
              (fiction: FictionWithMore, i: number) => (
                <li
                  key={fiction?.id || i}
                  className=" flex my-3 bg-white border-[#BBBBBB] rounded-md"
                >
                  <Link href={`/fictions/${fiction?.id}`} passHref>
                    {
                      <a className=" relative w-[108px] h-[166px] min-w-[108px]">
                        <Image
                          className=" cursor-pointer"
                          src={
                            fiction?.image
                              ? `https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction?.image}/fiction`
                              : fdbLogo
                          }
                          layout="fill"
                          alt={fiction?.title}
                          placeholder="blur"
                          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                        />
                      </a>
                    }
                  </Link>
                  <div className=" ml-1 absolute z-10">
                    {fiction?.nationality === "중국" ? (
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
                    ) : fiction?.nationality === "한국" ? (
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
                    ) : fiction?.nationality === "일본" ? (
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
                    ) : fiction?.nationality === "영미권" ? (
                      "EN"
                    ) : null}
                  </div>
                  <div className=" flex-col px-2 pb-2">
                    {(fiction?.categories || Array.from({ length: 1 })).map(
                      (category, i) => (
                        <span
                          key={i}
                          className=" text-xs text-gray-400 mr-[0.35rem]"
                        >
                          {category?.category?.name || "genre"}
                        </span>
                      )
                    )}

                    <h3>
                      <Link href={`/fictions/${fiction?.id}`}>
                        <a
                          title={`${fiction?.title}`}
                          className=" cursor-pointer hover:underline font-bold "
                        >
                          {fiction?.title || "Loading"}
                        </a>
                      </Link>
                    </h3>
                    <p className=" text-xs text-gray-400">
                      {"by "}
                      <Link href={`/authors/name/${fiction?.author?.name}`}>
                        <a
                          title={`${fiction?.author?.name}`}
                          className=" cursor-pointer hover:underline"
                        >
                          {fiction?.author?.name || "작자 미상"}
                        </a>
                      </Link>
                    </p>
                    <p className=" h-[24px] overflow-hidden mt-1">
                      {(
                        fiction?.keywords?.filter(
                          (keyword) => keyword?.keyword.isOfCons === false
                        ) || Array.from({ length: 6 })
                      ).map((keyword, i) => (
                        <Link
                          key={i}
                          href={`/search/keyword/${keyword?.keyword.name}/1`}
                          passHref
                        >
                          <a
                            title={`${keyword?.keyword.name}`}
                            className=" hover:underline cursor-pointer whitespace-nowrap bg-gray-200 text-[#666676] peer-checked:bg-blue-600 peer-checked:text-white  hover:border-gray-400 hover:bg-gray-200 mt-1 text-sm text-center mr-[0.35rem] rounded-3xl border-[#BBBBBB] p-[0.2rem]"
                          >
                            #{keyword?.keyword.name || "loading"}
                          </a>
                        </Link>
                      ))}
                    </p>
                    <p className=" text-xs h-12 overflow-hidden mt-1 ">
                      {fiction?.synopsis.slice(0, 150) ||
                        "loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading".slice(
                          0,
                          150
                        )}
                      ...
                    </p>
                    <p className=" text-xs"></p>
                    <p className=" overflow-hidden text-xs "></p>
                    <p className=" flex text-xs font-bold mt-1">
                      <strong className=" flex w-[4.2rem] text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                        </svg>
                        &nbsp;
                        {fiction?.userFictionStat?.total || 0}(
                        {fiction?.userFictionStat?._count?.users || 0})
                      </strong>
                      <strong className=" w-24">
                        {fiction?.volume || "???"}화 &nbsp;
                        {fiction?.currentState || "???화 완결"}
                      </strong>
                      <strong className=" w-20">{fiction?.isTranslated}</strong>
                    </p>
                  </div>
                </li>
              )
            )}
          </ul>
          <div className=" ">
            {/* {props.isMain === true ? null : (
              <Pagination
                activePage={pageIndex}
                itemsCountPerPage={18}
                totalItemsCount={props?.data?.fictionsCount || 1}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}
                innerClass=" flex justify-center mt-[15px]"
                itemClass=" hover:text-blue-400 flex border-[1px] divide-solid border-[#e2e2e2] inline-block w-[30px] h-[30px] justify-center align-center"
                linkClass=" w-full flex justify-center mt-[0.8px]"
                activeClass=" text-blue-400"
              />
            )} */}
            {props.isMain === true ? null : (
              <Pagination
                activePage={+(router?.query?.page || 1)?.toString()}
                itemsCountPerPage={18}
                totalItemsCount={props?.data?.fictionsCount || 1}
                totalPagesCount={Math.ceil(
                  (props?.data?.fictionsCount || 1) / 18
                )}
                pageRangeDisplayed={5}
                pageGroup={
                  Math.ceil(+(router?.query?.page || 1)?.toString() / 5) || 1
                }
                checkedParams={props?.checkedParams}
              />
            )}
          </div>
        </div>
      ) : props.type === "authors_list" ? (
        <div>
          <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 px-1 py-2 ">
            {props?.data?.map((author: authorWithMore) => (
              <Link
                key={author.id}
                href={`/authors/name/${author.name}`}
                passHref
              >
                <a className=" relative flex-col w-[144px] h-[190] my-3 mx-1 cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                  <Image
                    className=" "
                    src="/anoynymous_user.png"
                    width={142}
                    height={160}
                    alt={author.name}
                  />
                  <div className=" ml-1 absolute bottom-[17.2rem] z-10"></div>
                  <div className=" flex-col px-2 pb-2">
                    <div className=" flex justify-between"></div>
                    <div className=" text-center">{author.name}</div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <div className=" ">
            {/* <Pagination
              activePage={authorPageIndex}
              itemsCountPerPage={18}
              totalItemsCount={props?.authorsCount || 1}
              pageRangeDisplayed={5}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange}
              innerClass=" flex justify-center mt-[15px]"
              itemClass=" hover:text-blue-400 flex border-[1px] divide-solid border-[#e2e2e2] inline-block w-[30px] h-[30px] justify-center align-center"
              linkClass=" w-full flex justify-center mt-[0.8px]"
              activeClass=" text-blue-400"
            /> */}
            {props.isMain === true ? null : (
              <Pagination
                activePage={+(router?.query?.page || 1)?.toString()}
                itemsCountPerPage={18}
                totalItemsCount={props?.authorsCount || 1}
                totalPagesCount={Math.ceil((props?.authorsCount || 1) / 18)}
                pageRangeDisplayed={5}
                pageGroup={
                  Math.ceil(+(router?.query?.page || 1)?.toString() / 5) || 1
                }
                checkedParams={props?.checkedParams}
              />
            )}
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
