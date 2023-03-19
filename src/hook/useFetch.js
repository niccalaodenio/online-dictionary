import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [url]);

  return [data, setData];
}

export default useFetch;