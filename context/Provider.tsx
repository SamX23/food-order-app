import { createContext, useContext, useReducer } from "react";
import { initialValue, reducer } from "@/context/reducer";

export const StateContext = createContext(initialValue);

const ContextProvider = ({ children }: any) => {
  return (
    // TODO : Fix type error
    // @ts-ignore
    <StateContext.Provider value={useReducer(reducer, initialValue)}>
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalState = () => useContext(StateContext);

export default ContextProvider;
