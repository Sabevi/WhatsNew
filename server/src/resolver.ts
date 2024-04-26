import {createUser} from "./mutation/user/create-user.js";
import {Resolvers} from "./types";
import {signIn} from "./mutation/user/signin.js";
import {createArticle} from "./mutation/article/create-article.js";
import {getArticles} from "./mutation/article/get-articles.js";
import {incrementOrDecrementLikes} from "./mutation/article/like/increment-or-decrement-like.js";




export const resolvers: Resolvers = {
    Mutation: {
        createUser,
        signIn,
        createArticle,
        getArticles,
        incrementOrDecrementLikes,
    }
};
