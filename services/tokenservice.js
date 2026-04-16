import { tokenapi } from "../api/tokenapi";

export const getToken = async () => {
  try {
    const clients = await tokenapi();
    saveToken(clients.token);
    return clients;
  } catch (error) {
    throw new Error("Failed to fetch Token");
  }
};

const saveToken = (token) => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  }
  localStorage.setItem("token", token);
};
