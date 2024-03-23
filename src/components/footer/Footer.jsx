import footetCSS from "./Footer.module.css";
import youtubeIcon from "../../../public/icons/youtube-icon.svg";
import facebookLogo from "../../../public/icons/facebook-icon.svg";
import instaLogo from "../../../public/icons/instagram.svg";
import emailIcon from "../../../public/icons/email-icon.png";

const Footer = () => {
  return (
    <div className={footetCSS.FooterWrapper}>
      <div>
        <div>
          <h3>Comany</h3>
          <ul>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>Email Us</li>
            <li>Message Us</li>
          </ul>
        </div>
      </div>
      <div className={footetCSS.FooterAddress}>
        <p>2402 shehu shagari way,</p>
        <p>Maitama,</p>
        <p>Abuja FCT,</p>
        <p>Nigeria.</p>
        <div className={footetCSS.Links}>
          <a href="https://vimeo.com/user42536369" target="blank">
            <img
              src={youtubeIcon}
              alt="youtube"
              className={footetCSS.YoutubeIcon}
            />
          </a>
          <a
            href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FPinnacle-International-Fitness-1590696251238206%2F%3Fref%3Dbookmarks"
            target="blank"
          >
            <img src={facebookLogo} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/pinnacle_international_fitness/"
            target="blank"
          >
            <img src={instaLogo} alt="instagram" />
          </a>
          <a href="mailto:pinnacleinternationalfitness@gmail.com">
            <img src={emailIcon} alt="Email" className={footetCSS.emailIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
