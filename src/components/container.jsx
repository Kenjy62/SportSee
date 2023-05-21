import { useContext, useEffect } from "react";

import { UserContext } from "../context/user";

export default function Container({ children }) {
  const { LoadUser, isLoading } = useContext(UserContext);

  useEffect(() => {
    let isLoaded = true;

    if (isLoaded === true) {
      LoadUser(12);
    }

    return () => (isLoaded = false);
  }, []);

  if (!isLoading) {
    return (
      <div className="w-full h-full p-4 overflow-hidden overflow-y-scroll lg:p-6">
        {children}
      </div>
    );
  }
}
