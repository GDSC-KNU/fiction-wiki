import React from "react";
import FictionList from "@/components/fictionList";

export default async function TitleSearchPage({ params }: any) {
  const { search, page } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/search/title/${search}?page=${page}`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const { fictions, fictionsCount } = response;

  return (
    <section className="  min-h-[213px] w-[100vw] max-w-[1300px]">
      <div className=" mb-7 bg-slate-100 py-4 pl-6">
        <h5 className=" font-bold">제목: {decodeURIComponent(search)}</h5>
      </div>
      {fictions && (
        <FictionList
          data={fictions}
          type={"fictions_list"}
          count={fictionsCount}
        />
      )}
    </section>
  );
}
