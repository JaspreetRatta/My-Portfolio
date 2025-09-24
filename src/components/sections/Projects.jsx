import React from "react";
import "../../styles/sections/projects.css";
import { Link } from "react-router-dom";
const projects = [
  {
    id: 1,
    title: "Video Editing Demo",
    description: "A short edit showing my storytelling & transitions.",
    image: "/projects/video-editing.jpg",
    link: "https://www.youtube.com/watch?v=AwvDpVw6778"
  },
  {
    id: 2,
    title: "Bus Management System",
    Type: "IT / Web Development",
    description: "A web-based system designed to streamline bus schedules, route management, and ticketing.",
    image: "/projects/poster.jpg",
    link: "https://github.com/JaspreetRatta/BookingProject-LD"
  },
  {
    id: 3,
    title: "React + Vite Website",
    description: "My experiment building modern simple portfolio website.",
    image: "/projects/website.jpg",
    link: "https://github.com/JaspreetRatta/My-Portfolio"
  }
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="section-titlee">Projects</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">

          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
