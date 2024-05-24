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
        getArticles(page: Int, mostLiked: Boolean): getArticlesResponse!
        getMyArticles: getMyArticlesResponse!
        getArticle(articleId: ID!): getArticleResponse!
        incrementOrDecrementLikes(articleId: ID!): incrementOrDecrementLikeResponse!
        deleteArticle(articleId: ID!): deleteArticleResponse!
        addComment(articleId: ID!, userId: ID!, content: String!): addCommentResponse!
        deleteComment(commentId: ID!, userId: ID!, articleId: ID!): deleteCommentResponse!
    }
    
    #########################
    ###### Entity Types #####
    #########################
    
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
        title: String!
        description: String!
        nbComments: Int!
        likes: [Like!]!
    }
    
    type ArticleDtoBis {
        id: ID!
        title: String!
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
    
    type getArticleResponse {
        code: Int!
        success: Boolean!
        message: String!
        articleDto: ArticleDtoBis
    }
`;