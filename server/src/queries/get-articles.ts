import { getUser } from "../module/auth.js";
import { QueryResolvers, Article, ArticleDto } from "../types";

export const getArticles: QueryResolvers["getArticles"] = async (
    _,
    { page, mostLiked, userId },
    { dataSources, token }
) => {
    const actualToken = token.split(' ')[1];
    
    const user = getUser(actualToken);

    if (!user) {
        return {
            code: 403,
            message: "not authorized",
            success: false,
            articlesDto: null,
            pagination: null,
        }
    }

    let articles: Article[];

    if( userId && userId === user.id ) {
        let articlesList = await dataSources.db.article.findMany({
            where: {
                userId: userId,
            },
            orderBy: {
                publishedAt: "desc",
            }
        });
        articles = articlesList.map((article) => ({
            ...article,
            publishedAt: article.publishedAt.toISOString(),
        }))
    }else {
        let articlesList = await dataSources.db.article.findMany({
            orderBy: {
                publishedAt: "desc",
            },
        });
        articles = articlesList.map((article) => ({
            ...article,
            publishedAt: article.publishedAt.toISOString(),
        }))
    }

    let articlesDto: ArticleDto[] = [];

    for (const article of articles) {
        const nbComments = await dataSources.db.comment.count({
            where: {
                articleId: article.id,
            },
        });

        const likes = await dataSources.db.like.findMany({
            where: {
                articleId: article.id,
            },
        });

        const user = await dataSources.db.user.findUnique({
            where: {
                id: article.userId,
            },
        });

        articlesDto.push({
            id: article.id,
            username: user?.username ?? "unknown",
            userId: article.userId,
            title: article.title,
            description: article.description,
            publishedAt: article.publishedAt,
            nbComments: nbComments ?? 0,
            likes: likes == null ? [] : likes,
        })
    }

    if (mostLiked) {
        articlesDto = articlesDto.sort((a, b) => {
           return b.likes.length - a.likes.length
        })
    }

    const articlesDtoLength = articlesDto.length;

    let articlesPaginated: ArticleDto[] = [];

    let actualPage = page ? page : 1;
    const start = (actualPage - 1) * 3;
    const end = start + 3;

    if (articlesDtoLength > 3) {
        let articlesPaginated = articlesDto.slice(start, end);

        if (articlesPaginated.length === 0) {
            return {
                code: 404,
                message: "no articles found",
                success: false,
                articlesDto: null,
                pagination: null,
            };
        }
    } else {
        articlesPaginated = articlesDto;
    }

    return {
        code: 200,
        message: "Articles found",
        success: true,
        articlesDto: articlesPaginated,
        pagination: {
            page: actualPage,
            total: Math.ceil(articlesDtoLength / 3),
        },
    };
    
};