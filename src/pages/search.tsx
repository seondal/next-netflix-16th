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

  const filterData : IMovieInfo[] = searchData.filter((movie) => {
    // console.log('m:', movie.title.replace(" ","").toLocaleLowerCase());
    // console.log('se:',search.replace(" ","").toLocaleLowerCase());
    let result = movie.title.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase());
    return result;
  })

  return (
    <>
      <input 
      type="text" value={search} onChange={onChange}
      placeholder="Search for a show, movie, genre, e.t.c." />
      <h2>Top Searches</h2>
      <SearchList movies={filterData}/>
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
