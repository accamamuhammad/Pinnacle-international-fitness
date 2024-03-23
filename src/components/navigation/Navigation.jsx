import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import navCSS from "./Navigation.module.css";
import pinnacleLogo from "../../../public/icons/pinnacle-fitness-logo.png";

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <nav className={`${toggleNav ? navCSS.navFixed : navCSS.navNormal}`}>
      <AnchorLink href="#Home">
        <img src={pinnacleLogo} className={navCSS.logo} />
      </AnchorLink>
      <ul className={`${toggleNav ? navCSS.navOn : navCSS.navOff}`}>
        <li>
          <AnchorLink href="#Home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#AboutUs">About Us</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#Programs">Programs</AnchorLink>
        </li>
        <li>
          <a href="https://wa.me/+2347060555119" target="blank">
            Contact Us
          </a>
        </li>
      </ul>
      <img
        src={`${
          toggleNav
            ? "../../../public/icons/xmark-solid.svg"
            : "../../../public/icons/bars-solid.svg"
        }`}
        alt="menu-icon"
        className={navCSS.menuIcon}
        onClick={handleToggleNav}
      />
    </nav>
  );
};
export default Navigation;
