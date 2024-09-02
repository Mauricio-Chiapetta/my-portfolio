import Link from "next/link";
import styles from "@/app/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link href="/">Mauricio's Portfolio</Link>
        </div>
        <div className="flex-btns">
          <a href="#About" className="cta-btn">
            About
          </a>
          <a href="#Skills" className="cta-btn">
            Skills
          </a>
          <a href="#Projects" className="cta-btn">
            Projects
          </a>
          <a href="#Contact" className="cta-btn">
            Contact
          </a>
        </div>
        {/* mudei aqui o href */}
      </div>
      {/* <hr className="hr-line-navbar" /> */}
      {/* coloquei um <hr/> aqui! */}
    </>
  );
};

export default Navbar;
