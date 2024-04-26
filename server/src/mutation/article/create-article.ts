import {MutationResolvers} from "../../types";
import {getUser} from "../../module/auth.js";

export const createArticle: MutationResolvers['createArticle'] = async (_, {token, title, description}, {dataSources}) => {
    // Check if token :
    const user =  getUser(token);

    if (!user) {
        return {
            code: 403,
            message: "Not authorized",
            success: false,
            article: null
        }
    }

    try {
        // Create the article
        const createdArticle = await dataSources.db.article.create({
            data: {
                title,
                description,
                userId: user.id
            }
        })

        return {
            code: 201,
            message: "Article created",
            success: true,
            article: createdArticle
            }
    } catch (e) {
        return {
            code: 403,
            message: 'Article not created',
            success: false,
            article: null
        }
    }
}