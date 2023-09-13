"use client";

import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useContext } from "react";

import { FictionContext } from "@/context/fictionContext";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function FictionRadarChart(props: any) {
  let fictionContext = useContext(FictionContext);

  const data = {
    labels: ["오리지널리티", "필력", "캐릭터성", "핍진성", "스토리", "작품성"],
    datasets: [
      {
        label: "FDBS (admin)",
        data: [
          fictionContext?.fiction?.fictionStat.originality,
          fictionContext?.fiction?.fictionStat.writing,
          fictionContext?.fiction?.fictionStat.character,
          fictionContext?.fiction?.fictionStat.verisimilitude,
          fictionContext?.fiction?.fictionStat.synopsisComposition,
          fictionContext?.fiction?.fictionStat.value,
        ],
        backgroundColor: "rgba(191, 219, 254, 0.5)",
        borderColor: "rgba(187, 187, 187, 1)",
        borderWidth: 1,
      },
      {
        label: `유저 ${
          fictionContext?.fiction?.userFictionStat?._count
            ?.userRationOnFictions || 0
        }명`,
        data: [
          fictionContext?.fiction?.userFictionStat?.originality,
          fictionContext?.fiction?.userFictionStat?.writing,
          fictionContext?.fiction?.userFictionStat?.character,
          fictionContext?.fiction?.userFictionStat?.verisimilitude,
          fictionContext?.fiction?.userFictionStat?.synopsisComposition,
          fictionContext?.fiction?.userFictionStat?.value,
        ],
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderColor: "rgba(187, 187, 187, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
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

  return (
    <div className=" mx-2">
      <Radar data={data} options={options} />
    </div>
  );
}
