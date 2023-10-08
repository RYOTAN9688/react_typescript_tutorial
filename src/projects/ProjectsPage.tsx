import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./Project";
import { ProjectList } from "./ProjectList";

export const ProjectPage = () => {
  const saveProject = (project: Project) => {
    console.log(project);
  };
  return (
    <>
      <h1>Projects</h1>
      <ProjectList onSave={saveProject} projects={MOCK_PROJECTS} />
    </>
  );
};
