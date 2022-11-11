import "../../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { CustomPageProps } from "../interface";
import Footer from "../components/common/Footer";

export default function App({
  Component,
  pageProps,
}: AppProps<CustomPageProps>) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
