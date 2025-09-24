import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/sections/projectdetail.css"; // ✅ CSS file
import ShadowoftheGrand from "../../assets/Shadow-of-the-Grand.jpg";

// ✅ All projects consistent
const creativeProjects = [
  {
    id: 2,
    title: "My Stand-In Tribute Edit",
    description:
      "An emotional tribute edit exploring characters and dynamics from the series My Stand-In.",
    synopsis:
      "A heartfelt tribute capturing hidden pain, love, and sacrifice within the My Stand-In universe.",
    youtube: " https://www.youtube.com/embed/9KC9ogmp51Q ", // 👈 replace with real embed link
    story:
      "Taking inspiration from Om Shanti Om, I crafted this tribute to highlight the emotions and connections from My Stand-In.",
    character:
      "The characters show hidden pain, love, and sacrifice, which I wanted to emphasize in my edit.",
    feeling:
      "This project made me feel deeply connected to the characters — it was emotional, like reliving a drama within myself.",
  },
  {
    id: 3,
    title: "AI × Storytelling Experiment",
    description: "Imagined drama using AI and narrative techniques.",
    synopsis:
      "On the night of the Grand Siam Palace’s centennial, glittering lights mask deadly secrets...",
    image: ShadowoftheGrand,
    story: "Taking inspiration from Om Shanti Om...",
    character: "The characters show hidden pain, love, and sacrifice...",
    feeling:
      "This project made me feel deeply connected to the characters — emotional, like reliving a drama within myself.",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = creativeProjects.find((p) => p.id.toString() === id);

  if (!project) return <h2>Project not found</h2>;

  return (
    <section className="project-detail">
      <h2 className="detail-title">{project.title}</h2>

      {/* ✅ Youtube OR Video OR Image */}
      {project.youtube ? (
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="400"
            src={`${project.youtube}?autoplay=1&mute=1&loop=1&playlist=${
              project.youtube.split("embed/")[1]
            }`}
            title={project.title}
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : project.video ? (
        <div className="video-wrapper">
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      ) : project.image ? (
        <div className="image-wrapper">
          <img src={project.image} alt={project.title} />
        </div>
      ) : null}

      {/* ✅ Description */}
      {project.description && (
        <p className="detail-description">{project.description}</p>
      )}

      {/* ✅ Synopsis */}
      {project.synopsis && (
        <div className="detail-block">
          <h3>Synopsis</h3>
          <p className="detail-synopsis">{project.synopsis}</p>
        </div>
      )}

      {/* ✅ Story */}
      {project.story && (
        <div className="detail-block">
          <h3>Story</h3>
          <p>{project.story}</p>
        </div>
      )}

      {/* ✅ Characters */}
      {project.character && (
        <div className="detail-block">
          <h3>Characters</h3>
          <p>{project.character}</p>
        </div>
      )}

      {/* ✅ Feeling */}
      {project.feeling && (
        <div className="detail-block">
          <h3>How I Felt</h3>
          <p>{project.feeling}</p>
        </div>
      )}

      <div className="back-link">
        <Link to="/creative-lab">← Back to Creative Lab</Link>
      </div>
    </section>
  );
};

export default ProjectDetail;
