import Footer from "../../components/common/Footer"
import styled from 'styled-components'
import axios from 'axios';
import { IData } from "../../interfaces/interface";
import { getNowPlaying, getTopRated, getPopular } from "../../api/Movies";
import { useNowPlaying, useTopRated, usePopular } from "../../hooks/api/movie";
import { dehydrate, QueryClient } from '@tanstack/react-query';
import MovieList from '../../components/home/MovieList'
import TextInfo from "../../components/home/TextInfo";

export default function Home(){

    const { data : nowPlayingMovies } = useNowPlaying();

    const { data : topRatedMovies} = useTopRated();

    const { data : popularMovies } = usePopular();


    return (
        <Container>
            <TextInfo name={"Now Playing"}/>
            <MovieList movies={nowPlayingMovies.results}/>
            <TextInfo name={"Top Rated"}/>
            <MovieList movies={topRatedMovies.results}/>
            <TextInfo name={"Popular"}/>
            <MovieList movies={popularMovies.results}/>
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
    justify-content: center;
    align-items: center;
    width: 375px;
`