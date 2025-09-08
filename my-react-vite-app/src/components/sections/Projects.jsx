import React from "react";
import "../../styles/sections/projects.css";

const projects = [
  {
    id: 1,
    title: "Video Editing Demo",
    description: "A short edit showing my storytelling & transitions.",
    image: "/projects/video-editing.jpg", // put inside public/projects/
    link: "https://www.youtube.com/watch?v=AwvDpVw6778" // optional
  },
  {
    id: 2,
    title: "Graphic Design Poster",
    description: "A minimalist poster designed in Photoshop.",
    image: "/projects/poster.jpg",
    link: "/projects/poster-full.png" // could open full-size image
  },
  {
    id: 3,
    title: "React + Vite Website",
    description: "My experiment building modern simple portfolio website.",
    image: "/projects/website.jpg",
    link: "https://github.com/your-repo"
  }
];

const Projects = () => (
  <section id="projects" className="projects-section fade-up">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
