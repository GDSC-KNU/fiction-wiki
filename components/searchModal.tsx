import SearchAutoComplete from "@components/searchAutoComplete";
import Input from "@components/input";
import { FieldErrors, useForm } from "react-hook-form";
import SearchIcon from "../public/svg/searchIcon.svg";
import { useState, useEffect, useDeferredValue, Suspense } from "react";
import useSWR from "swr";
import {
  Fiction,
  Keyword,
  FictionStat,
  KeywordsOnFictions,
  UserFictionStat,
  Author,
} from "@prisma/client";
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";

interface EnterForm {
  searchInput?: string;
}

interface UserFictionStatWithMore extends UserFictionStat {
  _count: {
    users: number;
  };
}

interface FictionWithMore extends Fiction {
  fictionStat: [FictionStat];
  userFictionStat: UserFictionStatWithMore;
  author: Author;
}

interface FictionsResponse {
  ok: boolean;
  fictions: FictionWithMore[];
  fictionsCount: number;
  keywords: Keyword[];
  categories: string[];
  nationalities: string[];
}

export default function SearchModal() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [deferredQuery, setDeferredQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { data: { fictions } = {}, error } = useSWR(
    deferredQuery !== ""
      ? typeof window === "undefined"
        ? null
        : `/api/search/title/${deferredQuery}?page=1`
      : null,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      focusThrottleInterval: 5000,
    }
  );

  useEffect(() => {
    const debounce = setTimeout(() => {
      return setDeferredQuery(query);
    }, 700);
    return () => clearTimeout(debounce); //->clearTimeout 바로 타이머 제거
  }, [query]); //->결국 마지막 이벤트에만 setTimeout이 실행됨

  return (
    <>
      <SearchIcon
        width="24"
        height="24"
        fill="black"
        onClick={() => setShowModal(true)}
        className=" mx-4 cursor-pointer "
      />
      {showModal ? (
        <>
          <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none ">
            <div className="relative w-full backdrop-blur-sm mt-[48px] ">
              <div className=" px-2 border-0 shadow-lg relative flex justify-between w-full bg-white outline-none focus:outline-none">
                <form
                  className=" w-full pb-2"
                  onSubmit={() => {
                    setShowModal(false);
                    router.push(`/search/title/${query}?page=1`);
                  }}
                >
                  {/* <Input
                    register={register("searchInput", { required: true })}
                    required
                    label=""
                    name="searchInput"
                    type="text_detail"
                    kind="search"
                  /> */}
                  <div className=" flex items-centerv">
                    <SearchIcon
                      width="20"
                      height="20"
                      fill="black"
                      className=" relative top-[14px]"
                    />
                    <div className=" flex items-center w-full">
                      <input
                        autoComplete="off"
                        placeholder="검색어를 입력하세요"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className=" w-full px-3 pt-3 pb-1  placeholder-gray-400 focus:outline-none text-black"
                      />
                    </div>
                  </div>
                </form>
                <button
                  className="text-red-500 background-transparent uppercase text-2xl outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
              </div>
              {fictions?.map((fiction: any, i: number) => (
                <div key={fiction.id} className=" bg-white p-3">
                  {/* <Link href={`/fictions/${fiction.id}`}> */}
                  <a
                    className=" ml-7"
                    href={`/fictions/${fiction.id}`}
                    onClick={() => {
                      setShowModal(false);
                      router.push(`/fictions/${fiction.id}`);
                    }}
                  >
                    {fiction.title} -{" "}
                    <span className=" text-gray-500">
                      {fiction.author.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="opacity-40 mt-[48px] fixed inset-0 z-10 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
