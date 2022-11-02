import Head from "next/head";
import React, { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} - Renewability OT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/icon/favicon/favicon.ico"
        />
      </Head>
      <div>{children}</div>
    </>
  );
};
