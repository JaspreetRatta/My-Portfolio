import React from "react";
import "../../styles/sections/about.css";
import Jaspreet2 from "../../assets/Jaspreet2.JPG"

const About = () => (
  <section id="about" className="section about-section">
    <div className="hero-right">
           <img src={Jaspreet2} alt="Jaspreet Ratta" className="profile-photo" />
        </div>
    <div className="about-right">
      <h2>About Me</h2>
      <p>
        Hi, I’m Jaspreet(Mint). I recently graduated in Information Technology and I’m preparing to begin my Master’s in Creative Communication. 
        Beyond academics, I’m deeply passionate about digital creativity, video editing, design, and storytelling.
I enjoy building projects that blend technology and creativity, whether that’s through video edits, websites,
 or experimental ideas in my Creative Lab. My goal is to create work that feels fresh, aesthetic, and connects with people on an emotional level.
      </p>
    </div>
  </section>
);

export default About;
