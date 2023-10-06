import { Project } from "./Project";

interface ProjectCardProps {
  project: Project;
}

const formatDescription = (description: string): string => {
  return description.substring(0, 60) + "...";
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget: {project.budget.toLocaleString()}</p>
      </section>
    </div>
  );
};
