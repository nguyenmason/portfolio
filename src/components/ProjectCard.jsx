
/* ── tiny SVG placeholder image ──────────────────────────── */
export function ImgPlaceholder({ className = "" }) {
  return (
    <div className={`img-placeholder ${className}`}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

export default function ProjectCard({ project, onNavigate, index }) {
  return (
    <article
      className="project-card"
      style={{ animationDelay: `${0.55 + index * 0.1}s` }}
      onClick={() => onNavigate(`project-${project.id}`)}
    >
      <ImgPlaceholder className="card-img" />
      <div className="card-body">
        <span className="card-tag">{project.tag}</span>
        <h3 className="card-title">{project.title}</h3>
        <span className="card-cta">View →</span>
      </div>
    </article>
  );
}
