import client from "@/src/apollo/client";
import { FooterQuery } from "@/src/queries/footerQuery";
import { wooCommerceQuery } from "@/src/queries/wooCommerceQuery.js";
import Layout from "@/src/components/layouts";
import Head from "next/head";
import ServiceBanner from "../../src/components/serviceBanner";
import OurServices from "../../src/components/ourServices";
import OurSolution from "../../src/components/ourSolution";
import ServiceFeature from "../../src/components/serviceFeature";
import GetInTouch from "../../src/components/getInTouch";
import LatestWork from "@/src/components/latestWork";
import Review from "@/src/components/review";
import FAQ from "../../src/components/FAQ";
import GetInTouchFooter from "@/src/components/getIntouchFooter";
import DevelopmentProcess from "@/src/components/developmentProcess";
import ChooseUs from "@/src/components/chooseUs";
import WordpressEnt from "@/src/components/wordpressEnt";
import WhyServices from "@/src/components/whyServices";
import ThemesAndPlugins from "@/src/components/themesAndPlugins";

const wooCommerce = (data) => {
  const commanServiceData =
    data?.wooCommerceData?.page.template.commanServicesSection;
  const workData = data?.wooCommerceData?.ourWorks;
  const testimonialData =
    data?.wooCommerceData.generalSettings.acfGeneralSettings.ourClientsSection;
  const serviceData = data?.wooCommerceData.page.woocommerceSections;
  return (
    <>
      <Layout data={data.footerData}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico"></link>
          <title>{commanServiceData.seoSection.title}</title>
          <meta
            name="description"
            content={commanServiceData.seoSection.metaDescription}
          ></meta>
        </Head>

        {/* <!-- banner-section-start --> */}
        <ServiceBanner
          bannerTitle={commanServiceData.bannerSection.bannerTitle}
          discription={commanServiceData.bannerSection.bannerSubtitle}
          bannerImg={commanServiceData.bannerSection.bannerImage.mediaItemUrl}
          logoImg={commanServiceData.bannerSection.bannerRepeater}
        />

        {/* <!-- our-services-section-start --> */}
        <OurServices data={commanServiceData.ourServicesSection} />

        {/* <!-- best-e-commerce-start --> */}
        <ServiceFeature
          serviceImg={
            commanServiceData.bestServicesSection.bestServicesImage.mediaItemUrl
          }
          title={commanServiceData.bestServicesSection.bestServicesTitle}
          discription={
            commanServiceData.bestServicesSection.bestServicesDescription
          }
        />

        <OurSolution data={commanServiceData.ourSolutionsSection} />

        <WordpressEnt data={serviceData.enterpriseSection} />

        <WhyServices data={serviceData.whyWoocommerceSection} />

        {/* <!-- eCommerce-process-start --> */}
        <DevelopmentProcess
          data={commanServiceData.developmentProcessSection}
        />

        {/* <!-- get-in-touch-section-start --> */}
        <div className="get-in-touch">
          <div className="container">
            <div className="get-in-touch-wrap">
              <GetInTouch data={commanServiceData.getInTouchSection} />
            </div>
          </div>
        </div>

        {/* <!-- why-choose-us-section-start --> */}
        <ChooseUs data={commanServiceData.whyChooseSection} />

        <ThemesAndPlugins data={serviceData.themesAndPluginsSection} />

        {/* <!-- our-latest-work-section-start --> */}
        <LatestWork
          data={commanServiceData.ourLatestWorkSection}
          workData={workData}
        />

        {/* <!-- our-clients-section-start --> */}
        <div className="triangle-top-bottom light-bg-color">
          <Review data={testimonialData} />
        </div>

        <FAQ data={commanServiceData.servicesFaqSection} />

        <GetInTouchFooter data={commanServiceData.solutionSection} />
      </Layout>
    </>
  );
};

export default wooCommerce;

export async function getStaticProps(context) {
  const { data: footerData } = await client.query({
    query: FooterQuery,
  });

  const { data: wooCommerceData } = await client.query({
    query: wooCommerceQuery,
  });

  return {
    props: {
      footerData: footerData,
      wooCommerceData: wooCommerceData,
    },
    revalidate: 10,
  };
}
