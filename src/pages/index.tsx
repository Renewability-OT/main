import {Layout} from "../components/layout/Layout";
import {BannerSection} from "../components/banner-section/BannerSection";
import {AboutUsSection} from "../components/aboutus-section/AboutUsSection";
import {ServicesSection} from "../components/services-section/ServicesSection";
import {BlogSection} from "../components/blog-section/BlogSection";

export default function Home() {
    return (
        <>
            <Layout title="Home">
                <BannerSection/>
                <AboutUsSection/>
                <ServicesSection/>
                <BlogSection/>
            </Layout>
        </>
    );
}
