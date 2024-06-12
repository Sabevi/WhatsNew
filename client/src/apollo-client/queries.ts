import { gql } from '@apollo/client';

export const GET_ARTICLE_BY_ID = gql`
query Query($articleId: ID!) {
  getArticle(articleId: $articleId) {
    articleDto {
      comments {
        articleId
        content
        id
        publishedAt
        username
      }
      description
      id
      likes {
        articleId
        id
        userId
      }
      publishedAt
      title
      username
    }
  }
}
`;

export const GET_ARTICLES = gql`
query GetArticles($page: Int, $mostLiked: Boolean, $userId: String) {
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
      userId
      username
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