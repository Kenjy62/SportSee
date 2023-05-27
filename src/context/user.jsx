import User from "../class/user";

import { createContext, useState } from "react";

export const UserContext = createContext();

/**
 * Fournisseur de contexte pour l'user.
 * @param {object} props - Les propriétés du composant.
 * @param {ReactNode} props.children - Les composants enfants.
 * @returns {JSX.Element} Le composant Fournisseur de contexte.
 */

export const UserProvider = ({ children }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const burl = {
    api: "http://localhost:5000/user/",
    mock: "http://localhost:3005/user/",
  };

  /**
   * Permet de récupérer les informations d'un utilisateur à partir de son id et de les sauvergarder dans le state data
   * @param {number} id
   */

  const LoadUser = async (id) => {
    try {
      const mainInfos = await fetch(burl.api + id);
      const mainInfosParse = await mainInfos.json();

      const activityInfos = await fetch(burl.api + id + "/activity");
      const activityInfosParse = await activityInfos.json();

      const averageSessionInfos = await fetch(
        burl.api + id + "/average-sessions"
      );
      const averageSessionInfosParse = averageSessionInfos.json();

      const performanceInfos = await fetch(burl.api + id + "/performance");
      const performanceInfosParse = await performanceInfos.json();

      let user = {
        ...mainInfosParse.data,
        ...activityInfosParse.data,
        ...averageSessionInfosParse.data,
        ...performanceInfosParse.data,
      };

      const modelUser = new User(user);
      setData(modelUser);
      setIsLoading(false);
    } catch (error) {
      try {
        const infos = await fetch(burl.mock + id);
        const infosParse = await infos.json();

        const modelUser = new User(infosParse);
        setData(modelUser);
        setIsLoading(false);
      } catch {}
    }
  };

  return (
    <UserContext.Provider value={{ LoadUser, data, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};
