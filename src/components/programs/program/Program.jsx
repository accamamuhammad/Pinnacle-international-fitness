import PropTypes from "prop-types";
import programCSS from "./Program.module.css";

const Program = ({ icon, title, content }) => {
  return (
    <div className={programCSS.programsBoxes}>
      <div>
        <img src={icon} alt="dumbell" />
        <h2>{title}</h2>
        <p>{content}</p>
        <a href="#">Join now</a>
      </div>
    </div>
  );
};

Program.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Program;
