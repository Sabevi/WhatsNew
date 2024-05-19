import { useNavigate } from "react-router-dom";
import { ApolloClient, InMemoryCache, useMutation } from "@apollo/client";
import { CREATE_USER } from "../mutations.ts";
import { User } from "../types/ComponentTypes.tsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const useSignUp = () => {
  const navigate = useNavigate();

  const [createUser] = useMutation(CREATE_USER, {
    client: client,
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
