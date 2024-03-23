import TestimoniesCSS from "../testimonies/Testimonies.module.css";
import PropTypes from "prop-types";
import stars from "../../../../public/icons/star-solid.svg";

const Testimonies = ({ content, name, profeesion }) => {
  return (
    <div className={TestimoniesCSS.mainTestimony}>
      <div className={TestimoniesCSS.stars}>
        <img src={stars} alt="stars" />
        <img src={stars} alt="stars" />
        <img src={stars} alt="stars" />
        <img src={stars} alt="stars" />
        <img src={stars} alt="stars" />
      </div>
      <p>{content}</p>
      <div className={TestimoniesCSS.personBox}>
        <div>
          <h4>{name}</h4>
          <p>{profeesion}</p>
        </div>
      </div>
    </div>
  );
};

Testimonies.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profeesion: PropTypes.string.isRequired,
};

export default Testimonies;
