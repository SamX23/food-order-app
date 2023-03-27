import { createContext } from "react";

export const initialValue = {
  basket: {
    items: [],
  },
  addToBasket: (args: any) => args,
};

const AppContext = createContext(initialValue);

export default AppContext;
