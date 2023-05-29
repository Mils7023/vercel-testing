import { Image } from "react-bootstrap";
import DiscriptionBtn from "./discriptionBtn";

const LatestWork = (props) => {
  const { data, workData } = props;
  return (
    <div className="our-latest-work">
      <div className="container">
        <DiscriptionBtn
          title={data?.ourWorkTitle}
          subTitle={<>{data?.ourWorkDescription}</>}
        />
        <div className="our-latest-post">
          {workData?.edges.map((item) => {
            return (
              <div key={item.node.id} className="our-latest-wrap">
                <div className="inner d-flex flex-wrap align-items-center">
                  <div className="our-latest-left w50">
                    <figure>
                      <Image
                        src={item.node.featuredImage.node.mediaItemUrl}
                        alt="JB-Estates"
                        className="w-100"
                      />
                    </figure>
                  </div>
                  <div className="our-latest-right w50">
                    <figure>
                      <Image
                        src={
                          item.node.ourWorkAcf.ourWorkSection.ourWorkLogo
                            .mediaItemUrl
                        }
                        alt="JB-Estates-logo"
                      />
                    </figure>
                    <h3>{item.title}</h3>
                    <div className="description">
                      {item.node.ourWorkAcf.ourWorkSection.ourWorkDescription}
                    </div>
                    <div className="read-more">
                      <a href="#">View More Details</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
