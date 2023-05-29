import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useRouter } from "next/router";
import "font-awesome/css/font-awesome.min.css";

const Dropdown = (props) => {
  const { subMenu, isOpen } = props;
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        // className={dropdown ? "service-submenu clicked" : "service-submenu"}
        className={
          isOpen ? "service-submenu clicked" : "service-submenu not-clicked"
        }
        onClick={() => setDropdown(!dropdown)}
      >
        {subMenu &&
          subMenu.map((item) => {
            return (
              <li key={item.url} className="">
                <Link
                  href={item.url}
                  className="submenu-item"
                  onClick={() => setDropdown(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

// $(document).ready(function(){
//   $("button").click(function(){
//     $("p").slideToggle();
//   });
// });

const Nav = (data) => {
  const menuItems = data.data.headerData.menu.menuItems.nodes;
  const wpLogo =
    data.data.headerData.generalSettings.acfGeneralSettings.webSettings.siteLogo
      .mediaItemUrl;

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [top, setTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [transition, setTransition] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: typeof window !== "undefined" && window.innerWidth,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);
    

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const router = useRouter();
  let currentLocation = router.pathname;

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const backBtn = async (e) => {
    if (data && data) {
      e.preventDefault();
      await router.back();
    }
  };

  const style = {
    overflow: "hidden",
    height: transition ? 200 : 36,
    transition: "1s",
  };

  const newstyle = {
    height: -1,
  };

  return (
    <>
      {currentLocation === "/contact-us" ? (
        <div className={`main-header  ${!top ? "header-shadow" : ""}`}>
          <Container>
            <div className="header-section d-flex flex-wrap justify-space-between align-items-center">
              <div className="header-logo">
                <Link href="/" className="nav-logo">
                  <Image src={wpLogo} alt="logo" />
                </Link>
              </div>
              <div className="header-menu d-flex flex-wrap align-items-center">
                <div className="navbar">
                  <ul>
                    <li className=" fill">
                      <Link href={".."} onClick={(e) => backBtn(e)}>
                        Go Back
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <div className={`main-header ${!top ? "header-shadow" : ""}`}>
          <Container>
            <div
              className={click ? "main-container" : ""}
              onClick={() => Close()}
            />
            <nav
              className="header-section"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="nav-container">
                <div className="header-logo">
                  <Link href="/" className="nav-logo">
                    <Image src={wpLogo} alt="logo" />
                  </Link>
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  {menuItems.map((item) => {
                    if (item.label === "Services") {
                      return (
                        // <li key={item.label} className="nav-item parent">
                        //   <Link href={item.url} className="nav-links">
                        //     {item.label}
                        //   </Link>
                        //   {dropdown && <Dropdown />}
                        //   <Dropdown subMenu={item.childItems.nodes} />
                        // </li>
                        <>
                          {/* {screenSize.width < 767 ? ( */}
                          {click && screenSize.width < 767 ? (
                            <li
                              key={item.label}
                              className="nav-item parent"
                              style={style}
                              onClick={() => {
                                setIsOpen(!isOpen);
                                setTransition((prev) => !prev);
                              }}
                            >
                              <Link href={item.url} className="nav-links">
                                {item.label}
                                {isOpen ? (
                                  <i
                                    className="fa fa-chevron-up"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <i
                                    className="fa fa-chevron-down"
                                    aria-hidden="true"
                                  />
                                )}
                              </Link>

                              {dropdown && <Dropdown />}
                              <Dropdown
                                subMenu={item.childItems.nodes}
                                isOpen={isOpen}
                                // style={newstyle}
                              />
                            </li>
                          ) : (
                            <li key={item.label} className="nav-item parent">
                              <Link href={item.url} className="nav-links">
                                {item.label}
                              </Link>
                              {dropdown && <Dropdown />}
                              <Dropdown subMenu={item.childItems.nodes} />
                            </li>
                          )}
                        </>
                      );
                    }
                    return (
                      <li
                        key={item.label}
                        className={`nav-item custom-item ${item.cssClasses[0]}`}
                      >
                        <Link href={item.url} className="nav-links">
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="nav-icon" onClick={handleClick}>
                  <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </>
  );
};

export default Nav;
