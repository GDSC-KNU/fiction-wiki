"use client";

import SearchIcon from "@public/svg/searchIcon.svg";
import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import useKeyHandler from "@/hooks/useKeyHandler";

import XIcon from "@public/svg/x.svg";
import { AnimatePresence, motion } from "framer-motion";
import { set } from "react-hook-form";

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
    }, 200);
    return () => clearTimeout(debounce);
  }, [query]);

  const modalVariants = {
    hidden: {
      y: -48,
      zIndex: -1,
      opacity: 0,
      // transitionEnd: {
      //   zIndex: 70,
      // },
    },
    visible: { y: 0, opacity: 1 },
    exit: { y: -48, opacity: 0 },
  };

  const backgroundRef = useRef(null);

  return (
    <div>
      <SearchIcon
        width="24"
        height="24"
        // fill="black"
        onClick={() => setShowModal(true)}
        className=" cursor-pointer "
      />
      <AnimatePresence>
        {showModal && (
          <motion.div
            ref={backgroundRef}
            key="modal"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ stiffness: 1000 }}
            className="fixed inset-0"
            onClick={(e) => {
              if (e.target === backgroundRef.current) setShowModal(false);
            }}
          >
            {/* <div className=" relative mt-[48px] w-full backdrop-blur-sm "> */}

            <div
              className={` relative top-[48px]  flex h-[48px] w-full justify-between border-0 bg-white p-2 shadow-lg outline-none focus:outline-none`}
            >
              <form
                className=" flex w-full items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowModal(false);
                  router.push(`/search/title/${query}/1`);
                }}
              >
                <div className=" flex w-full items-center px-2">
                  <SearchIcon
                    width="20"
                    height="20"
                    fill="black"
                    className=" relative "
                  />
                  <div className=" flex w-full items-center px-2">
                    <input
                      autoFocus
                      autoComplete="off"
                      placeholder="검색어를 입력하세요"
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className=" w-full text-black placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
              </form>
              <button
                className=" pr-1 text-2xl uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                type="button"
                onClick={() => {
                  setQuery("");
                  setShowModal(false);
                }}
              >
                <XIcon />
              </button>
            </div>
            <div className=" relative top-[48px]">
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
