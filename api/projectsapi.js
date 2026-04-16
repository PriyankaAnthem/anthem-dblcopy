import axiosInstance from "../lib/axiosConfig";

export const projectsapi = async () => {
  const response = await axiosInstance.get("/api/Portfolio/GetAllProjects");
  return response.data;
};

export const projectbyIdapi = async (projectID) => {
  const response = await axiosInstance.get(
    `api/home/ViewProjectByProjectbyid`,
    { params: { projectID } }
  );
  return response.data;
};