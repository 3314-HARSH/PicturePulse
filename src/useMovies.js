import { useState, useEffect } from "react";

const KEY = "67fb4547";
export function useMovies(query, callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //Ensure that the AbortController is being created before making the fetch request each time
    //and passed to the fetchMovies function.
    const controller = new AbortController();
    // immediate function invocation
    async function fetchMovies() {
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      try {
        setIsLoading(true);
        setError("");
        callback?.();

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          throw new Error("Something went wrong with fetching movies");
        }
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("movies not found");
        }
        setMovies(data.Search);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();

    return function cleanup() {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { movies, isLoading, error };
}
