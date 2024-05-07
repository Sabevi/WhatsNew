import { useNavigate } from "react-router-dom";
import { User } from "../types/ComponentTypes";
import { useMutation } from '@apollo/client';
import {CREATE_USER} from "../mutations.ts";


const useSignUp = () => {
  const navigate = useNavigate();
  // Define the createUser mutation
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      console.log(data.createUser);
        if(data.createUser.code === 201) {
          navigate("/signin");
        } else {
            console.log("Error: " + data.createUser.message);
        }
    },
    onError: (error) => {
      console.log("error" + error);
    },

  });

  const signup = async (user: User) => {
    console.log("User:", user);

    try {
      // call the createUser mutation
      await createUser({ variables: { username: user.username, password: user.password } });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    signup,
  };
};

export default useSignUp;