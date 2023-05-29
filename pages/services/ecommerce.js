import client from "@/src/apollo/client";
import Layout from "@/src/components/layouts";
import { FooterQuery } from "@/src/queries/footerQuery";
import { eCommerceQuery } from "@/src/queries/eCommerceQuery";
import ServiceBanner from "../../src/components/serviceBanner";
import OurServices from "../../src/components/ourServices";
import OurSolution from "../../src/components/ourSolution";
import ServiceFeature from "../../src/components/serviceFeature";
import DevelopmentTypes from "../../src/components/developmentTypes";
import { Image } from "react-bootstrap";
import DevelopmentProcess from "../../src/components/developmentProcess";
import ChooseUs from "../../src/components/chooseUs";
import GetInTouch from "../../src/components/getInTouch";
import LatestWork from "@/src/components/latestWork";
import Review from "@/src/components/review";
import FAQ from "../../src/components/FAQ";
import GetInTouchFooter from "@/src/components/getIntouchFooter";
import Head from "next/head";

const eCommerce = (data) => {
  const commanServiceData =
    data?.eCommerceData?.page.template.commanServicesSection;
  const workData = data?.eCommerceData?.ourWorks;
  const testimonialData =
    data?.eCommerceData.generalSettings.acfGeneralSettings.ourClientsSection;
  const serviceData = data?.eCommerceData.page.ecommerceDevelopmentSections;

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

        {/* <!-- platforms-section-start --> */}
        <div className="platforms">
          <div className="container">
            <div className="main-title pb-50">
              <h2 className="">
                {serviceData.ecommercePlatformsWeUse.weUseTitle}
              </h2>
              <div
                className="sub-title"
                dangerouslySetInnerHTML={{
                  __html: serviceData.ecommercePlatformsWeUse.weUseDescription,
                }}
              ></div>
            </div>
            <div className="platforms-main d-flex flex-wrap">
              {serviceData.ecommercePlatformsWeUse.weUseRepeater.map((item) => {
                return (
                  <div
                    key={item.addContentNumber}
                    className="platforms-box w-50"
                  >
                    <div className={`inner ${item.addClassname}-border`}>
                      <div className="platforms-image-text d-flex flex-wrap align-items-center">
                        <figure className={`${item.addClassname}-bg`}>
                          <Image
                            src={item.addContentImage.mediaItemUrl}
                            alt="shopify-icon"
                          />
                        </figure>
                        <h3>{item.addContentTitle}</h3>
                      </div>
                      <div className="description">
                        {item.addContentDescription}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <!-- Types of eCommerce Stores-section --> */}
        <DevelopmentTypes data={serviceData.ecommerceTypesSection} />

        {/* <!-- eCommerce-process-start --> */}
        <DevelopmentProcess
          data={commanServiceData.developmentProcessSection}
        />

        {/* <!-- why-choose-us-section-start --> */}
        <ChooseUs data={commanServiceData.whyChooseSection} />

        {/* <!-- advantages-section-start --> */}
        <div className="advantages triangle-top-bottom bg-purple-light">
          <div className="container">
            <div className="main-title pb-50">
              <h2 className="">
                {
                  serviceData.ecommerceAdvantagesSection
                    .ecommerceAdvantagesTitle
                }
              </h2>
              <div
                className="sub-title"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceData.ecommerceAdvantagesSection
                      .ecommerceAdvantagesDescription,
                }}
              ></div>
            </div>
            <div className="advantages-main d-flex flex-wrap">
              {serviceData.ecommerceAdvantagesSection.ecommerceAdvantagesRepeater.map(
                (item) => {
                  return (
                    <div
                      key={item.ecommerceAdvantagesContentTitle}
                      className="advantages-content d-flex align-items-center"
                    >
                      <div className="advantages-icon">
                        <figure>
                          <Image
                            src={
                              item.ecommerceAdvantagesContentImage.mediaItemUrl
                            }
                            alt="star-icon"
                          />
                        </figure>
                      </div>
                      <div className="advantages-title">
                        <h4>{item.ecommerceAdvantagesContentTitle}</h4>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* <!-- get-in-touch-section-start --> */}
        <div className="get-in-touch ecom-bg-half">
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
    </>
  );
};

export default eCommerce;

export async function getStaticProps(context) {
  const {
    data: eCommerceData,
    loading,
    networkStatus,
  } = await client.query({
    query: eCommerceQuery,
  });

  const { data: footerData } = await client.query({
    query: FooterQuery,
  });

  return {
    props: {
      eCommerceData: eCommerceData,
      footerData: footerData,
    },
    revalidate: 10,
  };
}

// menu(id: "react-header", idType: SLUG) {
//     menuItems(where: { parentId: "0" }) {
//       nodes {
//         url
//         label
//         childItems {
//           nodes {
//             url
//             label
//             cssClasses
//           }
//         }
//         cssClasses
//       }
//     }
//   }

// menu(id: "live-menu", idType: SLUG) {
//   menuItems(where: {parentId: "0"}) {
//     nodes {
//       url
//       label
//       childItems {
//         nodes {
//           url
//           label
//           cssClasses
//         }
//       }
//       cssClasses
//     }
//   }
// }
