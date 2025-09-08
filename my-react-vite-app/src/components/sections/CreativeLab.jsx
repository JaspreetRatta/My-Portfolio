import React from "react";
import "../../styles/sections/creativeLab.css";

const CreativeLab = () => {
  return (
    <section id="creative-lab" className="creative-section">
      <h2 className="section-title">Blumiintx Creative Lab</h2>
      <p className="intro">
        The Creative Lab is my digital playground — a space to explore ideas,
        test storytelling, and experiment with edits, AI, and visual design.
      </p>

      <div className="creative-grid">
        
        <div className="creative-card">
          <h3>Romantic Fan Edit (Thai BL × Hindi Song)</h3>
          <p>
            A storytelling experiment combining Thai BL drama clips with Hindi
            romantic music, creating a fresh and emotional narrative.
          </p>
        </div>

        <div className="creative-card">
          <h3>My Stand-In Tribute Edit</h3>
          <p>
            Emotional video edit exploring character dynamics and emotional
            depth from the series *My Stand-In*.
          </p>
        </div>

        <div className="creative-card">
          <h3>AI × Storytelling Experiment</h3>
          <p>
            Used AI tools to reimagine drama scenes in different styles,
            blending technology with creative storytelling.
          </p>
        </div>

        <div className="creative-card">
          <h3>BLxPlanet Instagram Growth</h3>
          <p>
            Built a community of 14K+ followers by sharing edits, reels, and
            creative storytelling around Thai dramas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeLab;
