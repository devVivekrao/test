import Head from "next/head";
import NavComponent from "../../components/NavComponent";
import FooterComponent from "../../components/FooterComponent";
import MakeWebsiteComponent from "../../components/MakeWebsiteComponent";
import HeaderComponent from "../../components/HeaderComponents";
import HowWeCanHelpComponent from "../../components/HowWeCanHelpComponent";
import CardComponent from "../../components/CardComponents";
import HelpProcessComponent from "../../components/HelpProcessComponent";
import ContactUsComponent from "../../components/ContactUsComponent";
import OurLatestProject from "../../components/OurLatestProject";
import Testimonials from "../../components/Testimonials";

export default function AppDevelopment() {
  return (
    <div>
      <Head>
        <title>Technoindiaz | Career </title>
        <meta name="description" content="Technoindiaz homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavComponent setColor="#ffffff" />
      <HeaderComponent name="online education app" />
      <HowWeCanHelpComponent />
      <CardComponent />
      <HelpProcessComponent />
      <Testimonials />
      <OurLatestProject />
      <ContactUsComponent />
      <MakeWebsiteComponent />
      <FooterComponent />
    </div>
  );
}
