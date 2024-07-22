import { projectData } from './data.js';
import {
    faGithub,
    faThreads
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Projects = () => {
    return (
        <div id ="Projects" className="projects-container">
            <h2>Projects:</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">

                            <div className="small-icons">
                                <a href={project.gitHubLink} target='blank'> <FontAwesomeIcon icon={faGithub} /></a>
                                <a href={project.liveDemo} target='blank'><FontAwesomeIcon icon={faThreads}/></a>
                                {/* icone ta errado */}
                                {/* colocar imagem do projeto */}
                                

                            </div>
                           
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {/* arrumar imagens */}
                        <Image src={project.imagem} className="project-image" width={500} height={300} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;