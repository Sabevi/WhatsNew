import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      code
      success
      message
      user {
        id
        username
      }
    }
  }
`;

export const SIGNIN = gql`
  mutation SignIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      code
      message
      success
      token
    }
  }
`;

export const CREATE_ARTICLE = gql`
  mutation CreateArticle($title: String!, $description: String!) {
    createArticle(title: $title, description: $description) {
      article {
        description
        id
        title
      }
      code
      message
      success
    }
  }
`;

export const UPDATE_ARTICLE = gql`
  mutation CreateArticle(
    $articleId: ID!
    $title: String!
    $description: String!
  ) {
    updateArticle(
      articleId: $articleId
      title: $title
      description: $description
    ) {
      article {
        description
        id
        publishedAt
        title
        userId
      }
      code
      message
      success
    }
  }
`;

export const COMMENT_ARTICLE = gql`
  mutation AddComment($articleId: ID!, $content: String!) {
    addComment(articleId: $articleId, content: $content) {
      code
      comment {
        username
        id
        content
      }
      message
      success
    }
  }
`;

export const GET_ARTICLE_BY_ID = gql`
  mutation GetArticle($articleId: ID!) {
    getArticle(articleId: $articleId) {
      articleDto {
        title
        username
        id
        publishedAt
        likes {
          articleId
          id
          userId
        }
        comments {
          id
          username
          content
          publishedAt
        }
        description
      }
      code
      message
      success
    }
  }
`;

export const GET_ARTICLES = gql`
  mutation GetArticles($page: Int, $mostLiked: Boolean, $userId: String) {
    getArticles(page: $page, mostLiked: $mostLiked, userId: $userId) {
      articlesDto {
        description
        id
        likes {
          articleId
          id
          userId
        }
        nbComments
        publishedAt
        title
        username
        userId
      }
      code
      message
      pagination {
        page
        total
      }
      success
    }
  }
`;

export const DELETE_ARTICLE = gql`
  mutation DeleteArticle($articleId: ID!) {
    deleteArticle(articleId: $articleId) {
      articleId
      code
      message
      success
    }
  }
`;

export const LIKE_OR_UNLIKE_ARTICLE = gql`
mutation IncrementOrDecrementLikes($articleId: ID!) {
  incrementOrDecrementLikes(articleId: $articleId) {
    code
    likes {
      articleId
      userId
    },
    isLiked
    message
    success
  }
}
`;
