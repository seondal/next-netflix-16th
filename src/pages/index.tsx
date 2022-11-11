import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../../public/img/netflix_5.gif";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <Image src={Logo} alt="Logo of Netflix" width={375} />
    </div>
  );
}
