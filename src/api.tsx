const API_KEY = process.env.API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/movie/`;

export const getNowPlaying = `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
export const getTopRated = `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const getPopular = `${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const getUpComing = `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const getTopSearches = `${BASE_URL}/top_rated?api_key=${API_KEY}`;
