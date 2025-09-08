import React from "react";
import "../../styles/sections/home.css";
import Jaspreet from "../../assets/Jaspreet.JPG"

const Home = () => (
  <section id="home" className="home-hero fade-up">
    <div className="hero-left">
        <h1 className="first-name">Jaspreet</h1>
        <h1 className="last-name">Ratta</h1>
        <h3> I’m a freelancer — creating in my own way</h3>
      
    </div>
    <div className="hero-right">
       <img src={Jaspreet} alt="Jaspreet Ratta" className="profile-photo" />
    </div>
  </section>
);

export default Home;
