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
    <div className="h-full w-full overflow-hidden overflow-y-scroll p-4 lg:p-6">
      {children}
    </div>
  );
}
