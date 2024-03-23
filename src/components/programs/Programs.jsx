import programsCSS from "./Programs.module.css";
import Program from "./program/Program";
import dumbellIcon from "../../../public/icons/dumbbell-solid.svg";
import tapeIcon from "../../../public/icons/tape-solid.svg";
import weightScaleIcon from "../../../public/icons/weight-scale-solid.svg";
import foodIcon from "../../../public/icons/bowl-food-solid.svg";
import weightHangingIcon from "../../../public/icons/weight-hanging-solid.svg";
import personRunning from "../../../public/icons/person-running-solid.svg";

const Programs = () => {
  return (
    <div className={programsCSS.ProgramsWrapper} id="Programs">
      <p>Effective Fitness Program</p>
      <h1>Our Programs</h1>
      <div className={programsCSS.programBox}>
        <Program
          icon={dumbellIcon}
          title="Boxing"
          content="Our boxing classes focuses on the fundamentals of boxing. Proper footwork, snap, slipping techniques."
        />
        <Program
          icon={tapeIcon}
          title="Body Sculpting"
          content="The body sculpting programs at Pinnacle International Fitness incorporates various forms of fitness"
        />
        <Program
          icon={weightScaleIcon}
          title="Weight Loss"
          content="We help our clients reach their desired weight loss goals through contemporary methods."
        />
        <Program
          icon={foodIcon}
          title="Dieting"
          content="Dietary supplement that are intended to provide nutrients that may otherwise not be consumed in sufficient quantities."
        />
        <Program
          icon={weightHangingIcon}
          title="Weight Training"
          content="The equipment and weight training programs at Pinnacle International Fitness will drastically transform your body."
        />
        <Program
          icon={personRunning}
          title="Performance Training"
          content="Athletic Performance Training at Pinnacle International Fitness focuses on functional, Sports-specific training."
        />
      </div>
    </div>
  );
};

export default Programs;
