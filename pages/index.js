import client from "@/src/apollo/client";
import { HomeQuery } from "@/src/queries/homeQuery";
import Layout from "@/src/components/layouts";
import { FooterQuery } from "@/src/queries/footerQuery";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import Link from "next/link";
import LatestWork from "../src/components/latestWork";
import GetInTouch from "@/src/components/getInTouch";
import DiscriptionBtn from "@/src/components/discriptionBtn";
import Review from "@/src/components/review";
import GetInTouchFooter from "@/src/components/getIntouchFooter";
import Head from "next/head";

export default function Home(homeData, footerData) {
  console.log()
  const homePageData = homeData?.homeData.page.homePageSections;
  const workData = homeData?.homeData.ourWorks;
  const postData = homeData?.homeData.posts;
  const testimonialData =
    homeData?.homeData.generalSettings.acfGeneralSettings.ourClientsSection;

  return (
    <>
      <Layout data={homeData.footerData}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico"></link>
          <title>{homePageData.seoSection.title}</title>
          <meta
            name="description"
            content={homePageData.seoSection.metaDescription}
          ></meta>
        </Head>

        {/* <!-- Banner Section --> */}

        <div className="banner-section">
          <Container>
            <div className="banner-wrap d-flex flex-wrap align-items-center">
              <div className="banner-left w50 b-left">
                <h1>
                  <span>{homePageData.bannerSection.bannerTitle}</span>
                  <br />
                  {homePageData.bannerSection.bannerSubtitle}
                </h1>
                <div className="sub-title">
                  {homePageData.bannerSection.bannerDescription}
                </div>
                <div className="box-shadow banner-logos ">
                  <ul className="banner-logo-list">
                    {homePageData.bannerSection.bannerBottomImages.map(
                      (item) => {
                        return (
                          <li key={item.bottomImage.mediaItemUrl}>
                            <Image
                              src={item.bottomImage.mediaItemUrl}
                              alt="ecommerce"
                            />
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
                <button className="fill">
                  <Link href="/contact-us">
                    {homePageData.bannerSection.bannerButton.title}
                  </Link>
                </button>
              </div>
              <div className="banner-right w50">
                {/* <img
                  src={homePageData.bannerSection.bannerImage.mediaItemUrl}
                  alt="ecommerce"
                /> */}
                <Image
                  src={homePageData.bannerSection.bannerImage.mediaItemUrl}
                  alt="ecommerce"
                />
              </div>
            </div>
          </Container>
        </div>

        {/* <!-- About Us --> */}

        <div className="about-us-section dark-color triangle-bottom">
          <div className="container">
            <div className="half-grid d-flex flex-wrap">
              <div className="half-grid-left w50">
                <Image
                  src={homePageData.aboutUsSection.aboutUsImage.mediaItemUrl}
                  alt="ecommerce"
                />
              </div>
              <div className="half-grid-right w50">
                <h2
                  className="white-text"
                  dangerouslySetInnerHTML={{
                    __html: homePageData.aboutUsSection?.aboutUsTitle,
                  }}
                ></h2>
                <div className="sub-title colored-text">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: homePageData.aboutUsSection?.aboutUsDescription,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Our Services --> */}

        <div className="our-services">
          <Container>
            <div className="main-title pb-50">
              <h2>{homePageData.ourServiceSection?.ourServiceTitle}</h2>
              <div
                className="sub-title"
                dangerouslySetInnerHTML={{
                  __html: homePageData.ourServiceSection?.ourServiceDescription,
                }}
              ></div>
            </div>
            <Row className="our-services-box">
              {homePageData.ourServiceSection?.ourServiceRepeater.map(
                (item) => {
                  return (
                    <Col
                      key={item.contentTitle}
                      sm={12}
                      md={6}
                      lg={3}
                      className="our-services-wrap"
                    >
                      <Card className="inner">
                        <figure>
                          <Image
                            src={item.contentImage.mediaItemUrl}
                            alt="ecommerce"
                          />
                        </figure>
                        <Card.Body>
                          <Card.Title>
                            <h4>{item.contentTitle}</h4>
                          </Card.Title>
                          <Card.Text className="description">
                            {item.contentDescription}
                          </Card.Text>
                        </Card.Body>
                        <div className="read-more">
                          <Link href={item.contentButtonLink.url}>{item.contentButtonLink.title}</Link>
                        </div>
                      </Card>
                    </Col>
                  );
                }
              )}
            </Row>
          </Container>
        </div>

        {/* <!-- Why Choose WPWeb Infotech --> */}

        <div className="why-choose-wpweb-section triangle-top-bottom light-bg-color">
          <Container>
            <div className="main-title pb-50">
              <h2>{homePageData.whyChooseBrainspateSection?.whyChooseTitle}</h2>
              <div
                className="sub-title"
                dangerouslySetInnerHTML={{
                  __html:
                    homePageData.whyChooseBrainspateSection
                      ?.whyChooseDescription,
                }}
              >
                {/* {homePageData.whyChooseBrainspateSection?.whyChooseDescription} */}
              </div>
            </div>
            <div className="why-choose-wpweb-box d-flex flex-wrap bg-gradient-10">
              {homePageData.whyChooseBrainspateSection?.whyChooseRepeater.map(
                (item) => {
                  return (
                    <div
                      key={item.classname}
                      className="why-choose-wpweb-inner"
                    >
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
          </Container>
        </div>

        {/* <!-- Our Latest Work --> */}

        <LatestWork
          data={homePageData.ourLatestWorkSection}
          workData={workData}
        />

        {/* <!-- Get In Touch --> */}

        <div className="get-in-touch dark-bg-half">
          <Container>
            <div className="get-in-touch-wrap">
              <GetInTouch data={homePageData.getInTouchSection} />
            </div>
          </Container>
        </div>

        {/* <!-- Trusted By --> */}

        <div className="trusted-by-section dark-color color-triangle-bottom">
          <Container>
            <div className="title">
              <h2 className="white-text">
                {homePageData.trustedBySection?.trustedByTitle}
              </h2>
            </div>
            <div className="trusted-by-logo d-flex flex-wrap">
              {homePageData.trustedBySection?.trustedByRepeater.map((item) => {
                return (
                  <div
                    key={item.trustedByImage.mediaItemUrl}
                    className="trusted-by-image"
                  >
                    <figure>
                      <Image
                        src={item.trustedByImage.mediaItemUrl}
                        alt="ecommerce"
                      />
                    </figure>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>

        {/* <!-- Recent Blogs --> */}

        {/* <div className="recent-blogs color-triangle-top light-bg-color">
          <div className="container">
            <DiscriptionBtn
              title={homePageData.recentBlogsSection?.recentBlogsTitle}
              subTitle={
                <>{homePageData.recentBlogsSection?.recentBlogsDescription}</>
              }
            />
            <div className="recent-blogs-box d-flex flex-wrap">
              {postData.edges.map((item) => {
                return (
                  <div key={item.node.title} className="recent-blogs-wrap">
                    <div className="inner">
                      <figure>
                        <a href="#">
                          // <img
                          //   src={item.node.featuredImage.node.mediaItemUrl}
                          //   alt="Link-Building-Guide"
                          //   className="w-100"
                          // />
                          <Image
                            src={item.node.featuredImage.node.mediaItemUrl}
                            className="w-100"
                            alt="ecommerce"
                          />
                        </a>
                      </figure>
                      <div className="recent-blogs-content">
                        <h3>
                          {" "}
                          <a href="#"> {item.node.title}</a>
                        </h3>
                        <div className="category-wrap">
                          <ul className="list-style-none">
                            {item.node.categories.nodes.map((category) => {
                              return (
                                <li>
                                  <a href="#">{category.name}</a>
                                </li>
                              );
                            })}
                          </ul>
                          <div className="min-read"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        {/* <!-- See What Our Clients Say --> */}

        <Review data={testimonialData} />

        <GetInTouchFooter data={homePageData.solutionSection} />
      </Layout>
    </>
  );
}

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

// export async function handler(req, res) {
//   console.log("res" , req)
//   // Check for secret to confirm this is a valid request
//   if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
 
//   try {
//     // this should be the actual path not a rewritten path
//     // e.g. for "/blog/[slug]" this should be "/blog/post-1"
//     // await res.revalidate('/path-to-revalidate');
//     await res.revalidate(req.query.path);
//     console.log("process.env.MY_SECRET_TOKEN", process.env.MY_SECRET_TOKEN)
//     return res.json({ revalidated: true });
//   } catch (err) {
//     // If there was an error, Next.js will continue
//     // to show the last successfully generated page
//     return res.status(500).send('Error revalidating');
//   }
// }
