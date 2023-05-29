import React from "react";
import { Container, Image } from "react-bootstrap";
import DiscriptionBtn from "./discriptionBtn";
import Link from "next/link";
// import Image from "next/image";

const Review = (props) => {
  const { data } = props;
  return (
    <div className="our-clients">
      <Container>
        {/* <DiscriptionBtn
          title={data?.ourClientsTitle}
          subTitle={<>{data?.ourClientsDescription}</>}
        /> */}
        <div className="main-title d-flex flex-wrap align-items-center justify-space-between pb-38">
          <div className="title-left w-80">
            <h2>{data?.ourClientsTitle}</h2>
            <div className="sub-title">{data?.ourClientsDescription}</div>
          </div>
          <div className="title-right">
            <div className="fill">
              <Link href="/testimonials">View All</Link>
            </div>
          </div>
        </div>

        <div className="our-clients-box d-flex flex-wrap">
          {data?.ourClientsContentRepeater.map((item) => {
            return (
              <div
                key={item.ourClientsImage.mediaItemUrl}
                className="our-clients-wrap w50"
              >
                <div className="inner">
                  <div className="clients-wrap d-flex flex-wrap">
                    <figure>
                      <Image
                        src={item.ourClientsImage.mediaItemUrl}
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
                        <h3>{item.ourClientsContentTitle}</h3>
                        <div className="sub-title">
                          {item.ourClientsContentText}
                        </div>
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
                  <div className="sub-title title-hover">
                    {item.ourClientsContentDescription}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Review;
