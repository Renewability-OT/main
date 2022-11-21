import { Banner } from "../components/banner/Banner";
import { AboutUs } from "../components/aboutus/AboutUs";
import { Layout } from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <Banner />
        <AboutUs />
      </Layout>
    </>
  );
}
