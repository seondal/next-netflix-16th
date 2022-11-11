import Footer from "../../components/common/Footer"
import styled from 'styled-components'
import axios from 'axios';
import { IData } from "../../interfaces/interface";
import { getNowPlaying, getTopRated, getPopular, getUpComing } from "../../api/Movies";
import { useNowPlaying, useTopRated, usePopular, useUpComing } from "../../hooks/api/movie";
import { dehydrate, QueryClient } from '@tanstack/react-query';
import MovieList from '../../components/home/MovieList'
import TextInfo from "../../components/home/TextInfo";
import Header from "../../components/common/Header";
import FirstMovie from "../../components/home/FirstMovie";

export default function Home(){

    const { data : nowPlayingMovies } = useNowPlaying();

    const { data : topRatedMovies} = useTopRated();

    const { data : popularMovies } = usePopular();

    const { data : upComingMovies } = useUpComing();


    return (
        <Body>
            <Container>
                <Header/>
                <FirstMovie movies={upComingMovies.results}/>
                <TextInfo name={"Previews"} isPreview={true}/>
                <MovieList movies={upComingMovies.results} isPreview={true}/>
                <TextInfo name={"Now Playing"} isPreview={false}/>
                <MovieList movies={nowPlayingMovies.results} isPreview={false}/>
                <TextInfo name={"Top Rated"} isPreview={false}/>
                <MovieList movies={topRatedMovies.results} isPreview={false}/>
                <TextInfo name={"Popular"} isPreview={false}/>
                <MovieList movies={popularMovies.results} isPreview={false}/>
                <Footer/>
            </Container>
        </Body>
    )
};

export const getServerSideProps = async () => {

    const queryClient = new QueryClient()

    // prefetch data on the server
    await queryClient.fetchQuery(['NowPlaying'], () => getNowPlaying());

    await queryClient.fetchQuery(['TopRated'], ()=> getTopRated());

    await queryClient.fetchQuery(['Popular'], () => getPopular());

    await queryClient.fetchQuery(['UpComing'], () => getUpComing());

    return {
        props: {
            // dehydrate query cache
            dehydratedState: dehydrate(queryClient),
        },
    }
}

const Body = styled.div`
    height: 100vh;
`
const Container = styled.div`
    display: flex;
    flex-direction: column; 
    width: 375px;
    justify-contents: flex-start;
    position: relative;
`