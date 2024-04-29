import Image from "next/image";
import Perfil from "@/app/images/perfil-navbar.jpeg"
// mudar os links das redes sociais

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src= {Perfil} className="profile-img" width={300} height={300} alt="Mauricio's personal headshot" />
            <div className="hero-text">
                <h1>Oi, sou o Mauricio 👋</h1>
                <p>
                Sou desenvolvedor de software e moro em Santos, no Brasil. Sou especializado na criação (e, ocasionalmente, no design) de sites e aplicativos excepcionais e tudo mais.
                </p>
                <div className="social-icons">
                    <a
                        href="https://twitter.com/olawanle_joel"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/olawanlejoel"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/olawanlejoel/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;