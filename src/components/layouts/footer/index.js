// import Image from "next/image";
import Link from "next/link";
import { Container, Image } from "react-bootstrap";

const Footer = (data) => {
  return (
    <footer>
      <Container>
        <div className="footer-detail-inner">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="left-sec">
              <div className="footer-logo-wrap">
                <div className="footer-logo">
                  <Image
                    src={data?.footerData.webSettings?.siteLogo?.mediaItemUrl}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="footer-contact">
                <p>{data?.footerData.footerSection.companyDescription}</p>
              </div>
              <div className="social-icon d-flex flex-wrap">
                {data?.footerData.footerSection.socialIcons.map((item) => {
                  return (
                    <Link
                      key={item?.iconLink}
                      target="_blank"
                      href={item.iconLink}
                    >
                      <Image
                        src={item.iconImage?.mediaItemUrl}
                        alt="SocialIcons"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="right-sec">
              <div className="sec-inner">
                <div className="our-expertise">
                  <h3>Our Expertise</h3>
                  <ul>
                    {data?.footerData.footerSection.ourExpertise.map((item) => {
                      return (
                        
                        <li key={item.title}>
                          <Link href={item.url}>{item.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="resources">
              <div className="sec-inner">
                <h3>Countries We Serve</h3>
                <ul className="">
                  {data?.footerData.footerSection.countriesWeServe.map(
                    (item) => {
                      return (
                        <li
                          key={item.countryName}
                          className="d-flex flex-wrap justify-content-start align-items-center"
                        >
                          <Image
                            className="me-2 country-icon"
                            src={item.countryIcon.mediaItemUrl}
                            alt="CountryIcons"
                          />
                          <p className="mb-0">{item.countryName}</p>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
            <div className="footer-contact-detail">
              <div className="sec-inner">
                <h3>Contact Us</h3>
                <div className="footer-contact">
                  <ul className="">
                    <li className="number">
                      <a
                        href={
                          "tel:" +
                          data?.footerData?.footerSection.contactUs.companyPhone
                        }
                      >
                        {data?.footerData?.footerSection.contactUs.companyPhone}
                      </a>
                    </li>
                    <li className="email">
                      <a
                        href={
                          data?.footerData?.footerSection.contactUs.companyEmail
                        }
                      >
                        {data?.footerData?.footerSection.contactUs.companyEmail}
                      </a>
                    </li>
                    <li className="address">
                      {data?.footerData.footerSection.contactUs.companyAddress}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="copyright-sec">
        <div className="container">
          <div className="copyright-social d-flex flex-wrap justify-content-center align-items-center">
            <ul className="d-flex flex-wrap">
              <li>
                {data?.footerData.footerSection.bottomSection.copyrightText}
              </li>
              <li>
                {data?.footerData.footerSection.bottomSection.reservedText}
              </li>
              {data?.footerData.footerSection.bottomSection.links.map(
                (item) => {
                  return (
                    <li key={item.title}>
                      <a href={item.url}>{item.title}</a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
