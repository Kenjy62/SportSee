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
    <div className="relative flex h-40 w-full items-center justify-center rounded-lg bg-[#282D30] p-2 md:h-52 xl:h-80">
      {isLoading ? (
        <div className="h-full w-full">
          <div className="shimmer"></div>
        </div>
      ) : (
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
      )}
    </div>
  );
}
