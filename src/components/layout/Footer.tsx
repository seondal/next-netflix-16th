import FooterItem from "./FooterItem";
import FooterInfo from "../../assets/FooterInfo.json";
import { useRouter } from "next/router";
import Link from "next/link";

interface FooterProps {
  size: number;
}

export default function Footer({ size }: FooterProps) {
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
          bottom: 0;
          width: ${size}px;
          height: 48px;
          display: flex;
          justify-content: space-evenly;
          padding: 8px 0px;
        }
      `}</style>
    </>
  );
}
