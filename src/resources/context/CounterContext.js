import { createContext } from "react";

import MainStore from "../store/MainStore";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const store = new MainStore();

  return (
    <CounterContext.Provider value={{ store }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
