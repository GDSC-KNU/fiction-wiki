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

  return (
    <>
      <FictionSelectorWrapper staticData={JSON.parse(staticData)} />
    </>
  );
}

export const runtime = "edge";
