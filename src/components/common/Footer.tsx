import styled from "styled-components";
import FooterItem from "./FooterItem";
import FooterInfo from "../../assets/FooterInfo.json";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const footerInfo = FooterInfo;

  const handleClick = (name: string) => {
    if (name === "Home") {
      router.push("/home");
    } else if (name === "Search") {
      router.push("/search");
    }
  };

  return (
    <div className="container">
      {footerInfo.map((f) => {
        const select = router.pathname === "/" + f.alt;
        return (
          <ItemButton key={f.id} onClick={() => handleClick(f.name)}>
            <FooterItem
              key={f.id}
              alt={f.alt}
              name={f.name}
              selected={select}
            />
          </ItemButton>
        );
      })}
      <style jsx>
        {`
          .container {
            position: fixed;
            background: black;

            // 중앙 정렬
            left: 50%;
            transform: translate(-50%, 0);

            bottom: 0;

            width: 377px;
            height: 48px;

            display: flex;
            justify-content: space-evenly;
          }
        `}
      </style>
    </div>
  );
}
const ItemButton = styled.div``;
