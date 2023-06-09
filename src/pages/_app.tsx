import "bootstrap/dist/css/bootstrap.min.css";  
import "../styles/style.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Calcul-Moy ISIMA</title>
      </Head>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
