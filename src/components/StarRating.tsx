"use client";

import React, { useContext, useState } from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { FictionContext } from "@/context/fictionContext";

// fictionContext?.fiction.userFictionStat?.total || 0

export default function StarRating() {
  const fictionContext = useContext(FictionContext);
  const [rating, setRating] = useState(0);
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  return (
    <div className="  mb-2 flex whitespace-nowrap">
      {fictionContext.fiction?.userFictionStat?.total && (
        <>
          <Rating
            readOnly
            style={{ maxWidth: 100 }}
            value={fictionContext?.fiction.userFictionStat?.total || 0}
            itemStyles={myStyles}
          />
          <p className=" ml-2 flex items-center text-sm font-bold text-gray-500">
            {fictionContext?.fiction.userFictionStat?.total || 0}(
            {fictionContext?.fiction.userFictionStat?._count
              ?.userRationOnFictions || 0}
            )
          </p>
        </>
      )}
    </div>
  );
}
