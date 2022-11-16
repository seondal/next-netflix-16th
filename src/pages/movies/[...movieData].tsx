import { useRouter } from "next/router";
import BackgroundPoster from "../../components/common/BackgroundPoster";

export default function MovieDetail() {
  const router = useRouter();
  const { title, backdrop, overview } = router.query;
  const backdropURL = `${backdrop}`;

  return (
    <>
      <div className="container">
        <BackgroundPoster url={backdropURL} />
        <div className="contents">
          <button>▶️ Play</button>
          <h2>{title}</h2>
          <div className="overview">{overview}</div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
        .contents {
          padding: 13px 36px;
          min-height: 300px;
        }
        button {
          width: 303px;
          height: 45px;
          border-radius: 5.625px;
          background: #c4c4c4;
          color: black;
          font-size: 20.4624px;
        }
        .overview {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.83);
        }
      `}</style>
    </>
  );
}
