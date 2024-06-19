import { MutationResolvers } from "../../types";
import { getUser } from "../../module/auth.js";

export const deleteArticle: MutationResolvers["deleteArticle"] = async (
  _,
  { articleId },
  { dataSources, token }
) => {
  //check auth
  const actualToken = token.split(" ")[1];

  const user = getUser(actualToken);

  if (!user) {
    return {
      code: 403,
      message: "Not Authorized",
      success: false,
      articleId: null,
    };
  }

  // check if article exists
  const article = await dataSources.db.article.findUnique({
    where: {
      id: articleId,
    },
  });

  if (!article) {
    return {
      code: 404,
      message: "Article not found",
      success: false,
      articleId: null,
    };
  }

  // delete likes :
  await dataSources.db.like.deleteMany({
    where: {
      articleId: articleId,
    },
  });

  // delete comments :
  await dataSources.db.comment.deleteMany({
    where: {
      articleId: articleId,
    },
  });

  // delete article :
  await dataSources.db.article.delete({
    where: {
      id: articleId,
    },
  });

  return {
    code: 200,
    message: "Article deleted",
    success: true,
    articleId: articleId,
  };
};
