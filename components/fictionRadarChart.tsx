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
import useSWR, { useSWRConfig } from "swr";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RateUserStatForm {
  UserFictionStat: number[];
}

export default function FictionRadarChart(props: any) {
  // console.log(props)
  const router = useRouter();

  const { data: UserStatData, mutate: boundMutate } = useSWR<any>(
    router.query.id
      ? typeof window === "undefined"
        ? null
        : `/api/fictions/${router.query.id}`
      : null
  );

  let data = {
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
          +UserStatData?.prevFiction?.userFictionStat?._count?.users || 0
        }명`,
        data: [
          UserStatData?.prevFiction?.userFictionStat
            ? parseInt(UserStatData?.prevFiction?.userFictionStat?.originality)
            : 0,
          UserStatData?.prevFiction?.userFictionStat
            ? parseInt(UserStatData?.prevFiction?.userFictionStat?.writing)
            : 0,
          UserStatData?.prevFiction?.userFictionStat
            ? parseInt(UserStatData?.prevFiction?.userFictionStat?.character)
            : 0,
          UserStatData?.prevFiction?.userFictionStat
            ? parseInt(
                UserStatData?.prevFiction?.userFictionStat?.verisimilitude
              )
            : 0,
          UserStatData?.prevFiction?.userFictionStat
            ? parseInt(
                UserStatData?.prevFiction?.userFictionStat?.synopsisComposition
              )
            : 0,
          UserStatData?.prevFiction?.userFictionStat
            ? parseInt(UserStatData?.prevFiction?.userFictionStat?.value)
            : 0,
        ],
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderColor: "rgba(187, 187, 187, 1)",
        borderWidth: 1,
      },
      // {
      //   data: [0, 0, 0, 0, 0, 0],
      // },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        // suggestedMin: 0,
        // suggestedMax: 5,
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
          // This more specific font property overrides the global property
          font: {
            size: 13,
          },
        },
      },
    },
  };
  // console.log(UserStatData);

  return (
    <div className=" mx-2">
      <Radar data={data} options={options} />
    </div>
  );
}
