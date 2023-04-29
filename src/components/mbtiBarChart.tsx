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
import type {
  Fiction,
  FictionStat,
  Keyword,
  UserRationOnFiction,
  // KeywordsOnFictions,
  Author,
  Category,
} from "@prisma/client";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";
import { useRouter } from "next/router";

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

// const mbtiTypes = [
//   "ISTJ",
//   "ISFJ",
//   "INFJ",
//   "INTJ",
//   "ISTP",
//   "ISFP",
//   "INFP",
//   "INTP",
//   "ESTP",
//   "ESFP",
//   "ENFP",
//   "ENTP",
//   "ESTJ",
//   "ESFJ",
//   "ENFJ",
//   "ENTJ",
// ];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "남성",
//       data: labels.map((item, i) => labels.length - i),
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "여성",
//       data: labels.map((item, i) => labels.length - i - 0.3),
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

// Array.from(mbtis).reduce((acc: any, cur: any, i: number) => {
//   acc[i] = {

//     data: mbtis[i].cnt,

//   };
//   return acc;
// }, [])

function MbtiBarChart({ mbtis }: any) {
  const router = useRouter();
  const { data: fiction, mutate: boundMutate } = useSWR<FictionDetailResponse>(
    router.query.id ? `/api/fictions/${router.query.id}` : null
  );
  // console.log(mbtis);
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

  // const userRationOnFictions =
  //   fiction?.fiction?.userFictionStat?.userRationOnFictions;

  return <Bar options={options} data={data} />;
}

export default MbtiBarChart;
