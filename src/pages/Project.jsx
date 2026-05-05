import { useEffect } from "react";
import Banner from "../components/Banner";
import "./Project.css";
import { useNavigate, useParams } from "react-router";
import { PROJECTS } from "../data/projects";

function ImgPlaceholder({ className = "" }) {
  return (
    <div className={`project-img ${className}`}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

function IconPlaceholder() {
  return (
    <div className="project-icon">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

export default function Project() {
  const navigate = useNavigate();
  const projectId = useParams().id;
  const project = PROJECTS[projectId - 1];
  console.log("Rendering project page for project:", project.description);

  return (
    <div className="project-page">
      <Banner currentPage="projects"/>

      <div className="project-container">
        {/* back to projects */}
        <button className="back-link" onClick={() => navigate("/")}>
          ← All Projects
        </button>

        {/* ── hero card: icon + title + description ── */}
        <div className="project-hero-card">
          <ImgPlaceholder className="hero-img" />

          <div className="project-hero-copy">
            <div className="project-title-row">
              <h1 className="project-title">{project.title}</h1>
            </div>

            <p className="project-description">{project.overview}</p>

            {project.tools && (
              <ul className="tech-list">
                {project.tools.map((t) => (
                  <li key={t} className="tech-tag">{t}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ── detail card: secondary image + design rationale ── */}
        <div className="project-detail-card">
          <ImgPlaceholder className="secondary-img" />

          <div className="project-detail-copy">
            <h2 className="detail-heading">Design Rationale</h2>
            <p className="detail-text">{project.process}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
