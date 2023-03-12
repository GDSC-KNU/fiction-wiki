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
import { useRouter } from "next/router";
import { Radar } from "react-chartjs-2";
import useSWR from "swr";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// interface RateUserStatForm {
//   UserFictionStat: number[];
// }

export default function FictionRadarChart(props: any) {
  const router = useRouter();

  const { data: { fiction } = {} } = useSWR<any>(
    router.query.id
      ? typeof window === "undefined"
        ? null
        : `/api/fictions/${router.query.id}`
      : null
  );

  // const {
  //   fiction: {
  //     userFictionStat: {
  //       originality,
  //       writing,
  //       character,
  //       verisimilitude,
  //       synopsisComposition,
  //       value,
  //     },
  //   },
  // } = userFictionStatData;
  // console.log(userFictionStat?._count);
  // console.log(fiction?.userFictionStat?._count?.userRationOnFictions);
  // console.log(fiction?.userFictionStat);
  const data = {
    labels: ["오리지널리티", "필력", "캐릭터성", "핍진성", "스토리", "작품성"],
    datasets: [
      {
        label: "FDBS (admin)",
        data: [
          props?.props ? parseInt(props?.props["originality"]) : 0,
          props?.props ? parseInt(props?.props["writing"]) : 0,
          props?.props ? parseInt(props?.props["character"]) : 0,
          props?.props ? parseInt(props?.props["verisimilitude"]) : 0,
          props?.props ? parseInt(props?.props["synopsisComposition"]) : 0,
          props?.props ? parseInt(props?.props["value"]) : 0,
        ],
        backgroundColor: "rgba(191, 219, 254, 0.5)",
        borderColor: "rgba(187, 187, 187, 1)",
        borderWidth: 1,
      },
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
