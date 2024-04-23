import {createUser} from "./mutation/user/create-user.js";
import {Resolvers} from "./types";
import {signIn} from "./mutation/user/signin.js";




export const resolvers: Resolvers = {
    Mutation: {
        createUser,
        signIn,
    }
};
