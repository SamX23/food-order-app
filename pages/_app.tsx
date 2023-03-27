import { App as KonstaApp } from "konsta/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <KonstaApp theme="ios">
      <Component {...pageProps} />
    </KonstaApp>
  );
}
