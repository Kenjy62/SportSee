import { useState, useEffect } from "react";

/**
 * Hook pour gérer les calls API
 * @param {String} url endpoint de l'api
 * @return {object} Retourne les données, l'état de chargement, les erreurs.
 */

function API(url) {
  const apiUrl = `http://localhost:5000` + url;
  const apiMock = `http://localhost:3005` + url;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);

      console.log("here");
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, error };
}

export default API;
