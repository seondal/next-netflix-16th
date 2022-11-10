import Footer from "../../components/common/Footer"
import styled from 'styled-components'
import axios from 'axios';
import { IData } from "../../interfaces/interface";

export default function Home(data:IData){
    console.log(data);
    return (
        <Container>
            home
            <Footer/>
        </Container>
    )
};

export async function getServerSideProps(){
    // Fetch data from external API
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=0c75b9faeb39691a7d8e7af98ee5f303`)
    const data = res.data;

    console.log(data);

    // Pass data to the page via props
    return { props: { data } }
}

const Container = styled.div`
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 375px;

`