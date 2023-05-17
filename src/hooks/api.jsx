import { useState, useEffect } from "react";

function API(url, type, value) {
  const apiUrl = `http://localhost:5000` + url;
  const apiMock = `http://localhost:3005` + url;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(url, type, value);

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
