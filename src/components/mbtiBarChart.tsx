"use client";

import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type {
  Fiction,
  FictionStat,
  Keyword,
  UserRationOnFiction,
  // KeywordsOnFictions,
  Author,
  Category,
} from "@prisma/client";
// import client from "@libs/server/client";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";
import { useParams } from "next/navigation";

import { FictionContext } from "@/context/fictionContext";

interface FictionDetailResponse {
  ok: boolean;
  fiction: FictionWithMore;
  similarFictions: Fiction[];
  isLiked: boolean;
  reviews: any;
}

interface FictionWithMore extends Fiction {
  keywords: [
    {
      keyword: Keyword;
    }
  ];
  fictionStat: FictionStat;
  userFictionStat: {
    userRationOnFictions: [UserRationOnFiction];
    total: number;
    _count: {
      userRationOnFictions: number;
    };
  };
  author: Author;
  categories: [
    {
      category: Category;
    }
  ];
}

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

export default function MbtiBarChart({ mbtis }: any) {
  let fictionContext = useContext(FictionContext);
  const params = useParams();
  const { id } = params;

  const { data: fiction, mutate: boundMutate } = useSWR<FictionDetailResponse>(
    id ? `/api/fictions/${id}` : null
  );

  if (!fiction) return <div>loading...</div>;

  const data = {
    labels: Array.from(fictionContext.mbtis).map((item: any, i) => {
      return item?.mbti;
    }),
    datasets: [
      {
        label: "평균 평점",
        data: Array.from(fictionContext.mbtis)
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

  // const userRationOnFictions =
  //   fiction?.fiction?.userFictionStat?.userRationOnFictions;

  return (
    <>
      <h3 className=" mt-4 py-2 text-xl font-bold">MBTI별 선호도</h3>
      <div className=" flex items-center rounded-md bg-[#F4F4F4] sm:mt-0 ">
        <Bar options={options} data={data} />
      </div>
    </>
  );
}
