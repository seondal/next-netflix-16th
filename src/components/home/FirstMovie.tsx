import styled, { css } from 'styled-components';
import Image from 'next/image'
import Play from '../../../public/img/Header/Play.png'
import Info from '../../../public/img/Header/Info.png'
import MyList from '../../../public/img/Header/MyList.png'
import Header from '../common/Header';
import { IData } from '../../interfaces/interface';

export default function FirstMovie({movies}:any){
    const len_movies = movies.length;
    const rand_0_len = Math.floor(Math.random()*len_movies)

    return(
        <Container>
            <ImageBox path = {"http://image.tmdb.org/t/p/w500"+movies[rand_0_len].backdrop_path}>
                <Header/>
            </ImageBox>
            <MiddleItem>
                <Item>
                    <Image
                        src={MyList}
                        alt={"list"}
                        width={20}
                        height={20}
                    />
                    <br/>
                    My List
                </Item>
                <Item>
                    <Image
                        src={Play}
                        alt={"Play"}
                        width={110.62}
                        height={45}
                    />
                </Item>
                <Item>
                    <Image
                        src={Info}
                        alt={"Info"}
                        width={20}
                        height={20}
                    />
                    <br/>
                    Info
                </Item>
            </MiddleItem>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

const MiddleItem = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 43px;
`

const Item = styled.div`
    align-items: center;
    text-align: center;
`
interface Props{
    path: string
}

const ImageBox = styled.div<Props>`
    object-fit: cover;
    height: 415px;
    width: 375px;
    margin-bottom: 13px;
    background-size: cover;
    background-position: center;
    background-image : ${props => `linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 87.26%, #000000 100%), url(${props.path})`}

`
