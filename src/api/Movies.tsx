import axios from 'axios';

export const getNowPlaying = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=0c75b9faeb39691a7d8e7af98ee5f303&language=en-US&page=1`);
    return data;
}