import styled from 'styled-components';
import Image from 'next/image'

export default function MovieList({movies}:any){
    console.log('movieList:',movies);
    return(
        <Container>
            {
                movies.map((m:any) => (
                    <>
                    <ImageMovie
                        src={"http://image.tmdb.org/t/p/w500"+m.backdrop_path}
                        alt = {m.title}

                        width={30}
                        height={30}
                    />
                    </>
                ))
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 375px;
    overflow-y: auto;
`

const ImageMovie = styled.img`
    object-fit: cover;
    width: 103px;
    height: 161px;
    margin-right: 7px;
`