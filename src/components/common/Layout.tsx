import { useRouter } from "next/router";
import Footer from "./Footer";

interface LayoutProps {
  children?: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <>
      <div className="body">
        {children}
        {router.pathname !== "/" && <Footer />}
      </div>
      <style jsx>{`
        .body {
          height: 100vh;
        }
      `}</style>
    </>
  );
}
