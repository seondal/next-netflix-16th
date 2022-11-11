import { useQuery } from '@tanstack/react-query';
import * as api from '../../api/Movies';

export const useNowPlaying = () => {
    return useQuery(['NowPlaying'], () => api.getNowPlaying());
}