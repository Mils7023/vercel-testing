import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, data }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico"></link>
      </Head>
      <Header headerData={data} />
      <div>{children}</div>
      <Footer footerData={data.generalSettings.acfGeneralSettings} />
      {/* <Footer footerData = {data.footerData.generalSettings.acfGeneralSettings} /> */}
    </>
  );
};

export default Layout;
