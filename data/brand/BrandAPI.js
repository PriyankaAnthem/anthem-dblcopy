import axios from "axios";

function useBrandAPI(token) {
  const getClients = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PUBLIC_API_URL}/api/Client/ViewAllClient`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return getClients;
}

export default useBrandAPI;
