import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link href="/">Mauricio's Portfolio</Link>
        </div>
        {/* mudei aqui o href */}
        <a href="#About" className="cta-btn">
          Resumo
        </a>
      </div>
      <hr className="hr-line-navbar" />
      {/* coloquei um <hr/> aqui! */}
    </>
  );
};

export default Navbar;
