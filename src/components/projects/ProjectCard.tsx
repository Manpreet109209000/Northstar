import Button from "../Button";
import TechBadge from "./TechBadge";

type ProjectCardProps = {
  project: {
    title: string;
    subtitle: string;
    tech: string[];
    desc: string;
    link: string;
    github: string;
  };
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      {/* top */}
      <div className="project-top">
        <h3>{project.title}</h3>

        <p className="project-subtitle">
          {project.subtitle}
        </p>
      </div>

      {/* desc */}
      <p className="project-desc">{project.desc}</p>

      {/* tech */}
      <div className="project-tech">
        {project.tech.map((item) => (
          <TechBadge key={item} name={item} />
        ))}
      </div>

      {/* buttons */}
        <div className="project-actions">
        {project.link !== "#" && (
            <Button
            href={project.link}
            variant="primary"
            target="_blank"
            >
            🕊️  Live Demo
            </Button>
        )}

        <Button
            href={project.github}
            variant="secondary"
            target="_blank"
        >
        🌱  GitHub
        </Button>
        </div>
    </article>
  );
}