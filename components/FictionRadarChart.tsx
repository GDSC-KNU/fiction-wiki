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
  console.log(props);
  const data = [
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
          name="유저 스코어"
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
