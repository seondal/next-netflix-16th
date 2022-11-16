import Link from "next/link";
import { IMovieInfo } from "../../interface";

interface SearchListProps {
    movies: IMovieInfo[];
}


export default function SearchList({movies} : SearchListProps){

    return(
        <>
            {!movies && <h4>Loading...</h4>}
            {movies.map((movie : IMovieInfo) => (
                <Link
                href={{
                    pathname: `/movies/${movie.id}`,
                    query: {
                    title: movie.original_title,
                    poster: movie.poster_path,
                    overview: movie.overview,
                    },
                }}
                as={`/movies/${movie.id}`}
                key={movie.id}
                >
                <div key={movie.id}>
                    <img
                    style={{ width: "10px" }}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <h4>{movie.original_title}</h4>
                </div>
                </Link>
            ))}
          </>
    )
}