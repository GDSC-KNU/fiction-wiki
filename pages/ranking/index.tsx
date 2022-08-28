import useUser from "@libs/client/useUser";
import { Fiction } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import useSWR from "swr";

const Ranking: NextPage = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const [text, updateText] = useState("");
  // // 'text'가 변경되어도 메모합니다:
  // const handleSubmit = useEventCallback(() => {
  //   alert(text);
  // }, [text]);

  // function useEventCallback(fn: any, dependencies: any) {
  //   const ref = useRef(() => {
  //     throw new Error("Cannot call an event handler while rendering.");
  //   });

  //   useEffect(() => {
  //     ref.current = fn;
  //   }, [fn, ...dependencies]);

  //   return useCallback(() => {
  //     const fn = ref.current;
  //     return fn();
  //   }, [ref]);
  // }

  return (
    <>
      <br></br>
      랭킹 페이지는 업데이트 예정입니다.
      {/* <form>
        <input value={text} onChange={(e) => updateText(e.target.value)} />
        <button className=" bg-blue-200" onSubmit={handleSubmit}>
          asd
        </button>
      </form> */}
    </>
  );
  // return (
  //   <div>
  //     <div className=" flex justify-center">
  //       <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-1 py-2 ">
  //         Ranking 입니다.
  //       </ul>
  //     </div>
  //   </div>
  // );
};

export default Ranking;
