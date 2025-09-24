import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sections/creativePreview.css";

const CreativePreview = () => (
  <section className="creative-preview fade-up">
    <h2>Creative Lab</h2>
    <p>
      My personal playground for experiments — where I explore design, AI,
      coding, and content creation. It’s where ideas turn into exciting
      projects.
    </p>
    <Link to="/creative-lab" className="explore-btn">
      Explore →
    </Link>
  </section>
);

export default CreativePreview;
