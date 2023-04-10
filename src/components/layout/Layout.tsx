import Head from "next/head";
import React, {ReactNode, useEffect, useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";
import {Footer} from "../footer/Footer";
import {Header} from "../header/Header";
import {Notification} from "../notification/Notification";

interface LayoutProps {
    children?: ReactNode;
    title?: string;
    removeFooter?: boolean
}

export const Layout: React.FC<LayoutProps> = ({children, title, removeFooter}) => {
    const {darkMode} = useContext(ThemeContext);
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
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <Notification/>
            <div>{children}</div>
            <Footer removeFooter={removeFooter}/>
        </div>
    );
};
