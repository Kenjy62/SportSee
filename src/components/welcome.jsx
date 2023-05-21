import { useContext } from "react";
import { UserContext } from "../context/user";

export default function Welcome() {
  const { data, isLoading, error } = useContext(UserContext);

  if (!isLoading) {
    return (
      <div className="flex gap-5 flex-col">
        <h1 className="text-3xl font-bold">
          Bonjour <font color="red">{data.fullname}</font>
        </h1>
        <span>
          Félicitation! Vous avez explosé vos objectifs hier &#128075;
        </span>
      </div>
    );
  }
}
