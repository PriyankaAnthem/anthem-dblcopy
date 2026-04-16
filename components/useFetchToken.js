import { useState, useEffect } from "react";
import axios from "axios";

const useFetchToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_PUBLIC_API_URL}/api/Home/GetTokenForAllAPI?tokenn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiUmFtYW4gS3VtYXIiLCJuYmYiOjE3MTM0OT`
        );
        const token = response.data.token;
        // localStorage.setItem("token", token);
        setToken(token);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []);

  return token;
};

export default useFetchToken;
