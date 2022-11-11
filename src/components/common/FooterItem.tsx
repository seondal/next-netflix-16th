import { IFooter } from "../../interfaces/interface"
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FooterItem({alt,name,selected}:IFooter){
    let src = '';
    if (selected){
        src = '/img/Footer/'+name+'.png'
    }else{
        src = '/img/Footer/'+name+'-2.png'
    }


    return (
        <Container>
            <StyledButton select = {selected}>
                <Image
                    alt={alt}
                    src={src}
                    width={25}
                    height={25}
                />
                <StyledFont>
                    {name}
                </StyledFont>
            </StyledButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledFont = styled.div`
    font-size: 8.2px;
`

const StyledButton = styled.button<{select : boolean}>`
    border: 0;
    outline: 0;
    background: black;
    color: #8C8787;
    color: ${
        ({select}) => (select? 'white' : '#8C8787')
    }
`