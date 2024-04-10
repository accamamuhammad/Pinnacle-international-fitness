import attributionCSS from "./Attribution.module.css";
import youtubeIcon from "../../../public/icons/youtube-icon.svg";
import facebookLogo from "../../../public/icons/facebook-icon.svg";
import instaLogo from "../../../public/icons/instagram.svg";
import emailIcon from "../../../public/icons/email-icon.png";

const Attribution = () => {
  return (
    <div className={attributionCSS.AttributionWrapper}>
      <div className={attributionCSS.FooterLinks}>
        <a href="https://vimeo.com/user42536369" target="blank">
          <img
            src={youtubeIcon}
            alt="youtube"
            className={attributionCSS.YoutubeIcon}
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
          <img
            src={emailIcon}
            alt="Email"
            className={attributionCSS.emailIcon}
          />
        </a>
      </div>
      <h1>
        <a href="#">Built by Accama</a>
      </h1>
      <p>©2024 Accama Muhammad. All rights reserved</p>
    </div>
  );
};
export default Attribution;
