"use client";

import { useContext } from "react";

import FictionRadarChart from "@components/fiction/fictionRadarChart";
import MbtiBarChart from "@components/mbtiBarChart";
import UserRate from "@components/userRate";

import { FictionContext } from "@/context/fictionContext";

import Comments from "@components/comments";

import InfoBox from "@components/fiction/InfoBox";
import Keywords from "@components/fiction/keywords";
import SimilarFictions from "@components/fiction/similarFictions";

export default function FictionPage() {
  const fictionContext = useContext(FictionContext);

  return (
    <div className=" grid grid-cols-10 px-2 lg:ml-24">
      <div className=" col-span-10 flex-col justify-between">
        <h1 className=" pt-2 text-3xl font-semibold">
          {fictionContext.fiction?.title}
        </h1>
        <div className=" mb-2 flex">
          <p className="  text-sm text-gray-500">
            {fictionContext.fiction?.originalTitle}
          </p>
          <p className="  ml-2 text-sm text-gray-500">
            {`(${new Date(fictionContext.fiction?.startDate).getFullYear()})`}
          </p>
        </div>
      </div>
      <div id="main-container" className=" col-span-10 lg:col-span-7">
        <InfoBox />
        <div className=" mb-3 grid grid-cols-5 "></div>
        <div className="my-10 rounded-md bg-white">
          <div
            className=" prose prose-slate max-w-full prose-h2:w-full  prose-table:text-xs prose-img:float-right prose-img:my-0"
            dangerouslySetInnerHTML={{ __html: fictionContext.setup }}
          ></div>
        </div>
        <div className=" row-span-3 flex flex-col">
          <Comments />
        </div>
        <div className=" mt-12">
          <SimilarFictions />
        </div>
      </div>
      <div
        id="side-container"
        className=" col-span-10 mt-3 lg:col-span-3 lg:mt-0 lg:pl-3"
      >
        <div className=" col-span-5 mx-auto max-w-[400px] sm:col-span-2">
          <div className=" flex justify-center px-3">
            <div className=" h-full w-full rounded-md bg-[#F4F4F4]">
              <FictionRadarChart />
            </div>
          </div>
          <UserRate />
        </div>
        <Keywords />
        <MbtiBarChart />
      </div>
    </div>
  );
}
