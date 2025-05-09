"use client";
import { projectData } from "./data.js";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { faCircleArrowRight, faLink } from "@fortawesome/free-solid-svg-icons"; // pacote novo de icones adicionado
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "@/app/styles/Projects.module.css";
import Link from "next/link.js";

// adicionei uma lib de animação porque percebi que as animações no css não tava funcionando no iphone , já com a lib funciona perfeitamente

const Projects = () => {
  useEffect(() => {
    Aos.init(); // Inicializando o AOS com duração de 2 segundos para as animações
  }, []);

  return (
    <div id="Projects" className={styles["projects-container"]}>
      <h2>Projects:</h2>
      <div className={styles["projects-grid"]}>
        {projectData.map((project) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className={styles["project-card"]}
            key={project.id}
          >
            <div className={styles["project-header"]}>
              <div className={styles["small-icons"]}>
                <Link href={project.gitHubLink} target="blank">
                  {" "}
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                {project.liveDemo && (
                  <Link href={project.liveDemo} target="blank">
                    <FontAwesomeIcon icon={faLink} />
                  </Link>
                )}
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* arrumar imagens */}
            <Image
              src={project.imagem}
              className={styles["project-image"]}
              width={500}
              height={300}
            />
          </div>
        ))}
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link
            href={"https://github.com/Mauricio-Chiapetta?tab=repositories"}
            target="blank"
            className={styles["cta-btns"]}
          >
            <h3>
              Ver mais <FontAwesomeIcon icon={faCircleArrowRight} />
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
