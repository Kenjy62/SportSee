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
      <div className="grid gap-8 xl:grid-cols-4">
        <div className=" xl:col-span-3">
          <Daily />
        </div>
        <div className="flex flex-col gap-8 md:flex-row xl:col-span-1 xl:flex-col">
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
              <div className="flex flex-row items-center justify-center gap-8 rounded-md bg-[#FBFBFB] px-2 py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-100"></div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold"></span>
                  <span className="text-md text-gray-400"></span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-8 rounded-md bg-[#FBFBFB] px-2 py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100"></div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold"></span>
                  <span className="text-md text-gray-400"></span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-8 rounded-md bg-[#FBFBFB] px-2 py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-pink-100"></div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold"></span>
                  <span className="text-md text-gray-400"></span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-8 rounded-md bg-[#FBFBFB] px-2 py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-yellow-100"></div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold"></span>
                  <span className="text-md text-gray-400"></span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="xl:col-span-3">
          <div className="grid gap-8 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
            <div className="col-span-1">
              <Sessions />
            </div>
            <div className="col-span-1">
              <Performances />
            </div>
            <div className="col-span-1">
              <Score />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
