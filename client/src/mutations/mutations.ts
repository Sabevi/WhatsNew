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