import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "@/app/styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <hr />
      <div className={styles["footer-container"]}>
        <p>© {new Date().getFullYear()} Mauricio's Portfolio</p>
        <div className={styles["social_icons"]}>
          <Link
            href="https://github.com/Mauricio-Chiapetta"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mauricio-chiapetta-ba0b33251/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            href="https://wa.me/5513997851733"
            aria-label="Whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
