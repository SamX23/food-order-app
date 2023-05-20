import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import ContextProvider from "@/context/Provider";
import MobileContainer from "@/components/container/MobileContainer";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ContextProvider>
      <MobileContainer>
        <Component {...pageProps} />
      </MobileContainer>
    </ContextProvider>
  );
};

export default appWithTranslation(App);
