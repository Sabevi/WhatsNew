import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import api from "../config/api";
import { User } from "../types/ComponentTypes";

const useSignUp = () => {
  const navigate = useNavigate();

  const signup = async (user: User) => {
    const { username, password } = user;

    try {
      const response = await axios.post(
        api.createUser,
        JSON.stringify({
          username,
          password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);
      () => navigate("/signin");
    } catch (error) {
     console.log(error)
    }
  };

  return {
    signup,
  };
};

export default useSignUp;