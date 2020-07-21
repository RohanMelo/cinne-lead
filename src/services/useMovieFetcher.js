import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import getEnvVars from "../../environment";

const { apiKey } = getEnvVars();

// Custom Hook that uses Axios to fetch data from theMovieDB api. By using it on pages where you need to fetch data, you can easily set up conditional rendering with data, isLoading and isError.

const useMovieFetcher = () => {
  // Access Redux store to get the string searchTerm
  const searchTerm = useSelector(store => store.searchTerm);
  let storeUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${
    searchTerm.searchTerm
  }&include_adult=false&sort_by=popularity.desc`;

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
