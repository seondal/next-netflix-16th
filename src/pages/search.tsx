import { getTopSearches } from "../api";
import { IMovieInfo } from "../interface";
import Link from "next/link";
import SearchList from "../components/search/SearchList";
import {useState, useEffect} from 'react';

interface SearchProps {
  topSearchesMovies: IMovieInfo[];
}

export default function Search({ topSearchesMovies }: SearchProps) {

  const [searchData, setSearchData] = useState(topSearchesMovies);
  const [search, setSearch] = useState("");

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const filterData = searchData.filter((movie) => {
    let result = movie.title.replace(" ","").toLocaleLowerCase().includes(search.replace(" ","").toLocaleLowerCase());
    return result;
  })

  return (
    <>
      <input 
      type="text" value={search} onChange={onChange}
      placeholder="Search for a show, movie, genre, e.t.c." />
      <h2>Top Searches</h2>
      <SearchList movies={topSearchesMovies}/>
      {!filterData && <h4>Loading...</h4>}
      {filterData?.map((movie) => (
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
