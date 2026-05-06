import { useEffect } from "react";
import Banner from "../components/Banner";
import "./AboutMe.css";
import { useNavigate } from "react-router";
import { GrLinkedin, GrMail } from "react-icons/gr";

const INTERESTS = [
  "Front-end Development",
  "Embedded Systems",
  "Web Development",
  "Environmental Sustainability",
  "Rock Climbing",
];

export default function AboutMe() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <Banner currentPage={"about"} />

      <div className="about-container">
        {/* ── left: photo + resume ── */}
        <aside className="about-left">
          <img src={"/images/resume-1.png"} alt="Résumé" className="about-photo" />
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
                  Hi, I'm Mason Nguyen, a junior software engineer at the Milwaukee
                  School of Engineering! I have a passion for creating easy and intuitive
                  user experiences, and I enjoy working on projects that have a positive
                  impact on people's lives.
                </p>
                <p>
                  Beyond coding, I love rock climbing and have been climbing for 3-ish years now.
                  I am a boulderer for life because the problems feel more puzzle-like than top 
                  rope (and there's more dynos!). I'm also a big fan of Pokemon for its 
                  complex battle mechanics and creature collecting. My favorite Pokemon has 
                  to be Sinistcha becasue of its design and inspiration.
                </p>
              </div>
            </section>

            {/* Interests */}
            <section className="about-section">
              <h2 className="section-heading">Interests</h2>
              <ul className="interests-list">
                {INTERESTS.map((item) => (
                  <li  key={item} className="interest-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact */}
            <section className="about-section">
              <h2 className="section-heading">Contact</h2>
              <p>
              </p>
              <a className="contact-btn" href="https://www.linkedin.com/in/mason-nguyen-se/">
                <GrLinkedin size={18} style={{ marginRight: 6 }} /> LinkedIn
              </a>
              <a className="contact-btn" href="mailto:masonnguyen1861@gmail.com">
                <GrMail size={18} style={{ marginRight: 6 }} /> Email
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
