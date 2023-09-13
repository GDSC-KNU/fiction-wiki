import React from "react";

import FictionSelectorWrapper from "@components/fictions/fictionSelectorWrapper";

export default async function FictionsPage() {
  const staticData = await fetch(
    `${process.env.NEXTAUTH_URL}/api/fictions/selector`,
    {
      next: {
        revalidate: 60 * 60 * 24 * 7,
      },
    }
  ).then((res) => res.json());

  return (
    <div className=" ">
      <FictionSelectorWrapper staticData={staticData} />
    </div>
  );
}
