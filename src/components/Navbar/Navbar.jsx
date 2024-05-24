import React, { useState, useContext } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";
import { LanguageContext } from '../../LanguageContext';

const NavBar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/logo.svg" alt="" />

          <ul>
            <li>
              <Link activeClass="active" to="hero" smooth spy offset={-80} className="menu-item">
                {language === 'en' ? 'Home' : 'Главная'}
              </Link>
            </li>

            <li>
              <Link activeClass="active" to="skills" smooth spy offset={-120} className="menu-item">
                {language === 'en' ? 'Skills' : 'Навыки'}
              </Link>
            </li>

            <li>
              <Link activeClass="active" to="work-exp" smooth spy offset={-100} className="menu-item">
                {language === 'en' ? 'Work Experience' : 'Опыт работы'}
              </Link>
            </li>

            <li>
              <Link activeClass="active" to="contact" smooth spy offset={-100} className="menu-item">
                {language === 'en' ? 'Contact Me' : 'Свяжитесь со мной'}
              </Link>
            </li>

            <li>
              <button className="language-btn" onClick={toggleLanguage}>
                {language === 'en' ? 'Русский' : 'English'}
              </button>
            </li>

            <a className="contact-btn" href="https://www.linkedin.com/in/nuray-aman/">
              {language === 'en' ? 'Hire Me' : 'Нанять меня'}
            </a>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
