
import Link from "next/link";
import { Image } from "react-bootstrap";

const ServiceBanner = (props) => {
  return (
    <div className="banner-section">
      <div className="container">
        <div className="banner-wrap d-flex flex-wrap align-items-center">
          <div className="banner-left w50">
            <div className="sub-title-top">
              Home / <span>ecommerce development</span>
            </div>
            <h1
              dangerouslySetInnerHTML={{
                __html: props.bannerTitle,
              }}
            ></h1>
            <div className="sub-title pb-38">{props.discription}</div>
            <div className="fill">
              <Link href="/contact-us">Get In Touch</Link>
            </div>
          </div>
          <div className="banner-right w50 text-align-right">
            <Image src={props.bannerImg} alt="hero-banner" className="w-100" />
          </div>
        </div>

        <hr />
        <div className="banner-sec-logos d-flex flex-wrap justify-space-between">
          {props.logoImg.map((item) => {
            return (
              <div key={item.bannerLogos.mediaItemUrl} className="logo-image">
                <figure>
                  <Image src={item.bannerLogos.mediaItemUrl} alt="GoDaddy" />
                </figure>
              </div>
            );
          })}
          {/* <div className="logo-image">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
