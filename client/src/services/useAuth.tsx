import { useMutation } from "@apollo/client";
import { SIGNIN } from "../apollo-client/mutations";
import { useNavigate } from "react-router-dom";
import { User, UserConnected } from "../types/User.types";
import { publicClient } from "../apollo-client/apolloClient";
import { useStateValue } from "../context/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";
import { MyJwtPayload, UseAuthReturn } from "../types/Auth.types";

export default function useAuth(): UseAuthReturn {
  const { state, setUser } = useStateValue();
  const { user } = state;
  const navigate = useNavigate();

  const [signIn] = useMutation(SIGNIN, {
    client: publicClient,
  });

  const signin = async (
    user: User,
    showInvalidCredentialsError: () => void,
    showServerError: () => void
  ) => {
    try {
      const { username, password } = user;
      const response = await signIn({
        variables: { username: username, password: password },
      });

      if (response.data.signIn.code === 200) {
        const userData: UserConnected = {
          id: (jwtDecode(response.data.signIn.token) as MyJwtPayload).id,
          token: response.data.signIn.token,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        navigate("/");
      } else if (response.data.signIn.code === 403) {
        showInvalidCredentialsError();
      }
    } catch (error) {
      showServerError();
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return {
    user,
    signin,
    logout,
  };
}
