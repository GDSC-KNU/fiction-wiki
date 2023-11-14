import { Suspense } from "react";

import ClipLoader from "react-spinners/ClipLoader";

import FictionRadarChart from "@components/fiction/FictionRadarChart";
import MbtiBarChart from "@components/MbtiBarChart";
import UserRate from "@components/UserRate";

import Reviews from "@components/fiction/FictionReviewSection";

import InfoBox from "@components/fiction/InfoBox";
import Keywords from "@components/fiction/Keywords";
import SimilarFictions from "@components/fiction/SimilarFictions";
import { FictionResponse } from "@/type/fiction";
import FictionHorizonTalBarChart from "@components/fiction/FictionHotizontalBarChart";

export default async function FictionPage({ params }: any) {
  const { id } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/fictions/${id}`,
    // { cache: "no-store" }
    {
      next: {
        revalidate: 60 * 60 * 24 * 1,
        tags: ["fiction"],
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data as FictionResponse);

  const { fiction, similarFictions, mbtis, setup } = response;

  return (
    <div className=" grid grid-cols-10 lg:ml-24">
      <div className=" col-span-10 flex-col justify-between px-3 pt-3">
        <h1 className=" text-3xl font-semibold">{fiction?.title}</h1>
        <div className=" mb-2 flex ">
          <p className=" text-sm text-gray-500">{fiction?.originalTitle}</p>
          <p className="  ml-2 text-sm text-gray-500">
            {`(${new Date(fiction?.startDate).getFullYear()})`}
          </p>
        </div>
      </div>
      <div
        id="main-container"
        className=" col-span-10 max-w-[900px] lg:col-span-7"
      >
        <InfoBox fiction={fiction} />
        <div className=" mb-3 grid grid-cols-5 "></div>
        <div className="mb-10 rounded-md bg-white">
          <div
            className=" prose prose-slate max-w-full p-3  prose-h2:w-full prose-table:text-xs prose-img:float-right prose-img:my-0"
            dangerouslySetInnerHTML={{ __html: setup }}
          ></div>
        </div>
        <div className=" row-span-3 flex flex-col">
          <Suspense
            fallback={
              <div className="flex items-center justify-center">
                <ClipLoader
                  size={100}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            }
          >
            <Reviews fallbackData={response} />
          </Suspense>
        </div>
        {/* <div className=" mt-12">
          <SimilarFictions similarFiction={similarFictions} />
        </div> */}
      </div>

      <section
        id="side-container"
        className=" col-span-10 mt-3 lg:col-span-3 lg:mt-0 lg:pl-3"
      >
        <Suspense
          fallback={
            <div className="relative top-20 flex items-center justify-center">
              <ClipLoader
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          }
        >
          <div className=" col-span-5 mx-auto max-w-[400px] sm:col-span-2">
            <FictionHorizonTalBarChart fallbackData={response} />
          </div>
          <div className=" col-span-5 mb-3 mr-0 sm:col-span-3 sm:mb-0">
            <Keywords fallbackData={response} />
          </div>
          <div className=" col-span-5 mx-auto mb-3  max-w-[400px] sm:col-span-2 sm:mb-0">
            <MbtiBarChart fallbackData={response} />
          </div>
        </Suspense>
      </section>
    </div>
  );
}
