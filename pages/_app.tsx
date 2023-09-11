import Head from "next/head";
import type { AppProps } from "next/app";
import "nextra-theme-blog/style.css";

import "../app/globals.css";

export default function Nextra({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
