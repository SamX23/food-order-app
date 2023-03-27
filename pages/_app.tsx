import { App as KonstaApp } from "konsta/react";
import ContextProvider from "@/context/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <KonstaApp theme="ios">
        <Component {...pageProps} />
      </KonstaApp>
    </ContextProvider>
  );
}
