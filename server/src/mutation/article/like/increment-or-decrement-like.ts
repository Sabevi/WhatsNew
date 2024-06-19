import { MutationResolvers } from "../../../types.js";
import { getUser } from "../../../module/auth.js";

export const incrementOrDecrementLikes: MutationResolvers["incrementOrDecrementLikes"] =
  async (_, { articleId }, { dataSources, token }) => {
    // Check token :
    const actualToken = token.split(" ")[1];

    const user = getUser(actualToken);

    if (!user) {
      return {
        code: 403,
        message: "Not authorized",
        success: false,
      };
    }

    try {
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
        };
      }

      // check if user already liked the article
      const like = await dataSources.db.like.findFirst({
        where: {
          articleId,
          userId: user.id,
        },
      });

      if (like) {
        // unlike
        await dataSources.db.like.delete({
          where: {
            id: like.id,
          },
        });
        const likes = await dataSources.db.like.findMany({
          where: {
            articleId,
          },
        });
        console.log("likes when unliked", likes);
        return {
          code: 200,
          message: "Like removed",
          success: true,
          isLiked: false,
          likes: likes,
        };
      } else {
        // like
        await dataSources.db.like.create({
          data: {
            articleId,
            userId: user.id,
          },
        });

        const likes = await dataSources.db.like.findMany({
          where: {
            articleId,
          },
        });
        console.log("likes when liked", likes);
        return {
          code: 200,
          message: "Like added",
          success: true,
          isLiked: true,
          likes: likes,
        };
      }
    } catch (e) {
      return {
        code: 500,
        message: "Internal server error",
        success: false,
      };
    }
  };
