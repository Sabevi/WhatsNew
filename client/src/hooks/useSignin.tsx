import { ApolloClient, InMemoryCache, useMutation } from "@apollo/client";
import { SIGNIN } from "../mutations";
import { useNavigate } from "react-router-dom";
import { User } from "../types/ComponentTypes";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    });

const useSignIn = () => {
    const navigate = useNavigate();
    // Define the signIn mutation
    const [signIn] = useMutation(SIGNIN, {
        client: client,
        onCompleted: (data) => {
            console.log(data.signIn);
            if(data.signIn.code === 200) {
                localStorage.setItem('token', data.signIn.token);
                navigate("/");
            } else {
                console.log("Error: " + data.signIn.message);
            }
        },
        onError: (error) => {
            console.log("error" + error);
        },
    });

    const signin = async (user: User) => {
        console.log("User:", user);

        try {
            // call the signIn mutation
            await signIn({ variables: { username: user.username, password: user.password } });
        } catch (error) {
            console.log(error);
        }
    };

    return {
        signin,
    };
}

export default useSignIn;