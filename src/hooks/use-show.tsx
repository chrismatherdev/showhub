// import { useEffect, useState } from 'react';
// import Axios from 'axios';

// export type Shows = Array<{
//   poster_path: string;
//   original_title: string;
//   original_language: string;
//   vote_average: number;
// }>;

// export function useShow() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [shows, setShows] = useState([]);
//   const [popularMovies, setPopularMovies] = useState<Shows>([]);
//   const [popularTvShows, setPopularTvShows] = useState<Shows>([]);
//   const [topRatedMovies, setTopRatedMovies] = useState<Shows>([]);
//   const [topRatedTvShows, setTopRatedTvShows] = useState<Shows>([]);
//   const [upcomingMovies, setUpcomingMovies] = useState<Shows>([]);
//   const [upcomingTv, setUpcomingTv] = useState<Shows>([]);
//   const [loading, setLoading] = useState(false);

//   const BASE_URL = 'https://api.themoviedb.org/3/';

//   const POPULAR_MOVIES_URL = `${BASE_URL}discover/movie?api_key=${
//     import.meta.env.VITE_TMDB_API_KEY
//   }`;
//   const POPULAR_TV_URL = `${BASE_URL}discover/tv?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
//   const TOP_RATED_MOVIES_URL = `${BASE_URL}movie/top_rated?api_key=${
//     import.meta.env.VITE_TMDB_API_KEY
//   }`;
//   const TOP_RATED_TV_URL = `${BASE_URL}tv/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
//   const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=${
//     import.meta.env.VITE_TMDB_API_KEY
//   }&language=en-US&query=avengers&page=1&include_adult=false`;
//   const UPCOMING_MOVIES_URL = `${BASE_URL}movie/upcoming?api_key=${
//     import.meta.env.VITE_TMDB_API_KEY
//   }`;
//   const UPCOMING_TV_URL = `${BASE_URL}tv/on_the_air?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

//   const axiosrequest1 = Axios.get(POPULAR_MOVIES_URL);
//   const axiosrequest2 = Axios.get(POPULAR_TV_URL);
//   const axiosrequest3 = Axios.get(TOP_RATED_MOVIES_URL);
//   const axiosrequest4 = Axios.get(TOP_RATED_TV_URL);
//   const axiosrequest5 = Axios.get(UPCOMING_MOVIES_URL);
//   const axiosrequest6 = Axios.get(UPCOMING_TV_URL);

//   const search = (e: React.ChangeEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     getShows();
//   };

//   async function getShows() {
//     const result = await Axios.get(SEARCH_URL);
//     setShows(result.data.results);
//     console.log(result.data.results);
//   }

//   async function simpleGetShows() {
//     const simplifiedData = await Axios.all([
//       axiosrequest1,
//       axiosrequest2,
//       axiosrequest3,
//       axiosrequest4,
//       axiosrequest5,
//       axiosrequest6,
//     ]).then(
//       Axios.spread(function (res1, res2, res3, res4, res5, res6) {
//         setPopularMovies(res1.data.results);
//         setPopularTvShows(res2.data.results);
//         console.log(popularTvShows);
//         setTopRatedMovies(res3.data.results);
//         setTopRatedTvShows(res4.data.results);
//         setUpcomingMovies(res5.data.results);
//         setUpcomingTv(res6.data.results);
//       }),
//     );
//   }

//   useEffect(() => {
//     simpleGetShows();
//   }, []);

//   return {
//     shows,
//     popularMovies,
//     popularTvShows,
//     topRatedMovies,
//     topRatedTvShows,
//     upcomingMovies,
//     upcomingTv,
//     searchTerm,
//     loading,
//     search,
//     setSearchTerm,
//   };
// }

import { useEffect, useState } from 'react';
import Axios from 'axios';

export type Shows = Array<{
  poster_path: string;
  original_title: string;
  vote_average: number;
}>;

export function useShow() {
  const [searchTerm, setSearchTerm] = useState('');
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
  const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&language=en-US&query=avengers&page=1&include_adult=false`;
  const UPCOMING_MOVIES_URL = `${BASE_URL}movie/upcoming?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }`;
  const UPCOMING_TV_URL = `${BASE_URL}tv/on_the_air?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

  const search = (e: React.ChangeEvent<HTMLDivElement>) => {
    e.preventDefault();
    getShows();
  };

  async function getShows() {
    const result = await Axios.get(SEARCH_URL);
    setShows(result.data.results);
    console.log(result.data.results);
  }

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

  return {
    shows,
    popularMovies,
    popularTvShows,
    topRatedMovies,
    loading,
    topRatedTvShows,
    upcomingMovies,
    upcomingTv,
    searchTerm,
    search,
    setSearchTerm,
  };
}
