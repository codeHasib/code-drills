// Custom Hook for useFetch

import { useEffect, useState } from "react";

export const useFetch = (api) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(api);
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, [api]);
  return [data];
};
