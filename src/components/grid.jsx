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

  const style = {
    grid: {
      sm: "grid grid-rows-1",
      lg: "lg:grid  lg:grid-cols-6",
      xl: "xl:grid  xl:grid-cols-8",
    },
    grid2: {
      sm: "col-span-1 grid grid-rows-1",
      lg: "lg:col-span-5 lg:grid lg:grid-rows-2 lg:gap-8",
      xl: "xl:col-span-6 xl:grid xl:grid-rows-2 xl:gap-8",
    },
    session: {
      sm: "grid grid-cols-1 gap-8",
      lg: "lg:grid lg:grid-cols-3 lg:gap-8",
    },
  };

  if (!isLoading) {
    return (
      <>
        <div className={`${style.grid.sm} ${style.grid.lg} ${style.grid.xl}`}>
          <div
            className={`${style.grid2.sm} ${style.grid2.lg} ${style.grid2.xl}`}
          >
            <div>
              <Daily />
            </div>
            <div className={`${style.session.sm} ${style.session.lg}`}>
              <div className="h-fit">
                <Sessions />
              </div>
              <div className="h-fit">
                <Performances />
              </div>
              <div>
                <Score />
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 xl:col-span-2">
            <div className="grid grid-rows-4 gap-8">
              {data.keyData.map((item) => {
                return (
                  <Card key={item} type={item[0]}>
                    {item[1]}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
