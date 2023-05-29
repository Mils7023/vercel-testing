import client from "@/src/apollo/client";
import { HomeQuery } from "@/src/queries/homeQuery";
import Layout from "@/src/components/layouts";
import { FooterQuery } from "@/src/queries/footerQuery";
import Review from "@/src/components/review";
import GetInTouchFooter from "@/src/components/getIntouchFooter";
import Head from "next/head";
import Link from "next/link";
import goDaddy from "../public/images/GoDaddy-Logo.png";
import contec from "../public/images/contac.png";
import amazone from "../public/images/amazon.png";
import pageOne from "../public/images/Home-resources/pageone-logo-140-181.1.png";
import balieysLiving from "../public/images/Home-resources/baileysliving-2.png";
import myClub from "../public/images/Home-resources/myclub.png";
import { Card, Col, Image, Row } from "react-bootstrap";
import Goodfirms from "../public/images/Home-resources/Goodfirms copy.png";
import Itfirms from "../public/images/Home-resources/Itfirms copy.png";
import itRate from "../public/images/Home-resources/itRate.co.png";
import Manifest from "../public/images/Home-resources/Manifest.png";
import Selectedfirms from "../public/images/Home-resources/Selectedfirms.png";
import StarImg from "../public/images/review-star.svg";
import aboutBanner from "../public/images/about-banner.png";
import aboutImg from "../public/images/about.svg";

