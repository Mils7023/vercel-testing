const OurServices = (props) => {
  const { data } = props;
  return (
    <div className="our-services e-com dark-color triangle-bottom">
      <div className="container">
        <div className="main-title pb-50">
          <h2 className="white-text">{data.ourWorkTitle}</h2>
          <div
            className="sub-title white-text"
            dangerouslySetInnerHTML={{
              __html: data.ourWorkDescription,
            }}
          ></div>
        </div>
        <div className="our-services-main d-flex flex-wrap">
          {data.ourWorkRepeater.map((item) => {
            return (
              <div key={item.contentNumber} className="services-box">
                <div className={`inner ${item.bgClass}`}>
                  <h2 className={`white-text ${item.textClass}`}>
                    {item.contentNumber}
                  </h2>
                  <h3
                    className="white-text"
                    dangerouslySetInnerHTML={{
                      __html: item.contentTitle,
                    }}
                  ></h3>
                  <div className="description white-text">
                    {item.contentDescription}
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

export default OurServices;
