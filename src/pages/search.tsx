import { BiSearch, BiX } from "react-icons/bi";
import { getSearchMovies, getTopSearches } from "../api";
import { IMovieInfo } from "../interface";
import SearchList from "../components/search/SearchList";
import { useState, useEffect } from "react";
import TextInfo from "../components/home/TextInfo";

interface SearchProps {
  topSearchesMovies: IMovieInfo[];
}

export default function Search({ topSearchesMovies }: SearchProps) {
  const [searchData, setSearchData] = useState(topSearchesMovies);
  const [search, setSearch] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await (await fetch(getSearchMovies(search))).json();
      const data = response.results;
      setSearchData(data);
    }
    if (search) {
      fetchData();
    }
  }, [search]);

  return (
    <>
      <div className="container">
        <div className="search_box">
          <BiSearch color="#C4C4C4" size={20} />
          <input
            type="text"
            value={search}
            onChange={onChange}
            placeholder="Search for a show, movie, genre, e.t.c."
          />
          <BiX color="#C4C4C4" size={28} />
        </div>
        <TextInfo name={"Top Searches"} isPreview={true} />
        <SearchList movies={searchData} />
      </div>
      <style jsx>{`
        .search_box {
          display: flex;
          height: 50px;
          padding: 20px;
          align-items: center;
          justify-content: space-between;
          background-color: #424242;
          margin-top: 50px;
        }
        input {
          width: 100%;
          height: 50px;
          border: none;
          color: #c4c4c4;
          background-color: #424242;
          padding: 15px;
        }
      `}</style>
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
