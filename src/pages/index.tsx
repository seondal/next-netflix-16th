import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Home() {
  const router = useRouter();

  const netflixContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {

    lottie.loadAnimation({
      container: netflixContainer.current as HTMLDivElement,
      renderer: 'svg',
      loop: false,
      autoplay:true,
      animationData:require("../../public/img/netflix-logo.json")
     
    })

    const timer = setTimeout(() => {
      router.push("/home");
    }, 3100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="item" ref={netflixContainer}></div>
      </div>
      <style jsx>{`
        .container {
          justify-content: center;
          align-items: center;
        }
        .item{
          width: 375px;
          height: 100%;
          position: fixed;
          z-index: 1000;
        }
      `}</style>
    </>
  );
}
