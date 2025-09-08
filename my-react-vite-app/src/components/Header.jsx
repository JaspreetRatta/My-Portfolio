import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/sections/header.css'

const Header = () => {
  const [active, setActive] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return; // only run scroll spy on homepage

    const sections = document.querySelectorAll("section");
    const changeActive = () => {
      let current = "home";
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top - height / 2) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", changeActive);
    return () => window.removeEventListener("scroll", changeActive);
  }, [location.pathname]);

  return (
    <header>
      <div className="brand">Jaspreet</div>
      <nav>
        {location.pathname === "/" ? (
          <>
            <a href="#home" className={active === "home" ? "active" : ""}>Home</a>
            <a href="#about" className={active === "about" ? "active" : ""}>About</a>
            <a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a>
            <a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a>
          </>
        ) : (
          <>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/#about" className="nav-link">About</Link>
            <Link to="/#projects" className="nav-link">Projects</Link>
            <Link to="/#contact" className="nav-link">Contact</Link>
          </>
        )}

        {/* Creative Lab → always separate page */}
        <Link
          to="/creative-lab"
          className={location.pathname === "/creative-lab" ? "active" : ""}
        >
          Creative Lab
        </Link>
      </nav>
    </header>
  );
};

export default Header;
