import { getImage } from "../../api";
import { IMovieInfo } from "../../interface";
import LinktoMovieData from "../common/LinkToMovieData";

interface MovieListProps {
  movies: IMovieInfo[];
  isPreview: boolean;
}

export default function MovieList({ movies, isPreview }: MovieListProps) {
  return (
    <div className="container">
      {movies.map((m: IMovieInfo) => (
        <div key={m.id}>
          <LinktoMovieData
            id={m.id}
            original_title={m.original_title}
            backdrop_path={m.backdrop_path}
            overview={m.overview}
          >
            <img
              className={isPreview ? "isCircle" : ""}
              src={getImage(m.poster_path)}
              alt={m.title}
            />
          </LinktoMovieData>
        </div>
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
        }
        .isCircle {
          width: 102px;
          height: 102px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
