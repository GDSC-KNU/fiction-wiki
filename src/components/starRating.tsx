import React, { useState } from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function StarRating({ data }: { data: number }) {
  const [rating, setRating] = useState(0);
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };
  return (
    <Rating
      readOnly
      style={{ maxWidth: 100 }}
      value={data}
      itemStyles={myStyles}
    />
  );
}
