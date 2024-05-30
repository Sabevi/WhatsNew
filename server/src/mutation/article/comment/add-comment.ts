import { getUser } from "../../../module/auth.js";
import { MutationResolvers, Comment } from "../../../types";

export const addComment: MutationResolvers['addComment'] = async (_, {userId, articleId, content}, {dataSources, token}) => {
    const actualToken = token.split(' ')[1];

    const user = getUser(actualToken);

    if (!user) {
        return {
            code: 402,
            message: "Not authorized",
            success: false
        }
    }
    try {
        const article = dataSources.db.article.findUnique({
            where: {
                id: articleId
            }
        });

        if (!article) {
            return {
                code: 403,
                message: "article not found",
                success: false
            }
        }

        const createdComment = dataSources.db.comment.create({
            data: {
                articleId,
                userId,
                content: content || "new comment",
            }
        });

        const comment: Comment = {
            id: (await createdComment).id,
            content: (await createdComment).content,
            username: user.username,
            publishedAt: (await createdComment).publishedAt.toISOString()
        }

        return {
            code: 200,
            message: "comment added seccessfully",
            success: true,
            comment: comment
        }

    } catch (e) {
        return {
            code: 500,
            message: "error server",
            success: false
        }
    }
}