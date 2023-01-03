import { useEffect, useState } from 'react';
import axios from 'axios';

export type ShowAPIResponseType = {
  data: {
    results: ShowResultType[];
  };
  status: number;
  statusText: string;
  headers: object;
  config: object;
  id: number;
};

export type ShowResultType = {
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_name?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export function useShow() {
  const [shows, setShows] = useState<ShowResultType[]>([]);
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
