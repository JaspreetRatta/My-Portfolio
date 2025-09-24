import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sections/creativelab.css";

const creativeProjects = [
  {
    id: 1,
    title: "Romantic Fan Edit (Thai BL × Hindi Song)",
    description:
      "A creative edit blending Thai BL drama clips with Hindi music to create new emotions."
  },
  {
    id: 2,
    title: "My Stand-In Tribute Edit",
    description:
      "An emotional tribute edit exploring characters and dynamics from the series My Stand-In.",
    video: "/video/Dastaan_1.mp4" // keep video reference for detail page
  },
  {
    id: 3,
    title: "AI × Storytelling Experiment",
    description: "Reimagined drama using AI and narrative techniques.",
    
  },
 
];

const CreativeLab = () => (
  <section id="creative-lab" className="creative-section fade-up">
    <h2 className="section-title">Blumiintx Creative Lab</h2>
    <p className="intro">
      The Creative Lab is my playground — a space where I experiment with edits,
      ideas, and visuals.
    </p>

    <div className="creative-grid">
      {creativeProjects.map((project) => (
        <div key={project.id} className="creative-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {/* ✅ All projects link to detail page */}
          <Link to={`/creative-lab/${project.id}`}>View Project →</Link>
        </div>
      ))}
    </div>
  </section>
);

export default CreativeLab;
