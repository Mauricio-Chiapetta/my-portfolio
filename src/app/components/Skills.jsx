import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card html">
          <i>
            <FontAwesomeIcon icon={faHtml5} className="html-icon" />
          </i>
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <i>
            <FontAwesomeIcon icon={faCss3Alt} className="css-icon" />
          </i>
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <i>
            {" "}
            <FontAwesomeIcon icon={faJsSquare} className="js-icon" />
          </i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card react">
          <i>
            <FontAwesomeIcon icon={faReact} className="react-icon" />
          </i>
          <p>React</p>
        </div>
        <div className="skill-card node">
          <i>
            <FontAwesomeIcon icon={faNodeJs} className="node-icon" />
          </i>
          <p>Node</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
