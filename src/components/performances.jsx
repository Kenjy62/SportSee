// Required
import {
  PolarGrid,
  PolarAngleAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";

// Context
import { UserContext } from "../context/user";

// Custom Recharts Components
import { RadarTick } from "./recharts/custom";

export default function Performances() {
  const { data, isLoading, error } = useContext(UserContext);

  return (
    <div className="bg-[#282D30] rounded-lg w-full h-40 p-2 md:h-52 xl:h-80 flex justify-center items-center">
      <ResponsiveContainer>
        <RadarChart
          data={data.performance}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
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
