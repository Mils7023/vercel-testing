import client from "@/src/apollo/client";
import { HomeQuery } from "@/src/queries/homeQuery";
import Layout from "@/src/components/layouts";
import { FooterQuery } from "@/src/queries/footerQuery";
import Review from "@/src/components/review";
import GetInTouchFooter from "@/src/components/getIntouchFooter";
import Head from "next/head";
import Link from "next/link";
import clientOne from "../public/images/home/Alessandro-Cosentini.png";
import clientTwo from "../public/images/home/client-two.png";
import clientThree from "../public/images/home/client-three.png";
import clientFour from "../public/images/home/John Newcomb.png";
import clientFive from "../public/images/home/Malte Dinkela.png";
import clientSix from "../public/images/home/Isreal Erez.png";
import { Image } from "react-bootstrap";
import testimonialBanner from "../public/images/Home-resources/testimonial-banner.png"


const testimonial = [
  {
    id: 1,
    mediaItemUrl: clientOne,
    clientTitle: "Alessandro Cosentini",
    clientText: "Founder @Pistackio",
    discription:
      "\"Throughout the entire process, they were able to grasp the precise nature of what I was looking for\". <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
  {
    id: 2,
    mediaItemUrl: clientTwo,
    clientTitle: "Kisded Szabi",
    clientText: "Owner @Cashbay Working Capital LLC",
    discription:
      "\"Throughout the entire process, they were able to grasp the precise nature of what I was looking for\". <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
  {
    id: 3,
    mediaItemUrl: clientThree,
    clientTitle: "Malte Dinkela",
    clientText: "Founder @Pistackio",
    discription:
      "\"Throughout the entire process, they were able to grasp the precise nature of what I was looking for\". <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
  {
    id: 4,
    mediaItemUrl: clientFour,
    clientTitle: "John Newcomb",
    clientText: "Founder @Pistackio",
    discription:
      "\"Throughout the entire process, they were able to grasp the precise nature of what I was looking for\". <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
  {
    id: 5,
    mediaItemUrl: clientFive,
    clientTitle: "John Newcomb",
    clientText: "Founder @Pistackio",
    discription:
      "\"Throughout the entire process, they were able to grasp the precise nature of what I was looking for\". <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
  {
    id: 6,
    mediaItemUrl: clientSix,
    clientTitle: "Malte Dinkela",
    clientText: "Founder @Pistackio",
    discription:
      "\"Throughout the entire process, they were able to grasp the precise nature of what I was looking for\". <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
];

const testimonials = (homeData) => {
  const homePageData = homeData?.homeData.page.homePageSections;
  const testimonialData =
    homeData?.homeData.generalSettings.acfGeneralSettings.ourClientsSection;
  return (
    <Layout data={homeData.footerData}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico"></link>
        <title>Testimonials</title>
        <meta
          name="description"
          content={homePageData.seoSection.metaDescription}
        ></meta>
      </Head>

      <div className="testimonial-section e-com dark-color triangle-bottom">
        {/* <div className="test-banner-img">
          <Image src={testimonialBanner.src} alt = "banner" />
        </div> */}
        <div className="container testimaonial-main test-content">
          <div className="sub-title-top text-top">
            Home / <span>Testimonial</span>
          </div>
          <h1>
            You are the Centre of Our Universe & Everything <br />{" "}
            <span>Revolves Around You</span>
          </h1>
          <div className="sub-title pb-38">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div className="fill">
            <Link href="/contact-us">Get In Touch</Link>
          </div>
        </div>
      </div>

      {/* <Review data={testimonialData} /> */}

      <div className="our-clients">
        <div className="container">
          <div className="our-clients-box d-flex flex-wrap">
            {testimonial.map((item) => {
              return (
                <div key={item.id} className="our-clients-wrap w50 testimonial-content">
                  <div className="inner">
                    <div className="clients-wrap d-flex flex-wrap">
                      <figure>
                        <Image
                          src={item.mediaItemUrl.src}
                          alt="testimonial_image"
                        />
                        <div className="custome-popup">
                          <a
                            href="https://youtu.be/XcOWiImKnsQ"
                            data-fancybox=""
                            data-caption="This image has a simple caption"
                          >
                            <div className="popup-btn"></div>
                          </a>
                        </div>
                      </figure>
                      <div className="clients-right">
                        <div className="clients-right-inner">
                          <h3>{item.clientTitle}</h3>
                          <div className="sub-title">{item.clientText}</div>
                          <div className="stars-div">
                            <div className="stars">
                              <span className="star on"></span>
                              <span className="star on"></span>
                              <span className="star on"></span>
                              <span className="star on"></span>
                              <span className="star half"></span>
                            </div>
                          </div>
                        </div>
                        <div className="custome-popup">
                          <a
                            href="https://youtu.be/XcOWiImKnsQ"
                            data-fancybox=""
                            data-caption="This image has a simple caption"
                          >
                            <div className="popup-btn"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="sub-title title-hover"
                      dangerouslySetInnerHTML={{
                        __html: item.discription,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <GetInTouchFooter data={homePageData.solutionSection} />
    </Layout>
  );
};

export default testimonials;

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
