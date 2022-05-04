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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function FictionRadarChart(props: any) {
  console.log(props);
  const data2 = [
    {
      subject: "오리지널리티",
      A: props.props ? props?.props[0] : 0,
      B: props.props ? props.props.originality : 0,
      fullMark: 5,
    },
    {
      subject: "필력",
      A: props.props ? props?.props[1] : 0,
      B: props.props ? props.props.writing : 0,
      fullMark: 5,
    },
    {
      subject: "캐릭터성",
      A: props.props ? props?.props[2] : 0,
      B: props.props ? props.props.character : 0,
      fullMark: 5,
    },
    {
      subject: "핍진성",
      A: props.props ? props?.props[3] : 0,
      B: props.props ? props.props.verisimilitude : 0,
      fullMark: 5,
    },
    {
      subject: "스토리",
      A: props.props ? props?.props[4] : 0,
      B: props.props ? props.props.synopsisComposition : 0,
      fullMark: 5,
    },
    {
      subject: "작품성",
      A: props.props ? props?.props[5] : 0,
      B: props.props ? props.props.value : 0,
      fullMark: 5,
    },
  ];
  console.log(props);

  let data = {
    labels: ["오리지널리티", "필력", "캐릭터성", "핍진성", "스토리", "작품성"],
    datasets: [
      {
        label: "FDBS (admin)",
        data: [
          props.props ? props?.props["originality"] : 0,
          props.props ? props?.props["writing"] : 0,
          props.props ? props?.props["character"] : 0,
          props.props ? props?.props["verisimilitude"] : 0,
          props.props ? props?.props["synopsisComposition"] : 0,
          props.props ? props?.props["value"] : 0,
        ],
        backgroundColor: "rgba(191, 219, 254, 0.5)",
        borderColor: "rgba(187, 187, 187, 1)",
        borderWidth: 1,
      },
      {
        label: "유저 (n)",
        data: [4, 5, 2, 3, 3, 3],
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

  return (
    <div className=" mx-10 ">
      <Radar data={data} options={options} />
    </div>
  );
}
