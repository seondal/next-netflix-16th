import { useRouter } from "next/router";
import Footer from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children?: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Netflix
        </title>
      </Head>
      <div className="container">
        {children}
        {router.pathname !== "/" && <Footer />}
      </div>
      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          width: 375px;
          justify-contents: flex-start;
          position: relative;
        }
      `}</style>
    </>
  );
}
