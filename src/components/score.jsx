// Required
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import { useContext } from "react";

// Context
import { UserContext } from "../context/user";

// Components
import { ScoreLegend } from "./recharts/custom";

export default function Score() {
  const { data, isLoading, error } = useContext(UserContext);

  var dataUpdate = null;

  if (!isLoading) {
    dataUpdate = [
      ...data.todayScore,
      { name: "Score", score: 100, fill: "#FBFBFB" },
    ];
  }

  return (
    <div className="rounded-md relative w-full h-40 md:h-52 xl:h-80 flex flex-col bg-[#FBFBFB]">
      <div className="ml-10 font-semibold text-xl absolute top-2 left-2">
        Score
      </div>
      {isLoading ? (
        <div className="w-full h-[360px] bg-[#FBFBFB] rounded-md">
          <div className="shimmer"></div>
        </div>
      ) : (
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
            <RadialBar background dataKey="score" fill="#fff" />
            <Legend
              content={<ScoreLegend />}
              verticalAlign="middle"
              layout="vertical"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
