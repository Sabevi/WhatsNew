import { gql } from "@apollo/client";

export const GET_ARTICLE_BY_ID = gql`
query Query($articleId: ID!) {
  getArticle(articleId: $articleId) {
    articleDto {
      comments {
        content
        articleId
        id
        publishedAt
        username
      }
      description
      id
      likes {
        userId
        id
        articleId
      }
      publishedAt
      title
      username
    }
    code
    message
    success
  }
}
`;

export const GET_ARTICLES = gql`
query Query($page: Int, $mostLiked: Boolean, $userId: String) {
  getArticles(page: $page, mostLiked: $mostLiked, userId: $userId) {
    articlesDto {
      id
      description
      title
      userId
      username
      publishedAt
      likes {
        id
        articleId
        userId
      }
      nbComments
    }
    pagination {
      page
      total
    }
    code
    success
    message
  }
}
`;