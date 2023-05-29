import client from "@/src/apollo/client";
import { FooterQuery } from "@/src/queries/footerQuery";
import { MagentoQuery } from "@/src/queries/magentoQuery";
import Layout from "@/src/components/layouts";
import ServiceBanner from "../../src/components/serviceBanner";
import magentoBanner from "../../public/images/Home-resources/magento-banner.svg";
import Head from "next/head";
import OurServices from "@/src/components/ourServices";
import ServiceFeature from "@/src/components/serviceFeature";
import OurSolution from "@/src/components/ourSolution";
import ChooseUs from "@/src/components/chooseUs";
import DevelopmentProcess from "@/src/components/developmentProcess";
import GetInTouch from "@/src/components/getInTouch";
import LatestWork from "@/src/components/latestWork";
import Review from "@/src/components/review";
import FAQ from "@/src/components/FAQ";
import GetInTouchFooter from "@/src/components/getIntouchFooter";
import WhyServices from "@/src/components/whyServices";

const magento = (data) => {
  // console.log("magentodata", data);
  const commanServiceData =
    data?.magentoData?.page.template.commanServicesSection;
  const workData = data?.magentoData?.ourWorks;
  const testimonialData =
    data?.magentoData.generalSettings.acfGeneralSettings.ourClientsSection;
  const serviceData = data?.magentoData.page.magentoSections;
  return (
    <Layout data={data.footerData}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico"></link>
        <title>{commanServiceData.seoSection.title}</title>
        <meta
          name="description"
          content={commanServiceData.seoSection.metaDescription}
        ></meta>
      </Head>
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

      {/* <!-- why-choose-us-section-start --> */}
      <ChooseUs data={commanServiceData.whyChooseSection} />

      <WhyServices data={serviceData.whyMagentoSection} />

      {/* <!-- eCommerce-process-start --> */}
      <DevelopmentProcess data={commanServiceData.developmentProcessSection} />

      {/* <!-- get-in-touch-section-start --> */}
      <div className="get-in-touch">
        <div className="container">
          <div className="get-in-touch-wrap">
            <GetInTouch data={commanServiceData.getInTouchSection} />
          </div>
        </div>
      </div>

      {/* <!-- our-latest-work-section-start --> */}
      <LatestWork
        data={commanServiceData.ourLatestWorkSection}
        workData={workData}
      />

      {/* <!-- our-clients-section-start --> */}
      <div className="triangle-top-bottom bg-purple-light pb-50">
        <Review data={testimonialData} />
      </div>

      <FAQ data={commanServiceData.servicesFaqSection} />

      <GetInTouchFooter data={commanServiceData.solutionSection} />
    </Layout>
  );
};

export default magento;

export async function getStaticProps(context) {
  const { data: footerData } = await client.query({
    query: FooterQuery,
  });
  const { data: magentoData } = await client.query({
    query: MagentoQuery,
  });

  return {
    props: {
      footerData: footerData,
      magentoData: magentoData,
    },
    revalidate: 10,
  };
}
