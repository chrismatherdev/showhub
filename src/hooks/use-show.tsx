import { useEffect, useState } from 'react';
import {
  POPULAR_MOVIES_URL,
  POPULAR_TV_URL,
  TOP_RATED_MOVIES_URL,
  TOP_RATED_TV_URL,
  SEARCH_URL,
  UPCOMING_MOVIES_URL,
  UPCOMING_TV_URL,
} from '../api/config';
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

  const search = (e: any) => {
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
    topRatedTvShows,
    upcomingMovies,
    upcomingTv,
    searchTerm,
    search,
    setSearchTerm,
  };
}
