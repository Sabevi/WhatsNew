import { ArticleDtoBis, QueryResolvers, Comment } from "../types";
import { getUser } from "../module/auth";

export const getArticle: QueryResolvers["getArticle"] = async (
    _,
    { articleId },
    { dataSources, token}
) => {
    const actualToken = token.split(' ')[1];

    const user = getUser(actualToken);
    if(!user) {
        return {
            code: 403,
            message: "Not authorized",
            success: false,
            articleDto: null,
        };
    };

    const article = await dataSources.db.article.findUnique({
        where: {
            id: articleId
        }
    });

    if (!article) {
        return {
            code: 404,
            message: "Article not found",
            success: false,
            articleDto:null,
        }
    }

    const comments= await dataSources.db.comment.findMany({
        where: {
            articleId: article.id
        }
    })

    const likes = await dataSources.db.like.findMany({
        where: {
            articleId: article.id
        }
    })

    //initialise un tableau de commentDTO pour stocker les commentaires formatés
    const commentsDto: Comment[] = [];

    //rechercher l'user qu'a posté chaque commantaireconst username = user?.username ?? "unknown"
    for (const comment of comments) {
        const user = await dataSources.db.user.findUnique({
            where: {
                id: comment.userId
            }
        });
        const username = user!.username;
        //l'objet qui stocke les informations du commentaire courant        
        const commentToAdd: Comment = {
            id: comment.id,
            username: username,
            articleId: comment.articleId,
            content: comment.content,
            publishedAt: comment.publishedAt.toString() //convertir la date de publication de commentaire en chaine de string
        };

        //ajouté le commentaire dans le tableau de commentaires commentsDto
        commentsDto.push(commentToAdd);
    }

    //l'objet pour stocker les informations de l'article
    const articleDtoBis: ArticleDtoBis = {
        id: article.id,
        username: user.username,
        publishedAt: article.publishedAt.toISOString(),
        title: article.title,
        description: article.description,
        likes: likes == null ? [] : likes,//retourner tableau vide si likes est null sinon retourner les tableau des likes
        comments: commentsDto
    }

    return {
        code: 200,
        message: "Article found",
        success: true,
        articleDto: articleDtoBis
    }

}