import React, {useContext, useEffect} from "react";
import {Layout} from "../components/layout/Layout";
import {ScrollContext} from "../context/ScrollContext";
import Geriatric from "../components/services/Geriatric";
import Pediatric from "../components/services/Pediatric";
import Reiki from "../components/services/Reiki";

export default function Services() {
    const {scrollId} = useContext(ScrollContext)

    useEffect(() => {
        const element = document.getElementById(scrollId);
        if (element) {
            window.scrollTo({
                behavior: 'smooth',
                top: element.offsetTop - 80,
            })
        }

    }, [])

    return (
        <>
            <Layout title="Services">
                <Geriatric/>
                <Pediatric/>
                <Reiki/>
            </Layout>
        </>
    );
}