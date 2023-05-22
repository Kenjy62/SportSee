// Required
import { useContext } from "react";

// Context
import { UserContext } from "../context/user";

export default function Welcome() {
  const { data, isLoading, error } = useContext(UserContext);

  if (error) {
    return <p> Error </p>;
  }

  return (
    <div className="flex gap-5 flex-col relative">
      {isLoading ? (
        <h1 className="text-3xl font-bold relative opacity-0">
          Bonjour <font color="red">loading...</font>
        </h1>
      ) : (
        <h1 className="text-3xl font-bold relative">
          Bonjour <font color="red">{data.fullname}</font>
        </h1>
      )}
      <span>Félicitation! Vous avez explosé vos objectifs hier &#128075;</span>
    </div>
  );
}
