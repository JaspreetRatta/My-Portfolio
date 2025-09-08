import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sections/header.css";

const Header = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // ✅ new state for mobile menu
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

      {/* Hamburger icon (only visible on mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Nav links */}
      <nav className={menuOpen ? "open" : ""}>
        {location.pathname === "/" ? (
          <>
            <a
              href="#home"
              className={active === "home" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className={active === "projects" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </>
        ) : (
          <>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/#about" className="nav-link" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/#projects" className="nav-link" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link to="/#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </>
        )}

        {/* Creative Lab always separate */}
        <Link
          to="/creative-lab"
          className={location.pathname === "/creative-lab" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Creative Lab
        </Link>
      </nav>
    </header>
  );
};

export default Header;
