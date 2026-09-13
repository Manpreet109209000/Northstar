import "../components/projects/Projects.css";

import { projects } from "../components/projects/projectsData";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectsHeader from "../components/projects/ProjectsHeader";

export default function ProjectsPreview() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <ProjectsHeader />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}