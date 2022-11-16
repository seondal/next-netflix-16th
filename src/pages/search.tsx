import { getSearchMovies, getSearchMovies_test } from "../api";
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

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await (await fetch(getSearchMovies(search))).json();
      const data = response.results;
      setSearchData(data);
    }
    if(search){
      fetchData();
    }
  }, [search]); 

  return (
    <>
      <input 
      type="text" value={search} onChange={onChange}
      placeholder="Search for a show, movie, genre, e.t.c." />
      <h2>Top Searches</h2>
      <SearchList movies={searchData}/>
    </>
  );
}

export async function getServerSideProps() {
  const topSearchesMoviesResponse = await (await fetch(getSearchMovies_test)).json();
  const topSearchesMovies = topSearchesMoviesResponse.results;

  return {
    props: {
      topSearchesMovies,
    },
  };
}
