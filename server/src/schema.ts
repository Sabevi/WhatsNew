import gql from "graphql-tag";

export const typeDefs = gql`
    type User {
        id: ID!
        username: String!
    }
    
    type Query {
        hello: String!
        users: [User!]!
    }
    
    type Mutation {
        createUser(username: String!, password: String!): CreateUserResponse!
        signIn(username: String!, password: String!): SignInResponse!
        createArticle(title: String!, description: String!): CreateArticleResponse!
        updateArticle(articleId: ID!, title: String!, description: String!): UpdateArticleResponse!
        deleteUser(userId: ID!): deleteUserResponse!
        getArticles(page: Int, mostLiked: Boolean, userId: String): getArticlesResponse!
        getArticle(articleId: ID!): getArticleResponse!
        incrementOrDecrementLikes(articleId: ID!): incrementOrDecrementLikeResponse!
        deleteArticle(articleId: ID!): deleteArticleResponse!
        addComment(articleId: ID!, content: String!): addCommentResponse!
        deleteComment(commentId: ID!, userId: ID!, articleId: ID!): deleteCommentResponse!
    }
    
    #########################
    ###### Entity Types #####
    #########################
    
    type Article {
        id: ID!
        userId: ID!
        title: String!
        description: String!
        publishedAt: String!
    }
    
    type Comment {
        id: ID!
        articleId: ID!
        username: String!
        content: String!
        publishedAt: String!
    }
    
    type Like {
        id: ID!
        userId: ID!
        articleId: ID!
    }
    
    type Pagination {
        total: Int!
        page: Int!
    }
   
    #########################
    ###### DTO Types ########
    #########################
    
    type ArticleDto {
        id: ID!
        username: String!
        userId: ID!
        title: String!
        description: String!
        publishedAt: String!
        nbComments: Int!
        likes: [Like!]!
    }
    
    type ArticleDtoBis {
        id: ID!
        username: String!
        title: String!
        publishedAt: String!
        description: String!
        comments: [Comment!]!
        likes: [Like!]!
    }
    
    #########################
    #### Response Types #####
    #########################
    
    type CreateUserResponse {
        code: Int!
        success: Boolean!
        message: String!
        user: User
    }
    
    
    type SignInResponse {
        code: Int!
        success: Boolean!
        message: String!
        token: String
    }
    
    type CreateArticleResponse {
        code: Int!
        success: Boolean!
        message: String!
        article: Article
    }

    type UpdateArticleResponse {
        code: Int!
        success: Boolean!
        message: String!
        article: Article
    }
    
    type getArticlesResponse {
        code: Int!
        success: Boolean!
        message: String!
        articlesDto: [ArticleDto]
        pagination: Pagination
    }

    type getMyArticlesResponse {
        code: Int!
        success: Boolean!
        message: String!
        articlesDto: [ArticleDto]
    }
    
    type incrementOrDecrementLikeResponse {
        code: Int!
        success: Boolean!
        message: String!
        isLiked: Boolean
        likes: [Like]
    }
    
    type deleteArticleResponse {
        code: Int!
        success: Boolean!
        message: String!
        articleId: ID
    }

    type addCommentResponse {
        code: Int!
        success: Boolean!
        message: String!
        comment: Comment
    }

    type deleteCommentResponse {
        code: Int!
        success: Boolean!
        message: String!
        commentId: ID
    }

    type deleteUserResponse {
        code: Int!
        success: Boolean!
        message: String!
        userId: ID
    }
    
    type getArticleResponse {
        code: Int!
        success: Boolean!
        message: String!
        articleDto: ArticleDtoBis
    }
`;