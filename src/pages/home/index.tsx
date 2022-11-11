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

// next 13
// export async function getData(){
//     const res = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=0c75b9faeb39691a7d8e7af98ee5f303",{
//         cache: "no-store"
//     });
//     const data = await res.json();
//     return data;
// }

// 이전 방식
// export async function getServerSideProps(){
//     // Fetch data from external API
//     const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=0c75b9faeb39691a7d8e7af98ee5f303`)
//     const data = res.data;

//     // Pass data to the page via props
//     return { props: { data } }
// }

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    width: 375px;
    // overflow:visible
    // margin-top: 300px;
`