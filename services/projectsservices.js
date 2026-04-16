import { projectsapi, projectbyIdapi } from "../api/projectsapi";

export const getProjects = async () => {
  try {
    const projects = await projectsapi();
    return projects;
  } catch (error) {
    throw new Error("Failed to fetch projects");
  }
};

export const getProjectByID = async (projectID) => {
  try {
    const projects = await projectbyIdapi(projectID);
    return projects;
  } catch (error) {
    throw new Error("Failed to fetch project");
  }
};
