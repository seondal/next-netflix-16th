import Footer from "../../components/common/Footer";
import styled from "styled-components";
import { IMovieInfo } from "../../interfaces/interface";
import {
  getNowPlaying,
  getTopRated,
  getPopular,
  getUpComing,
} from "../../api/Movies";
import MovieList from "../../components/home/MovieList";
import TextInfo from "../../components/home/TextInfo";
import FirstMovie from "../../components/home/FirstMovie";

interface HomeProps {
  nowPlayingMovies: IMovieInfo[];
  topRatedMovies: IMovieInfo[];
  popularMovies: IMovieInfo[];
  upComingMovies: IMovieInfo[];
}
export default function Home({
  nowPlayingMovies,
  topRatedMovies,
  popularMovies,
  upComingMovies,
}: HomeProps) {
  return (
    <Body>
      <Container>
        <FirstMovie movies={upComingMovies} />
        <TextInfo name={"Previews"} isPreview={true} />
        <MovieList movies={upComingMovies} isPreview={true} />
        <TextInfo name={"Now Playing"} isPreview={false} />
        <MovieList movies={nowPlayingMovies} isPreview={false} />
        <TextInfo name={"Top Rated"} isPreview={false} />
        <MovieList movies={topRatedMovies} isPreview={false} />
        <TextInfo name={"Popular"} isPreview={false} />
        <MovieList movies={popularMovies} isPreview={false} />
        <Footer />
      </Container>
    </Body>
  );
}

export const getServerSideProps = async () => {
  const nowPlayingResponse = await (await fetch(getNowPlaying)).json();
  const nowPlayingMovies = nowPlayingResponse.results;

  const topRatedResponse = await (await fetch(getTopRated)).json();
  const topRatedMovies = topRatedResponse.results;

  const popularResponse = await (await fetch(getPopular)).json();
  const popularMovies = popularResponse.results;

  const upComingResponse = await (await fetch(getUpComing)).json();
  const upComingMovies = upComingResponse.results;
  return {
    props: {
      nowPlayingMovies,
      topRatedMovies,
      popularMovies,
      upComingMovies,
    },
  };
};

const Body = styled.div`
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  justify-contents: flex-start;
  position: relative;
`;
