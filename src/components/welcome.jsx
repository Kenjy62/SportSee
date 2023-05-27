// Required
import { useContext } from "react";

// Context
import { UserContext } from "../context/user";

/**
 * Composant du message de bienvenue.
 * @returns {JSX.Element} Le composant du message de bienvenue.
 */

export default function Welcome() {
  const { data, isLoading, error } = useContext(UserContext);

  if (error) {
    return <p> Error </p>;
  }

  return (
    <div className="relative flex flex-col gap-5">
      {isLoading ? (
        <h1 className="relative text-3xl font-bold opacity-0">
          Bonjour <font color="red">loading...</font>
        </h1>
      ) : (
        <h1 className="relative text-3xl font-bold">
          Bonjour <font color="red">{data.fullname}</font>
        </h1>
      )}
      <span>Félicitation! Vous avez explosé vos objectifs hier &#128075;</span>
    </div>
  );
}
