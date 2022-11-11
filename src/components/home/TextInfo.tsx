import styled, { css } from 'styled-components';

export default function TextInfo({name, isPreview}:any){
    console.log(isPreview)
    return(
        <Container isPreview = {isPreview}>
            {name}
        </Container>
    )

}

interface Props {
    isPreview: boolean;
}

const Container = styled.div<Props>`
    font-weight: 700;
    margin-bottom: 14px;
    font-size: ${props => props.isPreview ? "26.75px" : "20.92px"}
`