import Footer from "../components/common/Footer";
import { useState, useEffect } from "react";
import { getTopSearches } from "../api/Movies";
import { IMovieInfo } from "../interfaces/interface";
import Link from "next/link";

export default function Search() {
  const [movies, setMovies] = useState<IMovieInfo[]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(getTopSearches)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <>
      <input placeholder="Search for a show, movie, genre, e.t.c." />
      <h2>Top Searches</h2>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <Link
          href={{
            pathname: `/movies/${movie.id}`,
            query: { title: movie.original_title },
          }}
          as={`/movies/${movie.id}`}
          key={movie.id}
        >
          <div key={movie.id}>
            <img
              style={{ width: "10px" }}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
      <Footer />
    </>
  );
}
