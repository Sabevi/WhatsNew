import {MutationResolvers} from "../../types.js";
import {getUser} from "../../module/auth.js";

export const createArticle: MutationResolvers['createArticle'] = async (_, { title, description}, {dataSources, token}) => {
    // Check if token :
    const actualToken = token.split(' ')[1];

    const user = getUser(actualToken);
    console.log("token  :", actualToken)
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