import { useState, useEffect } from "react";

function API(url, type, value) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const json = await response.json();

        if (type === "Daily") {
          setData(json.data.sessions);
        } else if (type === "Card") {
          if (value === "calories") {
            setData(json.data.keyData.calorieCount);
          } else if (value === "proteines") {
            setData(json.data.keyData.proteinCount);
          } else if (value === "glucides") {
            setData(json.data.keyData.carbohydrateCount);
          } else if (value === "lipides") {
            setData(json.data.keyData.lipidCount);
          }
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default API;
