import { createUser } from "./mutation/user/create-user.js";
import { Resolvers } from "./types.js";
import { signIn } from "./mutation/user/signin.js";
import { deleteUser } from "./mutation/user/delete-user.js";
import { createArticle } from "./mutation/article/create-article.js";
import { updateArticle } from "./mutation/article/update-article.js";
import { incrementOrDecrementLikes } from "./mutation/article/like/increment-or-decrement-like.js";
import { deleteArticle } from "./mutation/article/delete-article.js";
import { addComment } from "./mutation/article/comment/add-comment.js";
import { deleteComment } from "./mutation/article/comment/delete-comment.js";
import { getArticles } from "./queries/get-articles.js";
import { getArticle } from "./queries/get-article.js";

export const resolvers: Resolvers = {
  Mutation: {
    createUser,
    signIn,
    deleteUser,
    createArticle,
    updateArticle,
    incrementOrDecrementLikes,
    deleteArticle,
    addComment,
    deleteComment,
  },
  Query: {
    getArticles,
    getArticle,
  },
};
