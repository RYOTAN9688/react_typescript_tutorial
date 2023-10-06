import { Project } from "./Project";
import { ProjectCard } from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ul className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          <ProjectCard project={project} />
        </div>
      ))}
    </ul>
  );
};
