import { useState, useEffect } from "react";
import axios from "axios";

// Custom Hook that uses Axios to fetch data from theMovieDB api. By using it on pages where you need to fetch data, you can easily set up conditional rendering with data, isLoading and isError.

const useMovieFetcher = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Cannot use async directly on useEffect hook!

  useEffect(
    () => {
      let mounted = true;
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
          const result = await axios(url);
          if (mounted) {
            setData(result.data);
          }
        } catch (error) {
          setIsError(true);
          setData([]);
        }

        setIsLoading(false);
      };

      fetchData();

      return () => (mounted = false);
    },
    [url]
  );

  return [{ data, isLoading, isError }, setUrl];
};

export default useMovieFetcher;
