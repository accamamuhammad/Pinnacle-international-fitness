import aboutCSS from "./About.module.css";

const About = () => {
  return (
    <div className={aboutCSS.AboutWrapper} id="AboutUs">
      <h1>why us?</h1>
      <p>
        Pinnacle International Fitness offers innovative routines to help
        members achieve their fitness goals, incorporating proven concepts and
        maintaining a clean and comfortable environment.
      </p>
      <div className={aboutCSS.aboutBoxes}>
        <div>
          <h1>300+</h1>
          <p>Active Members</p>
        </div>
        <div>
          <h1>100+</h1>
          <p>Latest Equipment</p>
        </div>
        <div>
          <h1>24/7</h1>
          <p>Working Hours</p>
        </div>
        <div>
          <h1>30+</h1>
          <p>Exercise Programs</p>
        </div>
      </div>
    </div>
  );
};
export default About;
