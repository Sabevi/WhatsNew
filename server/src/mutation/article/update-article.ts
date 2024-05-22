import { MutationResolvers } from "../../types.js";
import { getUser } from "../../module/auth.js";

export const updateArticle: MutationResolvers["updateArticle"] = async (
  _,
  { token, articleId, title, description },
  { dataSources }
) => {
  // Check if token :
  const user = getUser(token);

  if (!user) {
    return {
      code: 403,
      message: "Not authorized",
      success: false,
      article: null,
    };
  }

  try {
    // Update the article
    const updatedArticle = await dataSources.db.article.update({
      where: {
        id: articleId,
      },
      data: {
        title,
        description,
        userId: user.id,
      },
    });

    return {
      code: 201,
      message: "Article updated",
      success: true,
      article: updatedArticle,
    };
  } catch (e) {
    return {
      code: 403,
      message: "Article not updated",
      success: false,
      article: null,
    };
  }
};
