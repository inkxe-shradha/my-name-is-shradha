import React from "react";
import Image from "next/image";
import Link from "react-scroll/modules/components/Link";
const Header = ({ handleDarkMode }) => {
  const [currentMode, setCurrentMode] = React.useState("light");
  const [isMobHeader, setMobHeader] = React.useState(false);
  const [currentMenu, setCurrentMenu] = React.useState("home");
  const darkModeSwitch = (theme) => {
    document.body.dataset.theme = theme;
  };
  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setCurrentMode(theme);
      darkModeSwitch(theme);
      handleDarkMode(theme);
    }
  }, []);
  const handelDarkMode = () => {
    setCurrentMode(currentMode === "light" ? "dark-theme" : "light");
    localStorage.setItem(
      "theme",
      currentMode === "light" ? "dark-theme" : "light"
    );
    darkModeSwitch(currentMode === "light" ? "dark-theme" : "light");
    handleDarkMode(currentMode === "light" ? "dark-theme" : "light");
  };

  const handleSetActive = (to) => {
    setCurrentMenu(to);
  };

  return (
    <div className="page__header header">
      <div className="header__container container">
        <div className="header__body">
          <div className="header__leftside">
            <a href="#" title="My Name" className="header__logo">
              <Image
                src="/SSP-full.png"
                layout="fixed"
                alt="My Name"
                width={150}
                height={50}
              />
            </a>
          </div>
          <div className="header__rightside">
            <div
              className={`header__menu header-menu ${
                isMobHeader && "is_active"
              }`}
            >
              <ul className="header-menu__list">
                <li className="header-menu__item">
                  {/* <a href="#" className="header-menu__link">
                    Home
                  </a> */}
                  <Link
                    className="header-menu__link cursor-pointer"
                    to="home"
                    activeClass={currentMenu === "home" ? "active" : ""}
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Home
                  </Link>
                </li>
                <li className="header-menu__item">
                  <Link
                    className="header-menu__link cursor-pointer"
                    to="about"
                    activeClass={currentMenu === "about" ? "active" : ""}
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    About
                  </Link>
                </li>
                <li className="header-menu__item">
                  <Link
                    className="header-menu__link cursor-pointer"
                    to="skills"
                    activeClass={currentMenu === "skills" ? "active" : ""}
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Skills
                  </Link>
                </li>
                <li className="header-menu__item">
                  <Link
                    className="header-menu__link cursor-pointer"
                    to="projects"
                    activeClass={currentMenu === "projects" ? "active" : ""}
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="header__changer cursor-pointer"
              onClick={() => handelDarkMode()}
            >
              <div
                className={`${
                  currentMode === "dark-theme" && "d-none"
                } header__moon`}
              >
                <i className="bx bx-moon"></i>
              </div>
              <div
                className={`${currentMode === "light" && "d-none"} header__sun`}
              >
                <i className="bx bx-sun"></i>
              </div>
            </div>
            <div className="header__mobile">
              <div
                className="header-mob__menu"
                onClick={() => setMobHeader(!isMobHeader)}
              >
                <i className="bx bx-menu"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
