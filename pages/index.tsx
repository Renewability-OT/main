import { Banner } from "../components/banner/Banner";
import { AboutUs } from "../components/aboutus/AboutUs";
import { Layout } from "../components/layout/Layout";
import { Services } from "../components/services/Services";
import { Blog } from "../components/blog/Blog";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <Banner />
        <AboutUs />
        <Services/>
        <Blog/>
      </Layout>
    </>
  );
}
