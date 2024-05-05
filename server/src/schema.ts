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
        deleteUser(token: String!, userId: ID!): deleteUserResponse!
        getArticles(token: String!): getArticlesResponse!
        incrementOrDecrementLikes(token: String!, articleId: ID!): incrementOrDecrementLikeResponse!
        deleteArticle(token: String!, articleId: ID!): deleteArticleResponse!
        addOrDeleteComment(token: String!, articleId: ID!,commentId: ID!, content: String): addOrDeleteCommentResponse!
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
    
    type getArticlesResponse {
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

    type addOrDeleteCommentResponse {
        code: Int!
        success: Boolean!
        message: String!
        comment: Comment
    }

    type deleteUserResponse {
        code: Int!
        success: Boolean!
        message: String!
        userId: ID
    }
    
`;