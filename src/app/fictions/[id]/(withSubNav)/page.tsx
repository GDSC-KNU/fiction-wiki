import FictionRadarChart from "@components/fiction/fictionRadarChart";
import MbtiBarChart from "@components/mbtiBarChart";
import UserRate from "@components/userRate";

import Comments from "@components/comments";

import InfoBox from "@components/fiction/InfoBox";
import Keywords from "@components/fiction/keywords";
import SimilarFictions from "@components/fiction/similarFictions";

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
  ).then((res) => res.json());

  const { fiction, similarFictions, mbtis, setup } = response;

  return (
    <div className=" grid grid-cols-10 px-2 lg:ml-24">
      <div className=" col-span-10 flex-col justify-between">
        <h1 className=" pt-2 text-3xl font-semibold">{fiction?.title}</h1>
        <div className=" mb-2 flex">
          <p className="  text-sm text-gray-500">{fiction?.originalTitle}</p>
          <p className="  ml-2 text-sm text-gray-500">
            {`(${new Date(fiction?.startDate).getFullYear()})`}
          </p>
        </div>
      </div>
      <div id="main-container" className=" col-span-10 lg:col-span-7">
        <InfoBox fiction={fiction} />
        <div className=" mb-3 grid grid-cols-5 "></div>
        <div className="my-10 rounded-md bg-white">
          <div
            className=" prose prose-slate max-w-full prose-h2:w-full  prose-table:text-xs prose-img:float-right prose-img:my-0"
            dangerouslySetInnerHTML={{ __html: setup }}
          ></div>
        </div>
        <div className=" row-span-3 flex flex-col">
          <Comments fiction={fiction} />
        </div>
        <div className=" mt-12">
          <SimilarFictions similarFiction={similarFictions} />
        </div>
      </div>
      <div
        id="side-container"
        className=" col-span-10 mt-3 lg:col-span-3 lg:mt-0 lg:pl-3"
      >
        <div className=" col-span-5 mx-auto max-w-[400px] sm:col-span-2">
          <div className=" flex justify-center px-3">
            <div className=" h-full w-full rounded-md bg-[#F4F4F4]">
              <FictionRadarChart fiction={fiction} />
            </div>
          </div>
          <UserRate />
        </div>
        <Keywords fiction={fiction} />
        <MbtiBarChart mbtis={mbtis} fiction={fiction} />
      </div>
    </div>
  );
}
