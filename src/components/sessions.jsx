import {
  LineChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";

// Custom Recharts Components
import { SessionLegend, SessionTick, SessionTooltip } from "./recharts/custom";

// Context
import { UserContext } from "../context/user";

export default function Sessions() {
  const { data, isLoading, error } = useContext(UserContext);

  return (
    <div className="bg-red-500 rounded-lg w-full p-2 h-40 md:h-52 xl:h-80 relative">
      {isLoading ? (
        <div className="w-full h-full">
          <div className="shimmer"></div>
        </div>
      ) : (
        <ResponsiveContainer>
          <LineChart data={data.averageSession}>
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              vertical={false}
            />
            <XAxis
              dataKey="day"
              stroke="white"
              axisLine={false}
              tickLine={false}
              tick={SessionTick}
              dy={15}
            />
            <Tooltip content={SessionTooltip} />
            <Legend
              verticalAlign="top"
              align="left"
              stroke="white"
              iconSize={0}
              content={SessionLegend}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="white"
              dot={false}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
