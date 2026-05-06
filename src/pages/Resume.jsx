import Banner from "../components/Banner";
import "./Resume.css";

export default function Resume() {
    return (        
        <div className="resume-page">
            <Banner currentPage={"resume"} />


            <img src={"/images/resume-1.png"} alt="Résumé" className="about-photo" />
            <a
            className="resume-link"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            >
            Download Résumé ↓
          </a>
        </div>
    );
}