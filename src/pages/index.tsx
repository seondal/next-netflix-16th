import styled from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Logo from "../../public/img/netflix_5.gif";
import styles from "../../styles/Home.module.css";
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
    <div className={styles.container}>
      <Image src={Logo} alt="Logo of Netflix" width={500} />
    </div>
  );
}
