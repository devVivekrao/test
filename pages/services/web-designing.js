import Head from "next/head";
import NavComponent from "../../components/NavComponent";
import HeaderComponent from "../../components/HeaderComponents";
import FooterComponent from "../../components/FooterComponent";

export default function WebDesigning() {
  return (
    <div>
      <Head>
        <title>Technoindiaz | Career </title>
        <meta name="description" content="Technoindiaz homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavComponent setColor="#ffffff" />
      <HeaderComponent name="web designing" />
      <h1>Company page </h1>
      <h1>Company page </h1>
      <h1>Company page </h1>
      <h1>Company page </h1>
      <h1>Company page </h1>
      <h1>Company page </h1>
      <h1>Company page </h1>

      <br />
      <br />
      <br />
      <br />
      <br />
      <FooterComponent />
    </div>
  );
}
