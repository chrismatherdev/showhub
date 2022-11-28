import { useEffect, useState } from 'react';
import axios from 'axios';

export type ShowType = Array<{
  data: {
    results: [
      {
        poster_path: string;
        original_title: string;
        vote_average: string;
      },
    ];
  };
}>;

export function useShow() {
  const [shows, setShows] = useState<ShowType[]>([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = 'https://api.themoviedb.org/3/';

  const ROUTES = [
    `${BASE_URL}discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
    `${BASE_URL}discover/tv?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
    `${BASE_URL}movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
    `${BASE_URL}tv/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
    `${BASE_URL}movie/upcoming?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
    `${BASE_URL}tv/on_the_air?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
  ];

  async function fetchCurrentShows() {
    setLoading(true);
    axios.all(ROUTES.map((route) => axios.get(route))).then((info) => {
      const showResponse = [];

      for (let i = 0; i < info.length; i++) {
        console.log(info[i].data.results, 'index');
        showResponse.push(info[i].data.results);
      }

      setShows(showResponse);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchCurrentShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    shows,
    loading,
  };
}