const AboutUs = (data) => {
  console.log("data", data);
  const homePageData = data?.homeData.page.homePageSections;
  const testimonialData =
    data?.homeData.generalSettings.acfGeneralSettings.ourClientsSection;
  return (
    <Layout data={data.footerData}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico"></link>
        <title>About Us</title>
        {/* <meta
          name="description"
          content={commanServiceData.seoSection.metaDescription}
        ></meta> */}
      </Head>

      <div className="testimonial-banner ">
        <div className="testimonial-sectione-com dark-color triangle-bottom">
          <div className="container testimaonial-main">
            <div className="banner-wrap d-flex flex-wrap align-items-center">
              <div className="banner-left w50">
                <div className="sub-title-top text-top">
                  Home / <span>About</span>
                </div>
                <h1>
                  Development Partner to <br /> Empower your
                  <span>Business</span>
                </h1>
                <div className="sub-title pb-38">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets.
                </div>
              </div>
              <div className="banner-right w50">
                <Image src={aboutBanner.src} alt="banner" />
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-50 pt-50">
          <div className="banner-sec-logos d-flex flex-wrap justify-space-between">
            {/* {props.logoImg.map((item) => {
              return (
                <div key={item.bannerLogos.mediaItemUrl} className="logo-image">
                  <figure>
                    <Image src={item.bannerLogos.mediaItemUrl} alt="GoDaddy" />
                  </figure>
                </div>
              );
            })} */}
            <div className="logo-image">
              <figure>
                <Image src={goDaddy.src} alt="GoDaddy" />
              </figure>
            </div>
            <div className="logo-image">
              <figure>
                <Image src={contec.src} alt="contec-Logo" />
              </figure>
            </div>

            <div className="logo-image">
              <figure>
                <Image src={amazone.src} alt="amazone-logo" />
              </figure>
            </div>
            <div className="logo-image">
              <figure>
                <Image src={pageOne.src} alt="pageOne" />
              </figure>
            </div>

            <div className="logo-image">
              <figure>
                <Image src={balieysLiving.src} alt="balieysliving-logo" />
              </figure>
            </div>
            <div className="logo-image">
              <figure>
                <Image src={myClub.src} alt="MyClub" />
              </figure>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="why-choose-wpweb-section triangle-top-bottom light-bg-color">
        <div className="container">
          <div className="main-title pb-50">
            <h2>{homePageData.whyChooseBrainspateSection?.whyChooseTitle}</h2>
            <div
              className="sub-title"
              dangerouslySetInnerHTML={{
                __html:
                  homePageData.whyChooseBrainspateSection?.whyChooseDescription,
              }}
            ></div>
          </div>
          <div className="why-choose-wpweb-box d-flex flex-wrap bg-gradient-10">
            {homePageData.whyChooseBrainspateSection?.whyChooseRepeater.map(
              (item) => {
                return (
                  <div key={item.classname} className="why-choose-wpweb-inner">
                    <div className="inner">
                      <div className={`number ${item.classname}`}>
                        {item.addNumber}
                      </div>
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: item.addTitle,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <div className="best-e-commerce">
        <div className="container">
          <div className="half-grid d-flex flex-wrap align-items-center">
            <div className="half-grid-left w50">
              <Image src={aboutImg.src} alt="about" />
            </div>
            <div className="half-grid-right w50">
              <h2
                className=""
                // dangerouslySetInnerHTML={{ __html: props.title }}
              >
                What We Do?
              </h2>
              <div className="sub-title ">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make. <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
                {/* <p>{props.subTitleTwo}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Award Section --> */}

      <div className="container pb-50 pt-50">
        <h2>Best eCommerce Development Company India</h2>
        <div className="award-sec-logos d-flex flex-wrap justify-space-between">
          <div className="logo-image">
            <figure>
              <Image src={Goodfirms.src} alt="Goodfirms" />
            </figure>
          </div>
          <div className="logo-image">
            <figure>
              <Image src={Itfirms.src} alt="contec-Logo" />
            </figure>
          </div>

          <div className="logo-image">
            <figure>
              <Image src={itRate.src} alt="amazone-logo" />
            </figure>
          </div>
          <div className="logo-image">
            <figure>
              <Image src={Manifest.src} alt="pageOne" />
            </figure>
          </div>

          <div className="logo-image">
            <figure>
              <Image src={Selectedfirms.src} alt="balieysliving-logo" />
            </figure>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="review-main">
          <div className="main-title d-flex flex-wrap align-items-center justify-space-between pb-38">
            <div className="title-left d-flex align-items-center w-80">
              <h2>
                BrainSpate Reviews By <span>Clutch</span>
              </h2>
              <div className="d-flex align-items-center review-star">
                <h3>4.7</h3>
                <Image src={StarImg.src} alt="star" />
                <Image src={StarImg.src} alt="star" />
                <Image src={StarImg.src} alt="star" />
                <Image src={StarImg.src} alt="star" />
                <Image src={StarImg.src} alt="star" />
              </div>
            </div>

            <div className="title-right">
              <div className="fill">
                <Link href="">View All</Link>
              </div>
            </div>
          </div>
          <div className="review-sec">
            <Row>
              <Col sm={12} md={6} lg={3}>
                <Card className="review-card">
                  <Card.Body>
                    <Card.Title className="review-title d-flex align-items-center">
                      <h4>5.0</h4>
                      <div className="stars-div">
                        <div className="stars">
                          <span className="star on"></span>
                          <span className="star on"></span>
                          <span className="star on"></span>
                          <span className="star on"></span>
                          <span className="star half"></span>
                        </div>
                      </div>
                    </Card.Title>
                    <Card.Text className="review-text">
                      "Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an
                      unknown."
                    </Card.Text>
                    <Card.Text className="review-author">
                      VP of E-Commerce, Luxury Goods Manufacturer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <Card className="review-card">
                  <Card.Body>
                    <Card.Title className="review-title d-flex align-items-center">
                      <h4>5.0</h4>
                      <div className="stars-div">
                        <div className="stars">
                          <span className="star on"></span>
                          <span className="star on"></span>
                          <span className="star on"></span>
                          <span className="star on"></span>
                          <span className="star half"></span>
                        </div>
                      </div>
                    </Card.Title>
                    <Card.Text className="review-text">
                      "Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard."
                    </Card.Text>
                    <Card.Text className="review-author">
                      Owner & Founder, The Heritage Weavers
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <Card className="review-card">
                  <Card.Body>
                    <Card.Title className="review-title d-flex align-items-center">
                      <h4>5.0</h4>
                      <div className="stars-div">
                        <div className="stars">
                          <span className="star on"></span>
                          <span className="star on"></span>
                          <span className="star on"></span>
                          <span className="star on"></span>
                          <span className="star half"></span>
                        </div>
                      </div>
                    </Card.Title>
                    <Card.Text className="review-text">
                      "Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the."
                    </Card.Text>
                    <Card.Text className="review-author">
                      COO, Pixel Parlor
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <Card className="review-card">
                  <Card.Body>
                    <Card.Title className="review-title d-flex align-items-center">
                      <h4>5.0</h4>
                      <div className="stars-div">
                        <div className="stars">
                          <span className="star on"></span>
                          <span className="star on"></span>
                          <span className="star on"></span>
                          <span className="star on"></span>
                          <span className="star half"></span>
                        </div>
                      </div>
                    </Card.Title>
                    <Card.Text className="review-text">
                      "Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an
                      unknown."
                    </Card.Text>
                    <Card.Text className="review-author">
                      VP of E-Commerce, Luxury Goods Manufacturer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <Review data={testimonialData} />

      <GetInTouchFooter data={homePageData.solutionSection} />
    </Layout>
  );
};

export default AboutUs;

export async function getStaticProps(context) {
  const {
    data: homeData,
    loading,
    networkStatus,
  } = await client.query({
    query: HomeQuery,
  });

  const { data: footerData } = await client.query({
    query: FooterQuery,
  });

  return {
    props: {
      homeData: homeData,
      footerData: footerData,
    },
    revalidate: 10,
  };
}


