import { useNavigate } from "react-router-dom";
import { User } from "../types/ComponentTypes";
import {ApolloClient, InMemoryCache, useMutation} from '@apollo/client';
import {CREATE_USER} from "../mutations.ts";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const useSignUp = () => {
  const navigate = useNavigate();

  const [createUser] = useMutation(CREATE_USER, {
    client: client,
    onCompleted: (data) => {
      console.log(data.createUser);
      navigate("/signin");
    },
    onError: (error) => {
      console.log("test 1 error" + error);
    },

  });

  const signup = async (user: User) => {
    console.log("User:", user);

    try {
      const response = await createUser({ variables: { username: user.username, password: user.password } });
      console.log("Response:", response.data.createUser.code);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    signup,
  };
};

export default useSignUp;