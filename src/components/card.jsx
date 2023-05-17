import { useContext } from "react";
import { UserContext } from "../context/user";

export default function Card({ type, children }) {
  const { isLoading } = useContext(UserContext);

  var customStyle = null;

  if (type === "calorieCount") {
    customStyle = { name: "Calorie", color: "bg-red-100", icon: "calorie" };
  } else if (type === "proteinCount") {
    customStyle = { name: "Proteine", color: "bg-blue-100", icon: "proteine" };
  } else if (type === "lipidCount") {
    customStyle = { name: "Lipide", color: "bg-pink-100", icon: "lipide" };
  } else if (type === "carbohydrateCount") {
    customStyle = { name: "Glucide", color: "bg-yellow-100", icon: "glucide" };
  }

  const style =
    `h-24 w-24 flex justify-center items-center rounded-md ` +
    customStyle.color;

  if (!isLoading) {
    return (
      <div className="bg-[#FBFBFB] p-8 rounded-md flex flex-row gap-8 justify-center items-center">
        <div className={style}>
          <img
            src={require(`../assets/icons/${customStyle.icon}.png`)}
            className="h-4 w-4"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl">{children}</span>
          <span className="text-md text-gray-400">{customStyle.name}</span>
        </div>
      </div>
    );
  }
}
