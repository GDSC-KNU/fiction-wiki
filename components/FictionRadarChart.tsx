import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export default function FictionRadarChart(props: any) {
  const data = [
    {
      subject: "오리지널리티",
      A: props.wStatus ? props?.wStatus[0] : 0,
      B: 1,
      fullMark: 10,
    },
    {
      subject: "핍진성",
      A: props.wStatus ? props?.wStatus[1] : 0,
      B: 3,
      fullMark: 10,
    },
    {
      subject: "작품성",
      A: props.wStatus ? props?.wStatus[2] : 0,
      B: 3,
      fullMark: 10,
    },
    {
      subject: "필력",
      A: props.wStatus ? props?.wStatus[3] : 0,
      B: 1,
      fullMark: 10,
    },
    {
      subject: "캐릭터성",
      A: props.wStatus ? props?.wStatus[4] : 0,
      B: 10,
      fullMark: 10,
    },
    {
      subject: "스토리",
      A: props.wStatus ? props?.wStatus[5] : 0,
      B: 3,
      fullMark: 10,
    },
  ];

  return (
    <div className=" mx-auto w-fit h-[510px]">
      <RadarChart
        cx={200}
        cy={250}
        outerRadius={150}
        width={400}
        height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar
          name="남성"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="여성"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
}
