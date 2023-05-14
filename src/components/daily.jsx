import { PureComponent, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

import API from "../hooks/api";
import Shimmer from "./shimmer";

export default function Daily() {
  const { data, isLoading, error } = API(
    "http://localhost:3000/user/12/activity",
    "Daily"
  );

  return (
    <>
      <div className="flex justify-between items-center my-6">
        <span className="font-semibold">Activité Quotidienne</span>
        <div className="flex flex-row gap-4 items-center mr-8">
          <span className="h-3 w-3 rounded-full bg-black"></span>
          <span>Poids (kg)</span>
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span>Calories brûlées</span>
        </div>
      </div>
      <div className="w-full h-full my-14">
        {(isLoading && !error) || error ? (
          <Shimmer classe="w-full h-[360px] bg-gray-200 rounded-lg" />
        ) : (
          <ResponsiveContainer height={360}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tickMargin={15} />
              <YAxis orientation="right" />
              <Tooltip />
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
