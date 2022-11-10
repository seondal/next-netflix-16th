import styled from 'styled-components';
import FooterItem from './FooterItem';
import FooterInfo from "../../assets/FooterInfo.json"
import { useRouter } from "next/router";

export default function Footer(){
    const router = useRouter();
    const footerInfo = FooterInfo;

    return(
        <Container>
            {
                footerInfo.map((f)=>{
                    const select = router.pathname === '/'+f.alt;
                    return (
                        <FooterItem
                            key={f.id}
                            alt={f.alt}
                            name={f.name}
                            selected = {select}
                        />
                    )
                })
            }
        </Container>
    );
};

const Container = styled.div`
    position : fixed;

    // 중앙 정렬
    left: 50%;
    transform: translate(-50%, 0);

    bottom: 0;
    
    width: 375px;
    height: 48px;

    display: flex;
    justify-content: space-evenly;
`
