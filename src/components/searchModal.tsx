import SearchIcon from "@public/svg/searchIcon.svg";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import useKeyHandler from "@src/hooks/useKeyHandler";

export default function SearchModal() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [deferredQuery, setDeferredQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  useKeyHandler(() => {
    setShowModal(false);
    setQuery("");
  }, "Escape");

  const { data: { fictions } = {} } = useSWR(
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
    }, 300);
    return () => clearTimeout(debounce);
  }, [query]);

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
          <div className=" fixed inset-0  z-20 flex overflow-y-auto overflow-x-hidden outline-none focus:outline-none ">
            <div className=" relative mt-[48px] w-full backdrop-blur-sm ">
              <div className=" relative flex w-full justify-between border-0 bg-white px-2 shadow-lg outline-none focus:outline-none">
                <form
                  className=" w-full pb-2"
                  onSubmit={() => {
                    setShowModal(false);
                    router.push(`/search/title/${query}?page=1`);
                  }}
                >
                  <div className=" flex items-center">
                    <SearchIcon
                      width="20"
                      height="20"
                      fill="black"
                      className=" relative top-[5px]"
                    />
                    <div className=" flex w-full items-center">
                      <input
                        autoFocus
                        autoComplete="off"
                        placeholder="검색어를 입력하세요"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className=" w-full px-3  pb-1 pt-3  text-black placeholder:text-gray-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </form>
                <button
                  className=" text-2xl uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
              </div>
              {fictions?.map((fiction: any, i: number) => (
                <div key={fiction.id} className=" bg-white p-3">
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
          <div className="fixed inset-0 z-10 mt-[48px] bg-black opacity-40"></div>
        </>
      ) : null}
    </>
  );
}
