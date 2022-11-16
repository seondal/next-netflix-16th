import "../../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "../components/common/Layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
