import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import ProjectCard from "../components/ProjectCard";
import Project from "./Project.jsx";
import { PROJECTS } from "../data/projects";
import "./Home.styles.css";

export default function Home() {
  const [page, setPage] = useState("home");

  const navigate = (page) => {
    setPage(page);
  }
  
  if (page.startsWith("project-")) {
    const projectId = Number(page.replace("project-", ""));
    const project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];

    return (
      <Project project={project} currentPage={page} onNavigate={navigate} />
    );
  }

  return (
    <>
      {/* ── banner ── */}
      <Banner currentPage={page} onNavigate={navigate} />

      <main>
        {/* ── hero ── */}
        <section className="hero">
          {/* left — abstract graphic */}
          <div className="hero-graphic">
            <div className="lens-wrap">
              <div className="lens" />
              <div className="lens" />
              <div className="lens" />
              <div className="lens-inner" />
            </div>
          </div>

          {/* right — copy */}
          <div className="hero-copy">
            <p className="hero-label">Portfolio</p>
            <h1 className="hero-name">Mason<br />Nguyen</h1>
            <p className="hero-title">Software Engineer</p>
            <button className="hero-btn" onClick={() => navigate("about")}>
              Learn more about me →
            </button>
          </div>

          <div className="hero-divider" />
        </section>

        {/* ── projects strip ── */}
        <section className="projects-section">
          <p className="section-label">Selected Projects</p>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                onNavigate={navigate}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}