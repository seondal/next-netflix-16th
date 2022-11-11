import { useRouter } from "next/router";
import Footer from "./Footer";

interface LayoutProps {
  children?: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <>
      {children}
      {router.pathname !== "/" && <Footer />}
    </>
  );
}
