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

// Components
import { SessionLegend, SessionTick, SessionTooltip } from "./recharts/custom";

// Context
import { UserContext } from "../context/user";

export default function Sessions() {
  const { data, isLoading, error } = useContext(UserContext);

  return (
    <div className="relative h-40 w-full rounded-lg bg-red-500 p-2 md:h-52 xl:h-80">
      {isLoading ? (
        <div className="h-full w-full">
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
