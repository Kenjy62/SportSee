// Required
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";

// Context
import { UserContext } from "../context/user";

// Components
import { DailyRightTick, DailyTick, DailyTooltip } from "./recharts/custom";

export default function Daily() {
  const { data, isLoading, error } = useContext(UserContext);

  return (
    <>
      <div className="flex justify-between items-center my-6 w-full">
        <span className="font-semibold">Activité Quotidienne</span>
        <div className="flex flex-row gap-4 items-center mr-8">
          <span className="h-3 w-3 rounded-full bg-black"></span>
          <span>Poids (kg)</span>
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span>Calories brûlées</span>
        </div>
      </div>
      <div className="w-full h-full my-14 relative">
        {isLoading ? (
          <div className="w-full h-[360px] bg-gray-300">
            <div className="shimmer"></div>
          </div>
        ) : (
          <ResponsiveContainer height={360}>
            <BarChart data={data.activity}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="day"
                tickMargin={15}
                tick={DailyTick}
                tickLine={false}
              />
              <YAxis
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={DailyRightTick}
              />
              <Tooltip content={<DailyTooltip />} />
              <Bar
                barSize={10}
                dataKey="kilogram"
                fill="black"
                radius={[50, 50, 0, 0]}
              />
              <Bar
                barSize={10}
                dataKey="calories"
                fill="red"
                radius={[50, 50, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
}
