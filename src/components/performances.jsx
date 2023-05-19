import {
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import { useContext } from "react";
import { UserContext } from "../context/user";
import RadarTick from "./recharts/radarTick";

export default function Performances() {
  const { data, isLoading, error } = useContext(UserContext);

  return (
    <div className="bg-[#282D30] rounded-lg w-full h-80 flex justify-center items-center">
      <ResponsiveContainer height={280}>
        <RadarChart
          height={280}
          data={data.performance}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            axisLine={false}
            ticks={false}
            dataKey="name"
            stroke="white"
            tick={RadarTick}
            tickLine={false}
          />
          <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
