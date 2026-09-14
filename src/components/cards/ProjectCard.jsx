import { CheckCircle2 } from "lucide-react";

const projectImages = {
  tenderlens: "/images/projects/tenderlens.jpg",
  clientpilot: "/images/projects/clientpilot.png",
  agriconnect: "/images/projects/agriconnect.png",
  taskflow: "/images/projects/task-management.png",
};

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-${project.accent} reveal`}>
      <div className="project-visual">
        <img
          className="project-image"
          src={projectImages[project.id] || project.image}
          alt={`${project.title} project interface`}
          loading="lazy"
        />

        <strong aria-hidden="true">{project.number}</strong>
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <b>{project.status}</b>
        </div>

        <h3>{project.title}</h3>

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
      </div>
    </article>
  );
}

export default ProjectCard;