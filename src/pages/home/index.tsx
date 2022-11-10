import Footer from "../../components/common/Footer"
import styled from 'styled-components'

export default function Home(){
    return (
        <Container>
            home
            <Footer/>
        </Container>
    )
};

const Container = styled.div`
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 375px;

`