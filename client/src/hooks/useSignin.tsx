import { ApolloClient, InMemoryCache, useMutation } from "@apollo/client";
import { SIGNIN } from "../mutations";
import { useNavigate } from "react-router-dom";
import { User } from "../types/ComponentTypes";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const useSignIn = () => {
  const navigate = useNavigate();

  // Define the signIn mutation
  const [signIn] = useMutation(SIGNIN, {
    client: client,
  });

  const signin = async (
    user: User,
    showInvalidCredentialsError: () => void,
    showServerError: () => void
  ) => {
    try {
      const { username, password } = user;
      // call the signIn mutation
      const response = await signIn({
        variables: { username: username, password: password },
      });
      console.log(response);

      if (response.data.signIn.code === 200) {
        navigate("/");
      } else if (response.data.signIn.code === 403) {
        showInvalidCredentialsError();
      }
    } catch (error) {
      showServerError();
    }
  };

  return {
    signin,
  };
};

export default useSignIn;
