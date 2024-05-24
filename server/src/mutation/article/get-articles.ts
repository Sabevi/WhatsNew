import {ArticleDto, MutationResolvers} from "../../types";
import {getUser} from "../../module/auth.js";


export const getArticles: MutationResolvers["getArticles"] = async (
    _,
    {page, mostLiked},
    {dataSources, token}) => {
    // check auth
    const actualToken = token.split(' ')[1];

    const user = getUser(actualToken);

    if(!user) {
        return {
            code: 403,
            message: "Not Authorized",
            success: false,
            articlesDto: null,
            pagination: null
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
        const likes = await dataSources.db.like.findMany({
            where: {
                articleId: article.id,
            },
        });

        articlesDto.push({
            id: article.id,
            title: article.title,
            description: article.description,
            nbComments: nbComments ?? 0,
            likes: likes == null ? [] : likes,
        })
    }

    // Sort by likes
    if(mostLiked) {
        articlesDto = articlesDto.sort((a, b) => {
            return b.likes.length - a.likes.length;
        })
    }
    const articlesLength = articles.length;

    let articlesPaginated = [];

    // Pagination
    if(articlesLength >= 3) {
        if( page == null ) {
            for (let i = 0; i < 3; i++ ) {
                const article = articlesDto[i];
                articlesPaginated.push(article);
            }
        } else {
            const start = page * 3;
            const end = start + 3;
            for (let i = start; i<end; i++) {
                if(i >= articlesLength) {
                    break;
                }
                const article = articlesDto[i];
                articlesPaginated.push(article);
            }
        }

        if(articlesPaginated.length == 0) {
            return {
                code: 404,
                message: "No articles found",
                success: false,
                articlesDto: null,
                pagination: null
            }
        }
    }


    return {
        code: 200,
        message: "Articles found",
        success: true,
        articlesDto: articlesPaginated,
        pagination: {
            page: page ?? 0,
            total: Math.ceil(articlesLength / 3)
        }
    }
}