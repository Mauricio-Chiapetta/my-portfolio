import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "@/app/styles/Skills.module.css";

const Skills = () => {
  return (
    <div id="Skills" className={styles["skills-container"]}>
      <h2>Skills:</h2>
      <div className={styles["grid-skills"]}>
        <div
          className={`${styles["skill-card"]} ${styles["html"]}`}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <i>
            <FontAwesomeIcon icon={faHtml5} className={styles["html-icon"]} />
          </i>
          <p>HTML</p>
        </div>
        <div
          className={`${styles["skill-card"]} ${styles["css"]}`}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <i>
            <FontAwesomeIcon icon={faCss3Alt} className={styles["css-icon"]} />
          </i>
          <p>CSS</p>
        </div>
        <div
          className={`${styles["skill-card"]} ${styles["js"]}`}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <i>
            <FontAwesomeIcon icon={faJsSquare} className={styles["js-icon"]} />
          </i>
          <p>JavaScript</p>
        </div>
        <div
          className={`${styles["skill-card"]} ${styles["react"]}`}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <i>
            <FontAwesomeIcon icon={faReact} className={styles["react-icon"]} />
          </i>
          <p>React</p>
        </div>
        {/* <div className="skill-card node">
          <i>
            <FontAwesomeIcon icon={faNodeJs} className="node-icon" />
          </i>
          <p>Node</p>
        </div> */}

        {/* gambiarra/ não tem ícone do nextjs no fontawesome*/}
        <div className={`${styles["skill-card"]} ${styles["next"]}`} data-aos="fade-up"
     data-aos-duration="3000">
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
