import { Image } from "react-bootstrap";

const ThemesAndPlugins = (props) => {
    const { data } = props
  return (
    <div className="themes-main bg-purple-light triangle-bottom">
    <div className="container">
      <div className="half-grid d-flex flex-wrap align-items-center">
        <div className="theme-left w-40">
          <h2>
            {data.themesAndPluginsTitle}
          </h2>
          <div className="sub-title">
            <p dangerouslySetInnerHTML={{
                  __html: data.themesAndPluginsDescripiton
                }}>
            </p>
          </div>
        </div>
        <div className="theme-right text-align-right w-60">
          <Image src={data.themesAndPluginsImage.mediaItemUrl} alt="themes and plugins" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ThemesAndPlugins;
