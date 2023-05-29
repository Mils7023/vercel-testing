import { Image } from "react-bootstrap";
import rightArrowIcon from "../../public/images/e-Commerce/right-arrow.svg";

const DevelopmentProcess = (props) => {
  const { data } = props;
  return (
    <div className="ecommerce-process">
      <div className="container">
        <div className="main-title pb-50">
          <h2 className="">{data.developmentProcessTitle}</h2>
          <div
            className="sub-title"
            dangerouslySetInnerHTML={{
              __html: data.developmentProcessDescription,
            }}
          ></div>
        </div>
        <div className="process-main d-flex flex-wrap">
          <div className="process-left w-50">
            {data.developmentProcessRepeater.map((item) => {
              return (
                <div
                  key={item.addClassname}
                  className="Process-content d-flex flex-wrap"
                >
                  <div className="process-icons">
                    <figure className={item.addClassname}>
                      <Image
                        src={item.addProcessIcon.mediaItemUrl}
                        alt="right-arrow"
                      />
                    </figure>
                  </div>
                  <div className="Process-title">
                    <h3>{item.addProcessTitle}</h3>
                    <div className="descriptiond">
                      {item.addProcessDescription}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Process-right w-50">
            <div className="Process-right-image text-align-right">
              <Image
                src={data.developmentProcessImage.mediaItemUrl}
                alt="process"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
