import { useContext } from "react";
import { UserContext } from "../context/user";

/**
 * Composant Card utilisé pour afficher une carte avec des informations spécifiques.
 * @param {string} type - Le type de carte à afficher.
 * @param {ReactNode} children - Les éléments enfants à afficher dans la carte.
 * @returns {JSX.Element} Le composant Card.
 */

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
      <div className="flex flex-row items-center justify-center gap-8 rounded-md bg-[#FBFBFB] px-2 py-6 shadow-sm md:flex-[calc(100%/2)] lg:flex-[calc(100%/4)]">
        <div className={style}>
          <img
            src={require(`../assets/icons/${customStyle.icon}.png`)}
            className="h-4 w-4"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold">{children}</span>
          <span className="text-md text-gray-400">{customStyle.name}</span>
        </div>
      </div>
    );
  }
}
