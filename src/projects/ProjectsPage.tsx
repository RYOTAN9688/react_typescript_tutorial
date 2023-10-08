import { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./Project";
import { ProjectList } from "./ProjectList";

export const ProjectPage = () => {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const saveProject = (project: Project) => {
    let updataedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updataedProjects);
  };
  return (
    <>
      <h1>Projects</h1>
      <ProjectList onSave={saveProject} projects={projects} />
    </>
  );
};
