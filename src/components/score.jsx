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
    <div className="relative flex h-40 w-full flex-col rounded-md bg-[#FBFBFB] md:h-52 xl:h-80">
      <div className="absolute left-2 top-2 ml-1 font-semibold md:text-lg xl:text-xl">
        Score
      </div>
      {isLoading ? (
        <div className="h-[360px] w-full rounded-md bg-[#FBFBFB]">
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
