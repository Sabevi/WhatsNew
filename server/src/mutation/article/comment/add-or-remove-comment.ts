import { getUser } from "../../../module/auth";
import { MutationResolvers } from "../../../types";

export const addOrDeleteComment: MutationResolvers['addOrDeleteComment'] = async (_, {token, articleId, commentId, content}, {dataSources}) => {
    const user = getUser(token);
    if (!user) {
        return{
            code: 402,
            message: "Not authorized",
            success: false
        }
    }

    try {
        const article = await dataSources.db.article.findUnique({
            where: {
                id: articleId
            }
        });

        if (!article) {
            return {
                code:403,
                message: "Article not found",
                success: false
            }
        }

        const comment = await dataSources.db.comment.findFirst({
            where: {
                id: commentId,
                userId: user.id
            }
        })

        if (comment) {
            await dataSources.db.comment.delete({
                where: {
                    id: comment.id
                }
            })

            return {
                code: 200,
                message: "comment deleted",
                success: true
            }
        } else {
            await dataSources.db.comment.create({
                data: {
                    articleId,
                    userId: user.id,
                    content: content || "new comment"
                }
            })

            return {
                code: 200,
                message: "Comment added",
                success: true
            }
        }
    } catch(e) {
        return {
            code: 500,
            message: "Server error",
            success: false
        }
    }
}