import type {AppProps} from "next/app";
import "../../src/styles/globals.css";
import {ThemeContextProvider} from "../context/ThemeContext";
import {BlogContextProvider} from "../context/BlogContext";

export default function App({Component, pageProps}: AppProps) {

    return (
        <ThemeContextProvider>
            <BlogContextProvider>
                <Component {...pageProps} />
            </BlogContextProvider>
        </ThemeContextProvider>
    );
}
