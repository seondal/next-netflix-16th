import { API_KEY } from "./assets/config";

const BASE_URL = `https://api.themoviedb.org/3/`;

// movie
export const getNowPlaying = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
export const getTopRated = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const getPopular = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const getUpComing = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const getTopSearches = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

// search
export function getSearchMovies(search: string) {
  return `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`;
}

// image
export function getImage(url: string) {
  return `http://image.tmdb.org/t/p/w500${url}`;
}
