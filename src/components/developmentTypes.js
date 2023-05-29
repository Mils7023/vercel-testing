import { Card, Image } from "react-bootstrap";

const DevelopmentTypes = (data) => {
  return (
    <div className="develop-types triangle-top-bottom light-bg-color">
      <div className="container">
        <div className="main-title pb-50">
          <h2 className="">{data.data.ecommerceTypesTitle}</h2>
          <div
            className="sub-title"
            dangerouslySetInnerHTML={{
              __html: data.data.ecommerceTypesDescription,
            }}
          >
          </div>
        </div>
        <div className="dev-box-main d-flex flex-wrap">
          {data.data.ecommerceTypesRepeater.map((item) => {
            return (
              <div key={item.typesContentClass} className="div-wrap">
                <Card className={`border-${item.typesContentClass}`}>
                  <Card.Body>
                    <Card.Title>
                      <h4 className={`hoverd-${item.typesContentClass}`}>
                        {item.typesContentTitle}
                      </h4>
                    </Card.Title>
                    <Card.Text>{item.typesContentDescription}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentTypes;
