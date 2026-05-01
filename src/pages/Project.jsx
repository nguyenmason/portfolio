import { useEffect } from "react";
import Banner from "../components/Banner";
import "./Project.css";

// Default project data — swap out per project or pass via props
const DEFAULT_PROJECT = {
  id: 1,
  title: "Raider Connect",
  description:
    "Raider Connect is a full-stack web platform designed to help students discover and connect with campus organizations, events, and opportunities. The app provides a unified hub for student life, replacing scattered bulletin boards and email chains with a clean, searchable interface.",
  designRationale:
    "The design prioritizes discoverability and simplicity. A card-based layout lets users scan content quickly, while a persistent search bar reduces friction for finding specific clubs or events. Color and typography were chosen to feel approachable without sacrificing readability on long browsing sessions.",
  tech: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
  liveUrl: "https://example.com",
  repoUrl: "https://github.com",
};

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

export default function Project({
  project = DEFAULT_PROJECT,
  onNavigate,
  currentPage = "project-1",
}) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@300;400&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className="project-page">
      <Banner currentPage={currentPage} onNavigate={onNavigate} />

      <div className="project-container">
        {/* back to projects */}
        <button className="back-link" onClick={() => onNavigate && onNavigate("home")}>
          ← All Projects
        </button>

        {/* ── hero card: icon + title + description ── */}
        <div className="project-hero-card">
          <ImgPlaceholder className="hero-img" />

          <div className="project-hero-copy">
            <div className="project-title-row">
              <IconPlaceholder />
              <h1 className="project-title">{project.title}</h1>
            </div>

            <p className="project-description">{project.description}</p>

            {project.tech && (
              <ul className="tech-list">
                {project.tech.map((t) => (
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
            <p className="detail-text">{project.designRationale}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
