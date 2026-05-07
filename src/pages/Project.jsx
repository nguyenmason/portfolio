import { useEffect } from "react";
import Banner from "../components/Banner";
import "./Project.css";
import { useNavigate, useParams } from "react-router";
import { PROJECTS } from "../data/projects";

export default function Project() {
  const navigate = useNavigate();
  const projectId = useParams().id;
  const project = PROJECTS[projectId - 1];

  return (
    <div className="project-page">
      <Banner currentPage="projects" />

      <div className="project-container">
        <button className="back-link" onClick={() => navigate("/")}>
          ← All Projects
        </button>

        {/* ── header: image + title + meta ── */}
        <div className="project-header-card">

          <div className="project-header-copy">
            <h1 className="project-title">{project.title}</h1>

            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Type</span>
                <span className="meta-value">{project.type}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Timeline</span>
                <span className="meta-value">{project.time}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">{project.role}</span>
              </div>
            </div>

            {project.tools && (
              <ul className="tech-list">
                {project.tools.map((t) => (
                  <li key={t} className="tech-tag">{t}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ── overview ── */}
        <div className="project-section-card">
          <h2 className="detail-heading">Project Overview</h2>
          <p className="detail-text">{project.overview}</p>
        </div>

        {/* ── problem + role ── */}
        <div className="project-split-row">
          <div className="project-section-card">
            <h2 className="detail-heading">The Problem</h2>
            <p className="detail-text">{project.problem}</p>
          </div>
          <div className="project-section-card">
            <h2 className="detail-heading">My Role</h2>
            <p className="detail-text">{project.myRole}</p>
          </div>
        </div>

        {/* ── process ── */}
        <div className="project-section-card">
          <h2 className="detail-heading">Process</h2>
          <p className="detail-text">{project.process}</p>
        </div>

        {/* ── results + growth ── */}
        <div className="project-split-row">
          <div className="project-section-card">
            <h2 className="detail-heading">Results</h2>
            <p className="detail-text">{project.results}</p>
          </div>
          <div className="project-section-card">
            <h2 className="detail-heading">What I Learned</h2>
            <p className="detail-text">{project.growth}</p>
          </div>
        </div>

        {/* ── gallery ── */}
        <div className="project-section-card">
          <h2 className="detail-heading">Gallery</h2>
          <div className="gallery-grid">
            {project.gallery?.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="gallery-img"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
