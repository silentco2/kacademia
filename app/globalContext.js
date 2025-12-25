'use client';
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  const [theme, setTheme] = useState("purple");
  const values = { theme: theme, setTheme: setTheme }
  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobal = () => useContext(GlobalContext)