import { useEffect, useState } from "react";

export function useShowSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [shows, setShows] = useState<
    Array<{ title: string; vote_average: number }>
  >([]);

  const API_KEY = "f5eb5d65f1d1f2716caa4b8b1c6136e9";

  useEffect(() => {
    (async function fetchShows() {
      if (searchTerm) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
            {
              method: "GET",
            }
          );

          const json = await response.json();

          console.log(json);

          setShows(
            json.data.results.map(
              (result: { title: string; vote_average: number }) => ({
                title: result.title,
                vote_average: result.vote_average,
              })
            )
          );
        } catch (error) {
          console.error("Failed to retrieve shows:", error);
        }
      }
    })();
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    shows,
  };
}
