export type ArticleDto = {
    id: string;
    title: string;
    description: string;
    nbComments: number;
    likes: Like[];
}

export type ArticleModel = {
    id: string;
    title: string;
    username: string;
    publishedAt: string;
    description: string;
    comments: CommentModel[];
    likes: Like[];
}

export type CommentModel = {
    id: string;
    username: string;
    content: string;
    publishedAt: string;
}

export type Like = {
    id: string;
    userId: string;
    articleId: string;
}

