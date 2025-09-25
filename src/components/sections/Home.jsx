import React from "react";
import "../../styles/sections/home.css";
import Jaspreet from "../../assets/jaspreet.jpg";

const Home = () => (
  <section id="home" className="home-hero fade-up">
    <div className="hero-left">
      <p className="intro-text">HEY THERE !</p>
      <h1>
        I AM <span className="highlight">JASPREET RATTA</span>
      </h1>
      <h3 className="subtitle">FREELANCER — EXPLORING IN MY OWN WAY</h3>

      {/* 👉 Resume Button */}
      
  {/* 👉 Resume Button */}
      <a
        href="/Resume-Jaspreet-Ratta.pdf"   // ✅ served from public/
        target="_blank"                     // open in new tab
        rel="noopener noreferrer"
        className="download-btn"
      >
        SEE RESUME
      </a>
    </div>

    <div className="hero-right">
      <img src={Jaspreet} alt="mee" className="profile-photo" />
    </div>
  </section>
);

export default Home;
