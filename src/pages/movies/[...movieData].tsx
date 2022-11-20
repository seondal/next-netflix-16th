import { useRouter } from "next/router";
import BackgroundPoster from "../../components/common/BackgroundPoster";
import TextInfo from "../../components/home/TextInfo";

export default function MovieDetail() {
  const router = useRouter();
  const { title, backdrop, overview } = router.query;
  const movieTitle = `${title}`;
  const backdropURL = `${backdrop}`;

  return (
    <>
      <div className="container">
        <BackgroundPoster url={backdropURL} />
        <div className="contents">
          <div className="button-box">
            <button>▶️ Play</button>
          </div>
          <TextInfo name={movieTitle} isPreview={true} />
          <div className="overview">{overview}</div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 20px;
        }
        .button-box {
          display: flex;
          justify-content: center;
        }
        button {
          width: 100%;
          height: 45px;
          border-radius: 5.625px;
          background: #c4c4c4;
          color: black;
          font-size: 20.4624px;
        }
        .contents {
          padding: 13px 36px;
        }

        .overview {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.83);
        }
      `}</style>
    </>
  );
}
