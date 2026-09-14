import { CheckCircle2, ExternalLink, Github } from "lucide-react";

const projectImages = {
  tenderlens: "/images/projects/tenderlens.jpg",
  swachhnet: "/images/projects/swachhnet.jpg",
  msquare: "/images/projects/msquare.jpg",
  clientpilot: "/images/projects/clientpilot.png",
  agriconnect: "/images/projects/agriconnect.png",
  taskflow: "/images/projects/task-management.png",
};

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-${project.accent} reveal`}>
      <div className="project-visual">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live demo`}
            style={{ display: "contents" }}
          >
            <img
              className="project-image"
              src={projectImages[project.id] || project.image}
              alt={`${project.title} project interface`}
              loading="lazy"
            />
          </a>
        ) : (
          <img
            className="project-image"
            src={projectImages[project.id] || project.image}
            alt={`${project.title} project interface`}
            loading="lazy"
          />
        )}

        <strong aria-hidden="true">{project.number}</strong>
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <b>{project.status}</b>
          </div>
        </div>

        <h3>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="project-summary">{project.summary}</p>

        <div className="problem-solution">
          <div>
            <small>Problem</small>
            <p>{project.problem}</p>
          </div>

          <div>
            <small>Direction</small>
            <p>{project.solution}</p>
          </div>
        </div>

        <div className="project-details">
          <div>
            <h4>Capabilities</h4>

            <ul>
              {project.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={15} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>My contribution</h4>
            <p>{project.role}</p>
          </div>
        </div>

        <div className="tech-list">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {(project.live || project.github) && (
          <div className="project-actions">
            {project.live && (
              <a
                className="button button-primary project-action-btn"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <span>Live Demo</span>
                <ExternalLink size={15} />
              </a>
            )}
            {project.github && (
              <a
                className="button button-secondary project-action-btn"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={15} />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;