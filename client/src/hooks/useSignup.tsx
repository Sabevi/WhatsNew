import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../mutations.ts";
import { User } from "../types/ComponentTypes.tsx";
import { apolloClientApi } from "../config/apolloClient.ts";

const useSignUp = () => {
  const navigate = useNavigate();

  const [createUser] = useMutation(CREATE_USER, {
    client: apolloClientApi,
  });

  const signup = async (
    user: User,
    showGenericSubmitError: () => void,
    showExistingAccountError: () => void,
    showServerError: () => void
  ) => {
    try {
      const { username, password } = user;
      const response = await createUser({
        variables: { username: username, password: password },
      });

      if (response.data.createUser.code === 201) {
        navigate("/signin");
      } else if (response.data.createUser.code === 409) {
        showExistingAccountError();
      } else if (response.data.createUser.code === 403) {
        showGenericSubmitError();
      }
    } catch (error) {
      showServerError();
    }
  };

  return {
    signup,
  };
};

export default useSignUp;
