const API_KEY = 'f5eb5d65f1d1f2716caa4b8b1c6136e9';
const BASE_URL = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL = `${BASE_URL}discover/movie?api_key=${API_KEY}`;
const POPULAR_TV_URL = `${BASE_URL}discover/tv?api_key=${API_KEY}`;
const TOP_RATED_MOVIES_URL = `${BASE_URL}movie/top_rated?api_key=${API_KEY}`;
const TOP_RATED_TV_URL = `${BASE_URL}tv/top_rated?api_key=${API_KEY}`;
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=avengers&page=1&include_adult=false`;

export {
  API_KEY,
  BASE_URL,
  POPULAR_MOVIES_URL,
  POPULAR_TV_URL,
  TOP_RATED_MOVIES_URL,
  TOP_RATED_TV_URL,
  IMAGE_PATH,
  IMAGE_BASE_URL,
  SEARCH_URL,
};
