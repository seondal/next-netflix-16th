import Footer from "../components/common/Footer";
import { useState, useEffect } from "react";
import { getTopSearches } from "../api/Movies";
import { IMovieInfo } from "../interfaces/interface";
import Link from "next/link";

interface SearchProps {
  topSearchesMovies: IMovieInfo[];
}

export default function Search({ topSearchesMovies }: SearchProps) {
  return (
    <>
      <input placeholder="Search for a show, movie, genre, e.t.c." />
      <h2>Top Searches</h2>
      {!topSearchesMovies && <h4>Loading...</h4>}
      {topSearchesMovies?.map((movie) => (
        <Link
          href={{
            pathname: `/movies/${movie.id}`,
            query: {
              title: movie.original_title,
              poster: movie.poster_path,
              overview: movie.overview,
            },
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

export async function getServerSideProps() {
  const topSearchesMoviesResponse = await (await fetch(getTopSearches)).json();
  const topSearchesMovies = topSearchesMoviesResponse.results;

  return {
    props: {
      topSearchesMovies,
    },
  };
}
