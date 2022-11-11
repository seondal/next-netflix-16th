import styled from 'styled-components';

const ItemsList = [
    {id: 0, info: '/img/Netflix_Symbol.png'},
    {id: 1, info: 'TV Shows'},
    {id: 2, info: 'Movies'},
    {id: 3, info: 'My List'}
];

export default function Header(){
    return(
        <Container>
            {
                ItemsList.map((i) => (
                    i.id === 0 ?
                    <StyledImage
                        key={i.id}
                        src={i.info}
                        alt={'Logo'}
                    />
                    :
                    <Item key={i.id}>
                        {i.info}
                    </Item>
                ))
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: transparent;
    position: relative;
    align-items: center;
`

const Item = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 17.1968px;
`

const StyledImage = styled.img`
    object-fit: cover;
    width: 50px;
`