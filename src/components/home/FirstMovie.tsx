import styled, { css } from 'styled-components';
import Image from 'next/image'
import Play from '../../../public/img/Header/Play.png'
import Info from '../../../public/img/Header/Info.png'
import MyList from '../../../public/img/Header/MyList.png'

export default function FirstMovie({movies}:any){
    const len_movies = movies.length;
    const rand_0_len = Math.floor(Math.random()*len_movies)

    return(
        <Container>
        firstmovie
        <ImageMovie
            src={"http://image.tmdb.org/t/p/w500"+movies[rand_0_len].backdrop_path}
        />
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
const ImageMovie = styled.img`
    object-fit: cover;
    height: 415px;
    margin-bottom: 13px;
    margin-top: 415px;

`
