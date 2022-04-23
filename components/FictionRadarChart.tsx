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
      fullMark: 5,
    },
    {
      subject: "필력",
      A: props.wStatus ? props?.wStatus[1] : 0,
      B: 3,
      fullMark: 5,
    },
    {
      subject: "캐릭터성",
      A: props.wStatus ? props?.wStatus[2] : 0,
      B: 3,
      fullMark: 5,
    },
    {
      subject: "핍진성",
      A: props.wStatus ? props?.wStatus[3] : 0,
      B: 1,
      fullMark: 5,
    },
    {
      subject: "스토리",
      A: props.wStatus ? props?.wStatus[4] : 0,
      B: 5,
      fullMark: 5,
    },
    {
      subject: "작품성",
      A: props.wStatus ? props?.wStatus[5] : 0,
      B: 3,
      fullMark: 5,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400} className=" overflow-hidden">
      <RadarChart
        className=" mx-auto"
        // cx={200}
        // cy={250}
        // outerRadius={150}
        // width={400}
        // height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 5]} />
        <Radar
          name="독자 스코어"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="FDBS 스코어"
          dataKey="B"
          stroke="#BFDBFE"
          fill="#BFDBFE"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}
