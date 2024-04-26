import {ArticleDto, MutationResolvers} from "../../types";


export const getArticles: MutationResolvers["getArticles"] = async (_, __, {dataSources}) => {
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