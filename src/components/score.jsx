import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
} from "recharts";

import { useContext } from "react";
import { UserContext } from "../context/user";

import { ScoreLegend } from "./recharts/custom";

export default function Score() {
  const { data, isLoading, error } = useContext(UserContext);

  const dataUpdate = [
    ...data.todayScore,
    { name: "Score", score: 100, fill: "white" },
  ];

  return (
    <div className="bg-[white] rounded-lg relative w-full h-40 md:h-52 xl:h-80 flex flex-col">
      <div className="ml-10 font-semibold text-xl">Score</div>
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="100%"
          barSize={10}
          startAngle={180}
          endAngle={-180}
          data={dataUpdate}
        >
          <RadialBar background dataKey="score" fill="#E60000" />
          <Legend
            content={<ScoreLegend />}
            verticalAlign="middle"
            layout="vertical"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
