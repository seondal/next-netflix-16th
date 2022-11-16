import Link from "next/link";
import { IMovieInfo } from "../../interface";
import { GrCirclePlay } from "react-icons/gr";

interface SearchListProps {
    movies: IMovieInfo[];
}


export default function SearchList({movies} : SearchListProps){
    return(
        <>
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie : IMovieInfo) => (
                movie.backdrop_path == null
                ?
                <div key={movie.id}></div>
                :
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
                    <div className="container">
                        <img className="poster"
                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        />
                        <div className="title-box">
                            <div className="title">
                                {movie.original_title}
                            </div>
                            <div className="play">
                                <GrCirclePlay/>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
            <style jsx>{`
                .container {
                    display: flex;
                    width: 375px;
                    margin-bottom: 3px;
                }
                .poster {
                    object-fit: cover;
                    width: 146px;
                    height: 76px;
                }
                .title-box {
                    background: #424242;
                    width: 229px;
                    height: 76px;
                }
                .title {
                    font-weight: 400;
                    font-size: 14.7222px;
                }
                .play {
                    size: "25";
                }
            `}</style>
          </>
    )
}