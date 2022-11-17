import { IMovieInfo } from "../../interface";
import { BiPlayCircle } from "react-icons/bi";
import { getImage } from "../../api";
import LinktoMovieData from "../common/LinkToMovieData";

interface SearchListProps {
  movies: IMovieInfo[];
}

export default function SearchList({ movies }: SearchListProps) {
  return (
    <>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie: IMovieInfo) => (
        <div key={movie.id}>
          <LinktoMovieData
            id={movie.id}
            original_title={movie.original_title}
            backdrop_path={movie.backdrop_path}
            overview={movie.overview}
          >
            <div key={movie.id}>
              <div className="container">
                <img className="poster" src={getImage(movie.poster_path)} />
                <div className="title-box">
                  <div className="title">{movie.original_title}</div>
                  <BiPlayCircle size="25" color="#fffff" />
                </div>
              </div>
            </div>
          </LinktoMovieData>
        </div>
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
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #424242;
          width: 229px;
          height: 76px;
          padding: 0px 11px 0px 25px;
        }
        .title {
          font-weight: 400;
          font-size: 14.7222px;
        }
      `}</style>
    </>
  );
}
