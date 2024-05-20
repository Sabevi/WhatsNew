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
    
    type Article {
        id: ID!
        title: String!
        description: String!
    }
    
    type Comment {
        id: ID!
        username: String!
        content: String!
    }
    
    type ArticleDto {
        id: ID!
        title: String!
        description: String!
        nbComments: Int!
        nbLikes: Int!
    }
    
    
    type Mutation {
        createUser(username: String!, password: String!): CreateUserResponse!
        signIn(username: String!, password: String!): SignInResponse!
        createArticle(token: String!, title: String!, description: String!): CreateArticleResponse!
        updateArticle(token: String!, articleId: ID!, title: String!, description: String!): UpdateArticleResponse!
        deleteUser(token: String!, userId: ID!): deleteUserResponse!
        getArticles(token: String!): getArticlesResponse!
        getMyArticles(token: String!): getMyArticlesResponse!
        incrementOrDecrementLikes(token: String!, articleId: ID!): incrementOrDecrementLikeResponse!
        deleteArticle(token: String!, articleId: ID!): deleteArticleResponse!
        addComment(token: String!, articleId: ID!, userId: ID!, content: String!): addCommentResponse!
        deleteComment(token: String!, commentId: ID!, userId: ID!, articleId: ID!): deleteCommentResponse!
    }
    
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
        like: Boolean
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
    
`;