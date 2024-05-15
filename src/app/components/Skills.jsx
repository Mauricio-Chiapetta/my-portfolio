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
    <div id="Skills" className="skills-container">
      <h2>Skills:</h2>
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

        {/* gambiarra/ não tem ícone do nextjs no fontawesome*/}
        <div className="skill-card next">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 -4 40 48"
              // arrumar ou centralizar o icon 
            >
              <path d="M20,23.474V31.5c0,0.828-0.672,1.5-1.5,1.5S17,32.328,17,31.5v-13c0-0.659,0.431-1.241,1.062-1.435 c0.627-0.19,1.314,0.049,1.682,0.596l0.249,0.37L20,18l15.234,22.546C40.524,36.947,44,30.88,44,24c0-11.046-8.954-20-20-20 S4,12.954,4,24s8.954,20,20,20c3.082,0,5.99-0.718,8.597-1.963L20,23.474z M28,16.5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 v12.79l-3-4.304V16.5z"></path>
            </svg>
          </i>

          <p>NextJs</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
