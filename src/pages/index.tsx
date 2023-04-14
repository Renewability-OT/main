import React, {useState} from 'react';
import {Layout} from "../components/layout/Layout";
import {BannerSection} from "../components/banner-section/BannerSection";
import {AboutUsSection} from "../components/aboutus-section/AboutUsSection";
import {ServicesSection} from "../components/services-section/ServicesSection";
import {BlogSection} from "../components/blog-section/BlogSection";
import {ContactForm} from "../components/forms/ContactForm";

export default function Home() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Layout title="Home">
                <BannerSection setShowModal={setShowModal}/>
                <AboutUsSection/>
                <ServicesSection/>
                <BlogSection/>
                {!showModal ||
                    <ContactForm showModal={showModal}
                                 setShowModal={() => setShowModal(false)}/>}
            </Layout>
        </>
    );
}
