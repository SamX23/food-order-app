import { useCallback, useState } from "react";
import Context, { initialValue } from "@/context";
import { App as KonstaApp } from "konsta/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [basket, setBasket] = useState<any>(initialValue.basket.items);

  const addToBasket = useCallback(
    (item: any) => setBasket((state: []) => [...state, item]),
    []
  );

  return (
    <Context.Provider value={{ basket, addToBasket }}>
      <KonstaApp theme="ios">
        <Component {...pageProps} />
      </KonstaApp>
    </Context.Provider>
  );
}
