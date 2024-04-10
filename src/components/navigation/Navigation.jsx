import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import navCSS from "./Navigation.module.css";
import xMark from "../../../public/icons/xmark-solid.svg";
import bars from "../../../public/icons/bars-solid.svg";
import pinnacleLogo from "../../../public/icons/pinnacle-fitness-logo.png";

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <nav className={`${toggleNav ? navCSS.navFixed : navCSS.navNormal}`}>
      <AnchorLink href="#Home">
        <img
          src={pinnacleLogo}
          width={40}
          height={75}
          className={navCSS.logo}
        />
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
        src={`${toggleNav ? xMark : bars}`}
        alt="menu-icon"
        className={navCSS.menuIcon}
        onClick={handleToggleNav}
      />
    </nav>
  );
};
export default Navigation;
