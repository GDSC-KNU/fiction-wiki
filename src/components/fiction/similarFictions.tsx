import { useContext } from "react";
import Link from "next/link";

import { FictionContext } from "@src/context/fictionContext";

export default function SimilarFictions() {
  const fictionContext = useContext(FictionContext);
  return (
    <>
      <h3 className=" mb-2 text-2xl font-bold">비슷한 소설</h3>
      <div className=" lg:grid-cols-4">
        {fictionContext.similarFictions?.slice(0, 4).map((fiction) => (
          <div className=" mb-1 border-b-[1px] pb-1" key={fiction?.id}>
            <Link
              href={`/fictions/${fiction.id}`}
              className=" cursor-pointer text-gray-700"
            >
              {fiction?.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
