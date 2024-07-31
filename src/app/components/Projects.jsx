"use client"
import { projectData } from "./data.js";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import{useEffect} from "react"
import { faLink } from "@fortawesome/free-solid-svg-icons"; // pacote novo de icones adicionado
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {

  useEffect(() => {
    Aos.init(); // Inicializando o AOS com duração de 2 segundos para as animações
  }, []);

  return (
    <div id="Projects" className="projects-container">
      <h2>Projects:</h2>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div data-aos="flip-left"  data-aos-duration="1000"className="project-card" key={project.id}>
              <div className="project-header">
                <div className="small-icons">
                  <a href={project.gitHubLink} target="blank">
                    {" "}
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href={project.liveDemo} target="blank">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* arrumar imagens */}
              <Image
                src={project.imagem}
                className="project-image"
                width={500}
                height={300}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
