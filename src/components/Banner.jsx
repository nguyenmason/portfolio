import { useState } from "react";
import "./Banner.css";
import { PROJECTS } from "../data/projects";
import { useNavigate } from "react-router";

export default function Banner({ currentPage = "home" }) {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="banner">
        <span className="banner-name" onClick={() => navigate("/")}>
          Mason Nguyen
        </span>

        <nav className="banner-nav">
          {/* Projects dropdown */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <button
              className={`nav-btn ${currentPage.startsWith("project") ? "active" : ""}`}
              onClick={() => setProjectsOpen((o) => !o)}
            >
              Projects
              <span className={`dropdown-arrow ${projectsOpen ? "open" : ""}`}>▾</span>
            </button>

            {projectsOpen && (
              <div className="dropdown">
                {PROJECTS.map((p) => (
                  <button
                    key={p.id}
                    className="dropdown-item"
                    onClick={() => navigate(`/projects/${p.id}`)}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className={`nav-btn ${currentPage === "about" ? "active" : ""}`}
            onClick={() => navigate("/about")}
          >
            About Me
          </button>
        </nav>
      </header>
    </>
  );
}