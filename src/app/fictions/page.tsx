import React from "react";

import FictionSelectorWrapper from "@components/fictions/fictionSelectorWrapper";

export default async function FictionsPage() {
  const staticData = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/fictions/selector`,
    {
      next: {
        revalidate: 60 * 60 * 24 * 7,
      },
    }
  ).then((res) => res.json());

  // const staticDataWithAll = {
  //   ...staticData,
  //   categoryList: [{ id: 1111, name: "all" }, ...staticData.categoryList],
  //   keywordList: [{ id: 1111, name: "all" }, ...staticData.keywordList],
  //   nationalityList: ["all", ...staticData.nationalityList],
  // };

  return (
    <>
      <FictionSelectorWrapper staticData={staticData} />
    </>
  );
}

// export const runtime = "edge";
