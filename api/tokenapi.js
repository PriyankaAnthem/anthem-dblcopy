import axiosInstance from "../lib/axiosConfig";

export const tokenapi = async () => {
  const response = await axiosInstance.post(
    "/api/Home/GetTokenForAllAPI?tokenn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiUmFtYW4gS3VtYXIiLCJuYmYiOjE3MTM0OT"
  );
  return response.data;
};