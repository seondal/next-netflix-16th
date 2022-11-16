import Link from "next/link";
import { IMovieInfo } from "../../interface";

interface MovieListProps {
  movies: IMovieInfo[];
  isPreview: boolean;
}

export default function MovieList({ movies, isPreview }: MovieListProps) {
  return (
    <div className="container">
      {movies.map((m: any) => (
        <Link
          href={{
            pathname: `/movies/${m.id}`,
            query: {
              title: m.original_title,
              poster: m.backdrop_path,
              overview: m.overview,
            },
          }}
          as={`/movies/${m.id}`}
          key={m.id}
        >
          <img
            className={isPreview ? "isCircle" : ""}
            src={"http://image.tmdb.org/t/p/w500" + m.backdrop_path}
            alt={m.title}
          />
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: flex;
          width: 375px;
          overflow-y: auto;
        }
        .container::-webkit-scrollbar {
          display: none;
        }
        img {
          object-fit: cover;
          width: 103px;
          height: 161px;
          margin-right: 7px;
          margin-bottom: 52px;
        }
        .isCircle {
          width: 102px;
          height: 102px;
          border-radius: 50%;
          margin-bottom: 66px;
        }
      `}</style>
    </div>
  );
}
