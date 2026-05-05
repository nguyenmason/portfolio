import { useEffect } from "react";
import Banner from "../components/Banner";
import "./AboutMe.css";
import { useNavigate } from "react-router";

const INTERESTS = [
  "Full-stack Development",
  "UI / UX Design",
  "Systems Programming",
  "Open Source",
  "Machine Learning",
  "Photography",
];

function PhotoPlaceholder() {
  return (
    <div className="about-photo">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

export default function AboutMe({ currentPage = "about" }) {
  const navigate = useNavigate();
  useEffect(() => {
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@300;400&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className="about-page">
      <Banner currentPage={currentPage} />

      <div className="about-container">
        {/* ── left: photo + resume ── */}
        <aside className="about-left">
          <PhotoPlaceholder />
          <a
            className="resume-link"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download Résumé ↓
          </a>
        </aside>

        {/* ── right: copy ── */}
        <main>
          <h1 className="about-heading">About Me</h1>

          <div className="about-right">
            {/* Bio */}
            <section className="about-section">
              <h2 className="section-heading">Bio</h2>
              <div className="bio-text">
                <p>
                  Hi, I'm Mason Nguyen — a software engineer passionate about
                  building thoughtful, user-centered products. I enjoy working
                  across the stack, from designing clean interfaces to architecting
                  reliable backend systems.
                </p>
                <p>
                  I'm currently studying Computer Science and am always looking for
                  opportunities to collaborate on meaningful projects. When I'm not
                  coding, you'll find me exploring the outdoors or tinkering with
                  side projects.
                </p>
              </div>
            </section>

            {/* Interests */}
            <section className="about-section">
              <h2 className="section-heading">Interests</h2>
              <ul className="interests-list">
                {INTERESTS.map((item) => (
                  <li key={item} className="interest-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
