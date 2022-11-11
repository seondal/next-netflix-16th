import { useQuery } from '@tanstack/react-query';
import { appendFile } from 'fs';
import * as api from '../../api/Movies';

export const useNowPlaying = () => {
    return useQuery(['NowPlaying'], () => api.getNowPlaying());
}

export const useTopRated = () => {
    return useQuery(['TopRated'], () => api.getTopRated());
}

export const usePopular = () => {
    return useQuery(['Popular'], () => api.getPopular());
}

export const useUpComing = () => {
    return useQuery(['UpComing'], () => api.getUpComing());
}