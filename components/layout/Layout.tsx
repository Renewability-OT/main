import Head from "next/head";
import React, { ReactNode } from "react";
import { Navbar } from "../navbar/Navbar";

interface LayoutProps {
  children?: ReactNode;
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const pageTitle = `${title} - Renewability`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/icon/favicon/favicon.ico"
        />
      </Head>
      <Navbar />
      <div>{children}</div>
    </>
  );
};
