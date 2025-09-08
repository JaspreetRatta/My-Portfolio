import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sections/creativePreview.css";

const CreativePreview = () => (
  <section className="creative-preview fade-up">
    <div className="preview-box">
      <h2>Creative Lab (Blumiintx)</h2>
      <p>
        My personal playground for experiments — where I explore design, AI,
        coding, and content creation. It’s where ideas turn into exciting
        projects.
      </p>
      <Link to="/creative-lab" className="explore-btn">
        Explore →
      </Link>
    </div>
  </section>
);

export default CreativePreview;
