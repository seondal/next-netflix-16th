import { API_KEY } from "./assets/config";
export const API_KEY_TEST = '0c75b9faeb39691a7d8e7af98ee5f303';
const BASE_URL = `https://api.themoviedb.org/3/`;


export const getNowPlaying = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
export const getTopRated = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const getPopular = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const getUpComing = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const getTopSearches = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
export const getSearchMovies_test = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;

export function getSearchMovies(search : string){
    const result = `${BASE_URL}/search/movie?api_key=${API_KEY_TEST}&language=en-US&page=1&include_adult=false&query=${search}`;
    return result;
}
