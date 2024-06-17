import { getUser } from "../../../module/auth.js";
import { MutationResolvers } from "../../../types";

export const deleteComment: MutationResolvers["deleteComment"] = async (
  _,
  { commentId, userId, articleId },
  { dataSources, token }
) => {
  const actualToken = token.split(" ")[1];

  const user = getUser(actualToken);

  if (!user) {
    return {
      code: 402,
      message: "Not authorized",
      success: false,
    };
  }

  try {
    const comment = dataSources.db.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!comment) {
      return {
        code: 404,
        message: "comment not found",
        success: false,
      };
    }

    const article = dataSources.db.article.findUnique({
      where: {
        id: articleId,
      },
    });

    if (!article) {
      return {
        code: 403,
        message: "article not found",
        success: false,
      };
    }

    await dataSources.db.comment.delete({
      where: {
        id: commentId,
      },
    });

    return {
      code: 200,
      commentId: commentId,
      message: "comment deleted seccessfully",
      success: true,
    };
  } catch (e) {
    return {
      code: 500,
      message: "error server",
      success: false,
    };
  }
};
