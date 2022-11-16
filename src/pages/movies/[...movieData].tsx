import { useRouter } from "next/router";

export default function MovieDetail() {
  const router = useRouter();
  const { title, poster, overview } = router.query;
  const backdropURL = `https://image.tmdb.org/t/p/w500/${poster}`;
  return (
    <>
      <div className="container">
        <div className="backdrop"></div>
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
        .backdrop {
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
            url(${backdropURL});
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
