import Context, { initialValue } from "@/context";
import { useCallback, useState } from "react";

const ContextProvider = ({ children }: any) => {
  const [basket, setBasket] = useState<any>(initialValue.basket.items);

  const addToBasket = useCallback(
    (item: any) => setBasket((state: []) => [...state, item]),
    []
  );

  return (
    <Context.Provider value={{ basket, addToBasket }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
