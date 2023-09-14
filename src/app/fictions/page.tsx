import React from "react";
import { Suspense } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import FictionSelectorWrapper from "@components/fictions/fictionSelectorWrapper";

export default async function FictionsPage() {
  const staticData = await fetch(
    `${process.env.NEXTAUTH_URL}/api/fictions/selector`,
    {
      // next: {
      //   revalidate: 60 * 60 * 24 * 7,
      // },
      cache: "no-cache",
    }
  ).then((res) => res.json());
  console.log(staticData);
  const Fallback = () => (
    <div className=" flex justify-center">
      <ClipLoader
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );

  return (
    <>
      <Suspense fallback={<Fallback />}>
        <FictionSelectorWrapper staticData={staticData} />
      </Suspense>
    </>
  );
}
