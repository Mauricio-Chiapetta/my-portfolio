import {
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faReact,
    faNodeJs,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
  const Skills = () => {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
          <div className="skill-card html">
            <FontAwesomeIcon icon={faHtml5}  className="html-icon" />
            <p>HTML</p>
          </div>
          <div className="skill-card css">
            <FontAwesomeIcon icon={faCss3Alt} className="css-icon" />
            <p>CSS</p>
          </div>
          <div className="skill-card js">
            <FontAwesomeIcon icon={faJsSquare} className="js-icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
            <FontAwesomeIcon icon={faReact} className="react-icon" />
            <p>React</p>
          </div>
          <div className="skill-card node">
            <FontAwesomeIcon icon={faNodeJs} className="node-icon" />
            <p>Node</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
  