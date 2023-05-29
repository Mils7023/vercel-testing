import client from "@/src/apollo/client";
import { FooterQuery } from "@/src/queries/footerQuery";
import { SalesForceQuery } from "@/src/queries/salesForceQuery";
import Layout from "@/src/components/layouts";
import ServiceBanner from "../../src/components/serviceBanner";
import Head from "next/head";
import OurServices from "@/src/components/ourServices";
import ServiceFeature from "@/src/components/serviceFeature";
import OurSolution from "@/src/components/ourSolution";
import DevelopmentProcess from "@/src/components/developmentProcess";
import GetInTouch from "@/src/components/getInTouch";
import LatestWork from "@/src/components/latestWork";
import Review from "@/src/components/review";
import FAQ from "@/src/components/FAQ";
import GetInTouchFooter from "@/src/components/getIntouchFooter";
import SalesForceCloud from "@/src/components/salesForceCloud";
import WhyServices from "@/src/components/whyServices";

const salesForce = (data) => {
  const commanServiceData =
    data?.salesForceData?.page.template.commanServicesSection;
  const workData = data?.salesForceData?.ourWorks;
  const testimonialData =
    data?.salesForceData.generalSettings.acfGeneralSettings.ourClientsSection;
  const serviceData = data?.salesForceData.page.salesforceSections;
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

      <SalesForceCloud data={serviceData.cloudServicesSection} />

      <WhyServices data={serviceData.criticalFeaturesSection} />

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
      <div className="triangle-top-bottom light-bg-color">
        <Review data={testimonialData} />
      </div>

      <FAQ data={commanServiceData.servicesFaqSection} />

      <GetInTouchFooter data={commanServiceData.solutionSection} />
    </Layout>
  );
};

export default salesForce;

export async function getStaticProps(context) {
  const { data: footerData } = await client.query({
    query: FooterQuery,
  });
  const { data: salesForceData } = await client.query({
    query: SalesForceQuery,
  });

  return {
    props: {
      footerData: footerData,
      salesForceData: salesForceData,
    },
    revalidate: 10,
  };
}
