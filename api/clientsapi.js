import axiosInstance from "../lib/axiosConfig";

export const clientsapi = async () => {
  const response = await axiosInstance.get("/api/Client/ViewAllClient");
  return response.data;
};