"use client";
import Image from "next/image";
import Perfil from "@/app/images/perfil-navbar.jpeg";
import { faLinkedin, faGithub,faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "@/app/styles/Hero.module.css";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <Image
        src={Perfil}
        className={styles["profile-img"]}
        width={300}
        height={300}
        alt="Mauricio's personal headshot"
      />
      <div className={styles["hero-text"]}>
        <h4>
          <TypeAnimation
            sequence={[
              "Oi, sou o Mauricio 👋", // Types 'One'
              1000, // Waits 1s
              "Desenvolvedor", // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              "Front-End", // Types 'Three' without deleting 'Two'
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </h4>
        {/* feature type animation */}

        {/* <h1 className={styles["efeito-digitando"]}>Oi, sou o Mauricio 👋</h1> */}
        <p>
          Sou desenvolvedor de software e moro em Santos, no Brasil. Sou
          especializado na criação (e, ocasionalmente, no design) de sites e
          aplicativos excepcionais e tudo mais.
        </p>
        <div className={styles["social-icons"]}>
          <Link
            href="https://github.com/Mauricio-Chiapetta"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            alt="github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mauricio-chiapetta-ba0b33251/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            alt="Linkedin"

          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            href="https://wa.me/5513997851733"
            aria-label="Whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            alt="Whatsapp"

          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
