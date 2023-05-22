// Required
import { useContext } from "react";

// Context
import { UserContext } from "../context/user";

// Components
import Daily from "./daily";
import Card from "./card";
import Sessions from "./sessions";
import Performances from "./performances";
import Score from "./score";

export default function Grid() {
  const { isLoading, data, error } = useContext(UserContext);

  return (
    <>
      <div
        className={`grid grid-rows-1 lg:grid lg:grid-cols-6 xl:grid xl:grid-cols-8 w-full my-6 gap-8`}
      >
        <div
          className={`col-span-1 grid grid-rows-1 lg:col-span-5 lg:grid lg:grid-rows-2 lg:gap-8 xl:col-span-6 xl:grid xl:grid-rows-2 xl:gap-8 w-full`}
        >
          <div className="flex flex-col justify-between items-stretch w-full bg-[#FBFBFB] pl-4 rounded-md shadow-sm">
            <Daily />
          </div>
          <div
            className={`grid grid-cols-1 gap-8 lg:grid lg:grid-cols-3 lg:gap-8`}
          >
            <div>
              <Sessions />
            </div>
            <div>
              <Performances />
            </div>
            <div>
              <Score />
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 xl:col-span-2">
          <div className="grid grid-rows-4 gap-8">
            {!isLoading ? (
              data.keyData.map((item) => {
                return (
                  <Card key={item} type={item[0]}>
                    {item[1]}
                  </Card>
                );
              })
            ) : (
              <>
                <div className="bg-[#FBFBFB] px-2 py-6 rounded-md flex flex-row gap-8 justify-center items-center">
                  <div className="h-12 w-12 flex justify-center items-center rounded-md bg-red-500"></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl"></span>
                    <span className="text-md text-gray-400"></span>
                  </div>
                </div>
                <div className="bg-[#FBFBFB] px-2 py-6 rounded-md flex flex-row gap-8 justify-center items-center">
                  <div className="h-12 w-12 flex justify-center items-center rounded-md bg-red-500"></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl"></span>
                    <span className="text-md text-gray-400"></span>
                  </div>
                </div>
                <div className="bg-[#FBFBFB] px-2 py-6 rounded-md flex flex-row gap-8 justify-center items-center">
                  <div className="h-12 w-12 flex justify-center items-center rounded-md bg-red-500"></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl"></span>
                    <span className="text-md text-gray-400"></span>
                  </div>
                </div>
                <div className="bg-[#FBFBFB] px-2 py-6 rounded-md flex flex-row gap-8 justify-center items-center">
                  <div className="h-12 w-12 flex justify-center items-center rounded-md bg-red-500"></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl"></span>
                    <span className="text-md text-gray-400"></span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
