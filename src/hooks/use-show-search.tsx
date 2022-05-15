import { useEffect, useState } from 'react';

type SearchResults = Array<{
  title: string;
  poster_path: string;
}>;

export function useShowSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResults>([]);

  useEffect(() => {
    (async function fetchShows() {
      if (searchTerm) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=${
              import.meta.env.VITE_TMDB_API_KEY
            }&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
          );

          const { results } = await response.json();

          setSearchResults(
            results.map(
              (result: { original_title: string; title: string; poster_path: string }) => ({
                title: result.original_title || result.title,
                poster_path: result.poster_path,
              }),
            ),
          );
          console.log('Search Results', searchResults);
        } catch (error) {
          console.error(error);
        }
      }
    })(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
  };
}
