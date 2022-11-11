import styled, { css } from 'styled-components';
import Image from 'next/image'

export default function MovieList({movies, isPreview}:any){
    console.log(isPreview);
    return(
        <Container>
            {
                movies.map((m:any) => (
                    <ImageMovie
                        isCircle = {isPreview}
                        key = {m.id}
                        src={"http://image.tmdb.org/t/p/w500"+m.backdrop_path}
                        alt = {m.title}
                    />
                ))
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 375px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`
interface ImageProps {
    isCircle: boolean;
}

const ImageMovie = styled.img<ImageProps>`
    object-fit: cover;
    width: 103px;
    height: 161px;
    margin-right: 7px;
    margin-bottom: 52px;

    ${(props) =>
        props.isCircle === true &&
        css`
            width: 102px;
            height: 102px;
            border-radius: 50%;
            margin-bottom: 66px;
    `};

`
