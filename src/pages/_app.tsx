import type {AppProps} from "next/app";
import "../../src/styles/globals.css";
import {ThemeContextProvider} from "../context/ThemeContext";

export default function App({Component, pageProps}: AppProps) {

    return (
        <ThemeContextProvider>
            <Component {...pageProps} />
        </ThemeContextProvider>
    );
}
