import { clientsapi } from "../api/clientsapi";

export const getClients = async () => {
  try {
    const clients = await clientsapi();
    return clients;
  } catch (error) {
    throw new Error("Failed to fetch clients");
  }
};
