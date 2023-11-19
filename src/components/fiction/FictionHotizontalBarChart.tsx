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
import { userFictionStatOptions } from "@constants/options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top" as const,
//     },
//     title: {
//       display: true,
//       text: "MBTI별 평균 평점",
//     },
//   },
// };

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  indexAxis: "y" as const,
  scales: {
    x: {
      min: 0,
      max: 5,
      ticks: {
        stepSize: 1,
      },
      pointLabels: {
        font: {
          size: 16,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          color: "#BBBBBB",
        },
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 13,
        },
      },
    },
  },
};

const labels = userFictionStatOptions.map((item) => item.kor);

export default function FictionHorizonTalBarChart({
  fallbackData,
}: {
  fallbackData: FictionResponse;
}) {
  //   const updatedData = useFiction({ fallbackData: fallbackData });
  const {
    fictionResponse: { fiction },
  } = useFiction({ fallbackData });

  const data = {
    labels: labels,
    datasets: [
      //   {
      //     label: "FDBS (admin)",
      //     data: [
      //       fiction?.fictionStat.originality,
      //       fiction?.fictionStat.writing,
      //       fiction?.fictionStat.character,
      //       fiction?.fictionStat.verisimilitude,
      //       fiction?.fictionStat.synopsisComposition,
      //       fiction?.fictionStat.value,
      //     ],
      //     backgroundColor: "rgba(191, 219, 254, 0.5)",
      //     borderColor: "rgba(187, 187, 187, 1)",
      //     borderWidth: 1,
      //   },
      {
        label: `유저 ${
          fiction?.userFictionStat?._count?.userRationOnFictions || 0
        }명`,
        data: [
          fiction?.userFictionStat?.originality,
          fiction?.userFictionStat?.writing,
          fiction?.userFictionStat?.character,
          fiction?.userFictionStat?.verisimilitude,
          fiction?.userFictionStat?.synopsisComposition,
          fiction?.userFictionStat?.value,
        ],
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderColor: "rgba(187, 187, 187, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className=" p-3">
      <h3 className=" mt-4 py-2 text-xl font-bold sm:mt-0 sm:py-2">평점</h3>
      <div className=" flex items-center rounded-md bg-[#F4F4F4] sm:mt-0 ">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
