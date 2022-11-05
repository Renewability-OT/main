import Head from "next/head";
import React, { ReactNode, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Navbar } from "../navbar/Navbar";

interface LayoutProps {
  children?: ReactNode;
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const { darkMode } = useContext(ThemeContext);
  const pageTitle = `${title} - Renewability`;

  useEffect(() => {
    darkMode
      ? (document.body.style.backgroundColor = "#383C3E")
      : (document.body.style.backgroundColor = "#FEFEFE");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
