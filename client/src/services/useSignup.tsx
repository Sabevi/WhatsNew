import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../apollo-client/mutations.ts";
import { User } from "../types/types.tsx";
import { publicClient } from "../apollo-client/apolloClient.ts";

const useSignUp = () => {
  const navigate = useNavigate();

  const [createUser] = useMutation(CREATE_USER, {
    client: publicClient,
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
      switch (response.data.createUser.code) {
        case 201:
          navigate("/signin");
          break;
        case 409:
          showExistingAccountError();
          break;
        case 403:
          showGenericSubmitError();
          break;
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
