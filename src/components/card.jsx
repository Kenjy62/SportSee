import API from "../hooks/api";

import Shimmer from "./shimmer";

export default function Card({ color, icon, type }) {
  const { data, isLoading, error } = API(
    "http://localhost:3000/user/12/",
    "Card",
    type
  );

  const style =
    `h-24 w-24 flex justify-center items-center rounded-md ` + color;

  return (
    <div className="bg-[#FBFBFB] p-8 rounded-md flex flex-row gap-8 justify-center items-center">
      <div className={style}>
        <img src={require(`../assets/icons/${icon}.png`)} className="h-4 w-4" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl">
          {(isLoading && !error) || error ? (
            <Shimmer classe="w-full h-5 bg-gray-200 rounded-lg" />
          ) : (
            data
          )}
        </span>
        <span className="text-md text-gray-400">{type}</span>
      </div>
    </div>
  );
}
