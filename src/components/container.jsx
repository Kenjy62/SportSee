// required
import { useContext, useEffect } from "react";

// Context
import { UserContext } from "../context/user";

export default function Container({ children }) {
  const { LoadUser } = useContext(UserContext);

  useEffect(() => {
    let isLoaded = true;

    if (isLoaded === true) {
      LoadUser(12);
    }

    return () => (isLoaded = false);
  }, []);

  return (
    <div className="w-full h-full p-4 overflow-hidden overflow-y-scroll lg:p-6">
      {children}
    </div>
  );
}
