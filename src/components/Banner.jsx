import { useState } from "react";
import "./Banner.styles.css";
import { PROJECTS } from "../data/projects";


export default function Banner({ currentPage = "home", onNavigate }) {
  const [projectsOpen, setProjectsOpen] = useState(false);

  const navigate = (page) => {
    setProjectsOpen(false);
    if (onNavigate) onNavigate(page);
  };

  return (
    <>
      <header className="banner">
        <span className="banner-name" onClick={() => navigate("home")}>
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
                    onClick={() => navigate(`project-${p.id}`)}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className={`nav-btn ${currentPage === "about" ? "active" : ""}`}
            onClick={() => navigate("about")}
          >
            About Me
          </button>
        </nav>
      </header>
    </>
  );
}