import React from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";

const GetInTouchFooter = (props) => {
  const { data } = props;

  return (
    <>
      <div className="color-bg-half">
        <div className="container">
          <div className="solutions-sec">
            <div className="our-solutions-footer get-in-touch-wrap d-flex flex-wrap justify-space-between align-items-center">
              <div className="title white-text w-60">
                <h2 className="white-text">{data?.solutionTiitle}</h2>
                <div className="sub-title colored-text">
                  {data?.solutionDescription}
                </div>
              </div>
              <button className="fill">
                <Link href="/contact-us">{data?.solutionLink.title}</Link>
              </button>
              <div className="">
                <figure>
                  <Image
                    src={data?.solutionImage.mediaItemUrl}
                    alt="ecommerce"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouchFooter;
