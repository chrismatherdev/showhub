import { createContext, useContext, useEffect, useState } from 'react';

type SearchResults = Array<{
  popularity: number;
}>;

export function useShowSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [shows, setShows] = useState<SearchResults>([]);

  const API_KEY = 'f5eb5d65f1d1f2716caa4b8b1c6136e9';

  useEffect(() => {
    (async function fetchShows() {
      if (searchTerm) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
            {
              method: 'GET',
            },
          );

          const { results } = await response.json();

          console.log(results);

          setShows(
            results.map((result: any) => ({
              popularity: result.popularity,
            })),
          );
          console.log(shows);
        } catch (error) {
          console.error('Failed to retrieve shows:', error);
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

const ShowContext = createContext<ReturnType<typeof useShowSearch> | null>(null);

export function ShowProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const show = useShowSearch();

  return <ShowContext.Provider value={show}>{children}</ShowContext.Provider>;
}

export function useShows() {
  const show = useContext(ShowContext);

  if (!show) {
    throw new Error('useForecast must be wrapped in a ForecastProvider');
  }

  return show;
}
