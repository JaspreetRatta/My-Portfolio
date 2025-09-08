// src/components/sections/CreativeLab.jsx
import React from "react";
import "../../styles/sections/creativeLab.css"; // import CSS

// Array of creative lab projects
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
      "An emotional tribute edit exploring characters and dynamics from the series My Stand-In."
  },
  {
    id: 3,
    title: "AI × Storytelling Experiment",
    description:
      "Reimagined drama scenes with AI tools, mixing technology and creativity."
  },
  {
    id: 4,
    title: "BLxPlanet Instagram Growth",
    description:
      "Built a 14K+ follower community by creating edits, reels, and engagement content."
  }
];

// Functional component
const CreativeLab = () => (
  <section id="creative-lab" className="creative-section fade-up">
    <h2 className="section-title">Blumiintx Creative Lab</h2>
    <p className="intro">
      The Creative Lab is my playground — a space where I experiment with edits,
      ideas, and visuals.
    </p>

    {/* Render creative cards directly here */}
    <div className="creative-grid">
      {creativeProjects.map((project) => (
        <div key={project.id} className="creative-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CreativeLab;
