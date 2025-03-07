import Link from "next/link";
import styles from "@/app/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles["nav-container"]}>
        <div className={styles["logo"]}>
          <Link href="/">Mauricio's Portfolio</Link>
        </div>
         <div className={styles["flex-btns"]}>
          <Link href="#About" className={styles["cta-btn"]}>
            About
          </Link>
          <Link href="#Skills" className={styles["cta-btn"]}>
            Skills
          </Link>
          <Link href="#Projects" className={styles["cta-btn"]}>
            Projects
          </Link>
          <Link href="#Contact" className={styles["cta-btn"]}>
            Contact
          </Link>
         </div>
        {/* mudei aqui o href */}
      </div>
      {/* <hr className="hr-line-navbar" /> */}
      {/* coloquei um <hr/> aqui! */}
    </>
  );
};

export default Navbar;
