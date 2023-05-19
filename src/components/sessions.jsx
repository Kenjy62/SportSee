import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

import { useContext } from "react";

import { UserContext } from "../context/user";

import renderLegend from "./recharts/legend";
import CustomTick from "./recharts/customTick";
import CustomTooltip from "./recharts/customTooltip";

export default function Sessions() {
  const { data, isLoading, error } = useContext(UserContext);

  console.log(data);

  return (
    <div className="bg-red-500 rounded-lg w-full h-80">
      <ResponsiveContainer height={300}>
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
            tick={CustomTick}
            dy={15}
          />
          <Tooltip content={CustomTooltip} />
          <Legend
            verticalAlign="top"
            align="left"
            stroke="white"
            iconSize={0}
            wrapperStyle={{ fontSize: "20px", color: "white" }}
            content={renderLegend}
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
    </div>
  );
}
