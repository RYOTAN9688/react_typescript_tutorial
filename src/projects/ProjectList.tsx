import { Project } from "./Project";
import { ProjectCard } from "./ProjectCard";
import { ProjectForm } from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ul className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          <ProjectCard project={project} />
          <ProjectForm />
        </div>
      ))}
    </ul>
  );
};
