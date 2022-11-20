import Image from "next/image";
import Play from "../../../public/img/Header/Play.png";
import Info from "../../../public/img/Header/Info.png";
import MyList from "../../../public/img/Header/MyList.png";
import Header from "./Header";
import BackgroundPoster from "../common/BackgroundPoster";
import { IMovieInfo } from "../../interface";

interface FirstMovieProps {
  movies: IMovieInfo[];
}

export default function FirstMovie({ movies }: FirstMovieProps) {
  const len_movies = movies.length;
  const rand_0_len = Math.floor(Math.random() * len_movies);

  return (
    <>
      <div className="container">
        <BackgroundPoster url={movies[rand_0_len].poster_path}>
          <Header />
        </BackgroundPoster>
        <div className="middle-item">
          <div className="item">
            <Image src={MyList} alt={"list"} width={20} height={20} />
            <br />
            My List
          </div>
          <div className="item">
            <Image src={Play} alt={"Play"} width={110.62} height={45} />
          </div>
          <div className="item">
            <Image src={Info} alt={"Info"} width={20} height={20} />
            <br />
            Info
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .middle-item {
          display: flex;
          justify-content: space-evenly;
          margin-bottom: 43px;
        }
        .item {
          align-items: center;
          text-align: center;
        }
      `}</style>
    </>
  );
}
