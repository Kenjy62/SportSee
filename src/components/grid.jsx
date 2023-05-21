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

  if (!isLoading) {
    return (
      <>
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3 grid grid-rows-2 gap-8">
            <div>
              <Daily />
            </div>
            <div className="grid grid-cols-3 gap-8">
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
          <div className="col-span-1">
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
