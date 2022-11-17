import { useRouter } from "next/router";
import Footer from "./Footer";
import Head from "next/head";
import { getScreenWidth } from "../../assets/getScreenWidth";

interface LayoutProps {
  children?: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  const screenWidth = getScreenWidth();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Netflix</title>
      </Head>
      <div className="container">
        {children}
        <div className="blank" />
      </div>
      {router.pathname !== "/" && <Footer size={screenWidth} />}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          width: ${screenWidth}px;
        }
        .blank {
          height: 50px;
        }
      `}</style>
    </>
  );
}
