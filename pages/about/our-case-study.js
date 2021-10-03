import Head from "next/head";
import NavComponent from "../../components/NavComponent";
import HeaderComponent from "../../components/HeaderComponents";
import FooterComponent from "../../components/FooterComponent";
import OurLatestProject from "../../components/OurLatestProject";
import ContactUsComponent from "../../components/ContactUsComponent";
import MakeWebsiteComponent from "../../components/MakeWebsiteComponent";

export default function OurCaseStudy() {
  return (
    <div>
      <Head>
        <title>Technoindiaz | Company </title>
        <meta name="description" content="Technoindiaz homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavComponent setColor="#ffffff" />
      <HeaderComponent name="our case study" />
      <OurLatestProject />
      <ContactUsComponent />
      <MakeWebsiteComponent />
      <FooterComponent />
    </div>
  );
}
