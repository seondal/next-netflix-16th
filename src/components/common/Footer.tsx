import FooterItem from "./FooterItem";
import FooterInfo from "../../assets/FooterInfo.json";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  const footerInfo = FooterInfo;

  return (
    <>
      <div className="container">
        {footerInfo.map((f) => {
          return (
            <Link href={`/${f.alt}`} key={f.id}>
              <FooterItem
                key={f.id}
                alt={f.alt}
                name={f.name}
                selected={router.pathname === "/" + f.alt}
              />
            </Link>
          );
        })}
      </div>
      <style jsx>{`
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
      `}</style>
    </>
  );
}
