import {ArticleDtoBis, Comment, MutationResolvers} from "../../types";
import {getUser} from "../../module/auth.js";

export const getArticle: MutationResolvers["getArticle"] = async (
    _,
    { articleId},
    { dataSources, token }
) => {
    // Check if token :
    const actualToken = token.split(' ')[1];

    const user = getUser(actualToken);
    console.log("actualal token ",actualToken)
    if (!user) {
        return {
            code: 403,
            message: "Not authorized",
            success: false,
            articleDto: null,
        };
    }

    const article = await dataSources.db.article.findUnique({
        where: {
            id: articleId
        }
    });


    if(!article) {
        return {
            code: 404,
            message: "Article not found",
            success: false,
            articleDto: null
        }
    }


    const comments = await dataSources.db.comment.findMany({where : {articleId : articleId}});
    const likes = await dataSources.db.like.findMany({
        where: {
            articleId: article.id,
        },
    });
    const commentsDTO: Comment[] = []

    for (const comment of comments) {

        const user = await dataSources.db.user.findUnique({where: {id: comment.userId}})
        const username = user?.username ?? "unknown"
        const commentToAdd: Comment = {
            id: comment.id,
            username: username,
            content: comment.content,
            publishedAt: comment.publishedAt.toISOString()
        }

        commentsDTO.push(commentToAdd);
    }
    
    const articleDtoBis: ArticleDtoBis = {
        id: article!.id,
        username: user.username,
        publishedAt: article!.publishedAt.toISOString(),
        title: article!.title,
        description: article!.description,
        likes: likes == null ? [] : likes,
        comments: commentsDTO
    }

    return {
        code: 200,
        message: "Article found",
        success: true,
        articleDto: articleDtoBis
    }
}