import React from 'react';
import type {AppProps} from "next/app";
import "../../src/styles/globals.css";
import {ThemeContextProvider} from "../context/ThemeContext";
import {BlogContextProvider} from "../context/BlogContext";
import {NotificationProvider} from "../context/NotificationContext";

export default function App({Component, pageProps}: AppProps) {

    return (
        <ThemeContextProvider>
            <NotificationProvider>
                <BlogContextProvider>
                    <Component {...pageProps} />
                </BlogContextProvider>
            </NotificationProvider>
        </ThemeContextProvider>
    );
}
