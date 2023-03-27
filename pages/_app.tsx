import ContextProvider from "@/context/Provider";
import "@/styles/globals.css";
import MobileContainer from "@/components/container/MobileContainer";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <MobileContainer>
        <Component {...pageProps} />
      </MobileContainer>
    </ContextProvider>
  );
}
