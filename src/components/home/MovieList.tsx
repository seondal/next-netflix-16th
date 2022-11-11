import { IMovieInfo } from "../../interface";

interface MovieListProps {
  movies: IMovieInfo[];
  isPreview: boolean;
}

export default function MovieList({ movies, isPreview }: MovieListProps) {
  return (
    <div className="container">
      {movies.map((m: any) => (
        <>
          <img
            className={isPreview ? "isCircle" : ""}
            key={m.id}
            src={"http://image.tmdb.org/t/p/w500" + m.backdrop_path}
            alt={m.title}
          />
        </>
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
