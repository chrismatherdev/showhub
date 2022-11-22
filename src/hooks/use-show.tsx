import { useEffect, useState } from 'react';
import Axios from 'axios';
import axios from 'axios';

export type Shows = Array<{
  poster_path: string;
  original_title: string;
  vote_average: number;
}>;

export function useShow() {
  const [shows, setShows] = useState([]);
  const [popularMovies, setPopularMovies] = useState<Shows>([]);
  const [popularTvShows, setPopularTvShows] = useState<Shows>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Shows>([]);
  const [topRatedTvShows, setTopRatedTvShows] = useState<Shows>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Shows>([]);
  const [upcomingTv, setUpcomingTv] = useState<Shows>([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = 'https://api.themoviedb.org/3/';

  const POPULAR_MOVIES_URL = `${BASE_URL}discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }`;

  const POPULAR_TV_URL = `${BASE_URL}discover/tv?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

  const TOP_RATED_MOVIES_URL = `${BASE_URL}movie/top_rated?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }`;

  const TOP_RATED_TV_URL = `${BASE_URL}tv/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

  const UPCOMING_MOVIES_URL = `${BASE_URL}movie/upcoming?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }`;

  const UPCOMING_TV_URL = `${BASE_URL}tv/on_the_air?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

  const fetchShows = async () => {
    try {
      const res = await Promise.all([
        fetch(`${BASE_URL}discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}`),
      ]);
      console.log(res, 'res');
    } catch {
      throw Error('Promise failed');
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  // POPULAR MOVIES
  async function getPopularMovies() {
    const popularData = await Axios.get(POPULAR_MOVIES_URL);
    setPopularMovies(popularData.data.results);
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

  // TOP RATED MOVIES
  async function getTopRatedMovies() {
    const topRatedData = await Axios.get(TOP_RATED_MOVIES_URL);
    setTopRatedMovies(topRatedData.data.results);
  }

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  // POPULAR TV SERIES
  async function getPopularTVShows() {
    const popularTvData = await Axios.get(POPULAR_TV_URL);
    setPopularTvShows(popularTvData.data.results);
  }
  console.log(popularTvShows);
  useEffect(() => {
    getPopularTVShows();
  }, []);

  // TOP RATED TV SERIES
  async function getTopRatedTvShows() {
    const topRatedTvData = await Axios.get(TOP_RATED_TV_URL);
    setTopRatedTvShows(topRatedTvData.data.results);
  }
  useEffect(() => {
    getTopRatedTvShows();
  }, []);

  // UPCOMING MOVIES
  async function getUpcomingMovies() {
    const upcomingMovieData = await Axios.get(UPCOMING_MOVIES_URL);
    setUpcomingMovies(upcomingMovieData.data.results);
  }
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  // UPCOMING TV
  async function getUpcomingTv() {
    const upcomingTvData = await Axios.get(UPCOMING_TV_URL);
    setUpcomingTv(upcomingTvData.data.results);
  }
  useEffect(() => {
    getUpcomingTv();
  }, []);

  // Cleaner Call
  // async function fetchCurrentShows() {
  //   Axios.all(ROUTES.map((route) => axios.get(route))).then((data) =>
  //     console.log(data, 'clean call'),
  //   );
  // }

  // useEffect(() => {
  //   fetchCurrentShows();
  // });

  return {
    shows,
    popularMovies,
    popularTvShows,
    topRatedMovies,
    loading,
    topRatedTvShows,
    upcomingMovies,
    upcomingTv,
  };
}
