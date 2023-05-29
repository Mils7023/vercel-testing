import { Card, Row, Col } from "react-bootstrap";
import starImg from "../../public/images/Home-resources/star.svg";

const WhyServices = (props) => {
  const { data } = props;
  return (
    <>
      <div className="why-woocom triangle-top light-bg-color">
        <div className="container">
          <div className="main-title pb-50">
            <h2>{data.whyContentTitle}</h2>
            <div
              className="sub-title"
              dangerouslySetInnerHTML={{
                __html: data.whyContentDescription,
              }}
            ></div>
          </div>
          <Row className="woocom-row">
            {data.whyContentRepeater.map((item) => {
              return (
                <Col key={item.addClassname} className="col-top" sm={12} lg={6}>
                  <div className="why-sub">
                    <Card className={`card-border ${item.addClassname}-border`}>
                      <Card.Img
                        className={`bg-${item.addClassname}`}
                        variant="top"
                        src={item.addImage.mediaItemUrl}
                        // style={{ width: "50px", height: "50px" }}
                      />
                      <Card.Body>
                        <Card.Title>
                          <h4>{item.addTitle}</h4>
                        </Card.Title>
                        <Card.Text className="sub-title">
                          {item.addDescription}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default WhyServices;
