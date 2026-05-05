import { useNavigate } from "react-router";
import "./ProjectCard.css";

export default function ProjectCard({ project, index }) {
  const navigate = useNavigate();

  return (
    <article
      className="project-card"
      style={{ animationDelay: `${0.55 + index * 0.1}s` }}
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <img
        src={`/images/${project.image}`}
        alt={`${project.title} project screenshot`}
        className="card-img"
      />
      <div className="card-body">
        <span className="card-tag">{project.tag}</span>
        <h3 className="card-title">{project.title}</h3>
        <span className="card-cta">View →</span>
      </div>
    </article>
  );
}
