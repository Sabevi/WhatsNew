import {ArticleDto, MutationResolvers} from "../../types";
import {getUser} from "../../module/auth.js";


export const getArticles: MutationResolvers["getArticles"] = async (_, __, {dataSources, token}) => {
    // check auth
    const actualToken = token.split(' ')[1];

    const user = getUser(actualToken);

    if(!user) {
        return {
            code: 403,
            message: "Not Authorized",
            success: false,
            articlesDto: null
        }
    }

    const articles = await dataSources.db.article.findMany();

    let articlesDto: ArticleDto[] = [];
    for (const article of articles) {
        const nbComments = await dataSources.db.comment.count({
            where: {
                articleId: article.id
            }
        });
        const nbLikes = await dataSources.db.like.count({
            where: {
                articleId: article.id
            }
        });
        articlesDto.push({
            id: article.id,
            title: article.title,
            description: article.description,
            nbComments: nbComments ?? 0,
            nbLikes: nbLikes ?? 0
        })
    }
    return {
        code: 200,
        message: "Articles found",
        success: true,
        articlesDto: articlesDto
    }
}