import Head from "next/head";
import NavComponent from "../../components/NavComponent";
import FooterComponent from "../../components/FooterComponent";
import MakeWebsiteComponent from "../../components/MakeWebsiteComponent";
import HeaderComponent from "../../components/HeaderComponents";
import ContactUsComponent from "../../components/ContactUsComponent";
import AwesomeServiceComponent from "../../components/AwesomeServiceComponent";

import HeadFeature from "../../components/HeadFeature";
export default function WebDevelopment() {
  return (
    <div>
      <Head>
        <title>Technoindiaz | Career </title>
        <meta name="description" content="Technoindiaz homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent setColor="#ffffff" />
      <HeaderComponent name="web development" />
      <HeadFeature name="Web Development" price="12000" />
      <AwesomeServiceComponent title="our awesome web development services" />
      <ContactUsComponent />
      <MakeWebsiteComponent />
      <FooterComponent />
    </div>
  );
}
