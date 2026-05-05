import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import "./Home.css";
import { useNavigate } from "react-router";

export default function Home() {
  const [page, setPage] = useState("home");
  const navigate = useNavigate();
  
  return (
    <>
      {/* ── banner ── */}
      <Banner currentPage={page} navigate={navigate} />

      <main>
        {/* ── hero ── */}
        <section className="hero">
          {/* left — photo  */}
          <div className="photo-container">
            <img src={"/images/me-photo.jpg"} alt="Photo of me" className="hero-photo" />
            <div className="hero-graphic-overlay" />
          </div>

          {/* right — copy */}
          <div className="hero-copy">
            <p className="hero-label">Portfolio</p>
            <h1 className="hero-name">Mason<br />Nguyen</h1>
            <p className="hero-title">Software Engineer</p>
            <button className="hero-btn" onClick={() => navigate("/about")}>
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
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}