import Image from "next/image";
import Play from "../../../public/img/Header/Play.png";
import Info from "../../../public/img/Header/Info.png";
import MyList from "../../../public/img/Header/MyList.png";
import Header from "../common/Header";

interface Props {
  path: string;
}

export default function FirstMovie({ movies }: any) {
  const len_movies = movies.length;
  const rand_0_len = Math.floor(Math.random() * len_movies);
  const backgroundImage =
    "http://image.tmdb.org/t/p/w500" + movies[rand_0_len].backdrop_path;

  return (
    <>
      <div className="container">
        <div className="image-box">
          <Header />
        </div>
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
        .image-box {
          object-fit: cover;
          height: 415px;
          width: 375px;
          margin-bottom: 13px;
          background-size: cover;
          background-position: center;
          background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.45) 0%,
              rgba(0, 0, 0, 0) 87.26%,
              #000000 100%
            ),
            url(${backgroundImage});
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
