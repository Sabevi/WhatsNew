import {createUser} from "./mutation/user/create-user.js";
import {Resolvers} from "./types.js";
import {signIn} from "./mutation/user/signin.js";
import {deleteUser} from "./mutation/user/delete-user.js";
import {createArticle} from "./mutation/article/create-article.js";
import {getArticles} from "./mutation/article/get-articles.js";
import {incrementOrDecrementLikes} from "./mutation/article/like/increment-or-decrement-like.js";
import {deleteArticle} from "./mutation/article/delete-article.js";
import {addOrDeleteComment} from "./mutation/article/comment/add-or-remove-comment.js";



export const resolvers: Resolvers = {
    Mutation: {
        createUser,
        signIn,
        deleteUser,
        createArticle,
        getArticles,
        incrementOrDecrementLikes,
        deleteArticle,
        addOrDeleteComment,
    }
};
