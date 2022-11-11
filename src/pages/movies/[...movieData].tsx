import { useRouter } from "next/router";

export default function MovieDetail() {
  const router = useRouter();
  const { title, poster, overview } = router.query;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} />
      <button>▶️ Play</button>
      <h2>{title}</h2>
      <div>{overview}</div>
    </div>
  );
}
