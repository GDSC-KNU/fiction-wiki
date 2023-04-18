import React from "react";
import FictionList from "src/components/fictionList";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { fictionPageAtom } from "../../../src/store/atoms";
import useSWR from "swr";

const TitleSearch: NextPage = () => {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useRecoilState(fictionPageAtom);

  const { data, error, mutate } = useSWR(
    router?.query?.search
      ? typeof window === "undefined"
        ? null
        : `/api/search/title/${router?.query?.search}?page=${router?.query?.page}`
      : null
  );

  return (
    <section className="  min-h-[213px] w-[100vw] max-w-[1300px]">
      <div className=" mb-7 bg-slate-100 py-4 pl-6">
        <h5 className=" font-bold">제목: {router.query.search}</h5>
      </div>

      <FictionList data={data} type={"fictions_list"} />
    </section>
  );
};

export default TitleSearch;
