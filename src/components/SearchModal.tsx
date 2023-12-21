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

  const backgroundRef = useRef(null);
  const searchIconRef = useRef<any>(null);
  const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });

  const modalVariants = {
    hidden: {
      x: iconPosition.left,
      y: iconPosition.top - 48,
      width: 50,
      height: 48,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      width: "100%", // Full width
      height: "100%", // Full height
      opacity: 1,
    },
    exit: {
      x: iconPosition.left,
      y: iconPosition.top - 48,
      width: 50,
      height: 48,
      opacity: 0,
    },
  };

  useEffect(() => {
    const updatePosition = () => {
      if (searchIconRef.current) {
        const rect = searchIconRef.current.getBoundingClientRect();
        setIconPosition({ top: rect.top, left: rect.left });
      }
    };

    // Update the position initially and on resize
    updatePosition();
    window.addEventListener("resize", updatePosition);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [searchIconRef]);

  return (
    <div>
      <div ref={searchIconRef}>
        <SearchIcon
          width="24"
          height="24"
          // fill="black"
          onClick={() => setShowModal(true)}
          className=" cursor-pointer "
        />
      </div>
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

            <div className=" relative top-[48px] flex h-[48px] w-full justify-between border-0 bg-white p-2 shadow-lg outline-none backdrop-blur-sm focus:outline-none">
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
