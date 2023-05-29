import client from "@/src/apollo/client";
import { FooterQuery } from "@/src/queries/footerQuery";
import { ShopifyQuery } from "@/src/queries/shopifyQuery";
import Layout from "@/src/components/layouts";
import ServiceBanner from "../../src/components/serviceBanner";
import LatestWork from "@/src/components/latestWork";
import Review from "@/src/components/review";
import Head from "next/head";
import OurServices from "@/src/components/ourServices";
import ServiceFeature from "@/src/components/serviceFeature";
import OurSolution from "@/src/components/ourSolution";
import ChooseUs from "@/src/components/chooseUs";
import WhyServices from "@/src/components/whyServices";
import DevelopmentProcess from "@/src/components/developmentProcess";
import GetInTouch from "@/src/components/getInTouch";
import BusinessNeeds from "@/src/components/businessNeeds";
import FAQ from "@/src/components/FAQ";
import GetInTouchFooter from "@/src/components/getIntouchFooter";

const shopify = (data) => {
  const commanServiceData =
    data?.shopifyData?.page.template.commanServicesSection;
  const workData = data?.shopifyData?.ourWorks;
  const testimonialData =
    data?.shopifyData.generalSettings.acfGeneralSettings.ourClientsSection;
  const serviceData = data?.shopifyData.page.shopifySections;
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

      <WhyServices data={serviceData.whyShopifySection} />

      {/* <!-- eCommerce-process-start --> */}
      <DevelopmentProcess data={commanServiceData.developmentProcessSection} />

      {/* <!-- get-in-touch-section-start --> */}
      <div className="get-in-touch shopify-bg-half">
        <div className="container">
          <div className="get-in-touch-wrap">
            <GetInTouch data={commanServiceData.getInTouchSection} />
          </div>
        </div>
      </div>

      <BusinessNeeds data={serviceData.businessNeedsSection} />

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
  );
};

export default shopify;

export async function getStaticProps(context) {
  const { data: footerData } = await client.query({
    query: FooterQuery,
  });

  const { data: shopifyData } = await client.query({
    query: ShopifyQuery,
  });

  return {
    props: {
      footerData: footerData,
      shopifyData: shopifyData,
    },
    revalidate: 10,
  };
}
