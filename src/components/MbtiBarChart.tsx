"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { FictionResponse } from "@/type/fiction";
import useFiction from "@/hooks/useFiction";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "MBTI별 평균 평점",
    },
  },
};

export default function MbtiBarChart({
  fallbackData,
}: {
  fallbackData: FictionResponse;
}) {
  const updatedData = useFiction({ fallbackData: fallbackData });
  const {
    fictionResponse: { mbtis = [] },
  } = updatedData;

  const data = {
    labels: Array.from(mbtis).map((item: any, i) => {
      return item?.mbti;
    }),
    datasets: [
      {
        label: "평균 평점",
        data: Array.from(mbtis)
          .map((item: any, i) => {
            return item?.avg;
          })
          .sort((a, b) => b - a),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      // {
      //   label: "여성",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // }
    ],
  };

  return (
    <>
      <h3 className=" mt-4 py-2 text-xl font-bold">MBTI별 선호도</h3>
      <div className=" flex items-center rounded-md bg-[#F4F4F4] sm:mt-0 ">
        <Bar options={options} data={data} />
      </div>
    </>
  );
}
