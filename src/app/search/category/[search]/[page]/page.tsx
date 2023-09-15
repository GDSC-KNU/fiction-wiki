import client from "@libs/server/client";
import { Fiction } from "@prisma/client";
import { ParsedUrlQuery } from "querystring";
import FictionList from "@/components/fictionList";
import React from "react";

export default async function SearchGenrePage({ params }: any) {
  const { page, search } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/search/category/${search}?page=${page}`,
    {
      next: {
        revalidate: 60 * 60 * 24 * 1,
      },
    }
  ).then((res) => res.json());

  const { fictions, fictionsCount } = response;

  return (
    <section className="  min-h-[213px] max-w-[1300px] ">
      <div className=" mb-7 bg-slate-100 py-4 pl-6">
        <h5 className=" font-bold">장르: {decodeURI(search)}</h5>
      </div>
      <div className=" ">
        {fictions && (
          <FictionList
            data={fictions}
            type={"fictions_list"}
            count={fictionsCount}
          />
        )}
      </div>
    </section>
  );
}
