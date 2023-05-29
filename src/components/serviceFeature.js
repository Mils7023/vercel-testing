import { Image } from "react-bootstrap";

const ServiceFeature = (props) => {
  return (
    <div className="best-e-commerce">
      <div className="container">
        <div className="half-grid d-flex flex-wrap align-items-center">
          <div className="half-grid-left w50">
            <Image src={props.serviceImg} />
          </div>
          <div className="half-grid-right w50">
            <h2 className="" dangerouslySetInnerHTML={{__html: props.title}}></h2>
            <div className="sub-title ">
              <p dangerouslySetInnerHTML={{__html: props.discription,}}></p>
              {/* <p>{props.subTitleTwo}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeature;
