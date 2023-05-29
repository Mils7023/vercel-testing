import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const BusinessNeeds = (props) => {
  const { data } = props;
  return (
    <div className="business-main triangle-bottom bg-purple-light pb-50">
      <div className="container">
        <div className="main-title pb-50 pt-50">
          <h2>{data.businessNeedsTitle}</h2>
          <div
            className="sub-title"
            dangerouslySetInnerHTML={{
              __html: data.businessNeedsDescription,
            }}
          ></div>
        </div>
        <div className="feature-wrapper">
          {data.businessNeedsRepeater.map((item) => {
            return (
              <div
                key={item.id}
                className="business-features d-flex flex-wrap align-items-center"
              >
                <Image src={item.addImage.mediaItemUrl} alt="text" />
                <span>{item.id}</span>
                <h4>{item.addTitle}</h4>
              </div>
            );
          })}
          {/* <div className="business-features d-flex flex-wrap align-items-center">
            <img src={blueIcon} alt="text" />
            <span>1</span>
            <h4>Shopify B2B Marketplace</h4>
          </div>
          <div className="business-features d-flex flex-wrap align-items-center">
            <img src={purpleIcon} alt="text" />
            <span>2</span>
            <h4>Shopify B2C Implementation</h4>
          </div>
          <div className="business-features d-flex flex-wrap align-items-center">
            <img src={greenIcon} alt="text" />
            <span>3</span>
            <h4>Shopify C2B Marketplace</h4>
          </div>
          <div className="business-features d-flex flex-wrap align-items-center">
            <img src={orangeIcon} alt="text" />
            <span>4</span>
            <h4>Shopify C2C Marketplace</h4>
          </div>
          <div className="business-features d-flex flex-wrap align-items-center">
            <img src={skyBlueIcon} alt="text" />
            <span>5</span>
            <h4>Shopify B2A Implementation</h4>
          </div>
          <div className="business-features d-flex flex-wrap align-items-center">
            <img src={yellowIcon} alt="text" />
            <span>6</span>
            <h4>Shopify C2A Marketplace</h4>
          </div>

          <div className="business-features d-flex flex-wrap align-items-center">
            <img src={pinkIcon} alt="text" />
            <span>7</span>
            <h4>Shopify Multi-Vendor Marketplace</h4>
          </div>
          <div className="business-features d-flex flex-wrap align-items-center">
            <img src={lightGreenIcon} alt="text" />
            <span>8</span>
            <h4>Shopify Multichannel Marketplace</h4>
          </div>
          <div className="business-features d-flex flex-wrap align-items-center">
            <img src={lightBlueIcon} alt="text" />
            <span>9</span>
            <h4>Shopify Speed Optimization</h4>
          </div>
          <div className="business-features bus-span d-flex flex-wrap align-items-center">
            <img src={blueIcon} alt="text" />
            <span>10</span>
            <h4>Shopify Automation Marketplace</h4>
          </div>
          <div className="business-features bus-span d-flex flex-wrap align-items-center">
            <img src={purpleIcon} alt="text" />
            <span>11</span>
            <h4>Shopify POS Development</h4>
          </div>
          <div className="business-features bus-span d-flex flex-wrap align-items-center">
            <img src={greenIcon} alt="text" />
            <span>12</span>
            <h4>Shopify Order Management</h4>
          </div>

          <div className="business-features bus-span d-flex flex-wrap align-items-center">
            <img src={orangeIcon} alt="text" />
            <span>13</span>
            <h4>Marketing IoT Solutions</h4>
          </div>
          <div className="business-features bus-span d-flex flex-wrap align-items-center">
            <img src={skyBlueIcon} alt="text" />
            <span>14</span>
            <h4>Shopify AR Implementation</h4>
          </div>
          <div className="business-features bus-span d-flex flex-wrap align-items-center">
            <img src={yellowIcon} alt="text" />
            <span>15</span>
            <h4>eStore Auditing & Consultation</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BusinessNeeds;
