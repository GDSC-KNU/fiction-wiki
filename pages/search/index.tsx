import React from "react";
import { NextPage } from "next";

const Search: NextPage = () => {
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
    </>
  );
};

export default Search;
