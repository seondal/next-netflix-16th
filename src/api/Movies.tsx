import axios from 'axios';
import {API_KEY} from '../assets/config';

export const getNowPlaying = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
    return data;
}

export const getTopRated = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    return data;
}

export const getPopular = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return data;
}