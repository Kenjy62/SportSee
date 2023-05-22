import { useContext } from "react";
import { UserContext } from "../context/user";

export default function Card({ type, children }) {
  const { isLoading } = useContext(UserContext);

  var customStyle = null;

  if (type === "calorieCount") {
    customStyle = { name: "Calories", color: "bg-red-100", icon: "calorie" };
  } else if (type === "proteinCount") {
    customStyle = { name: "Proteines", color: "bg-blue-100", icon: "proteine" };
  } else if (type === "lipidCount") {
    customStyle = { name: "Lipides", color: "bg-pink-100", icon: "lipide" };
  } else if (type === "carbohydrateCount") {
    customStyle = { name: "Glucides", color: "bg-yellow-100", icon: "glucide" };
  }

  const style =
    `h-12 w-12 flex justify-center items-center rounded-md ` +
    customStyle.color;

  if (!isLoading) {
    return (
      <div className="bg-[#FBFBFB] px-2 py-6 rounded-md flex flex-row gap-8 justify-center items-center shadow-sm">
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
