import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useState, createContext, SetStateAction, Dispatch } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  );
}
