export interface IFooter{
    alt: string;
    name: string;
    selected: boolean;
}

export interface IMovieInfo{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    popularity: number;
}

export interface IData{
    page: number;
    results: IMovieInfo[];
    total_pages: number;
    total_results: number;
}

export interface ITextInfo{
    name: string;
    isPreview: boolean;
}