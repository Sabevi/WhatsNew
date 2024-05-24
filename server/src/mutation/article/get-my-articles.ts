import { ArticleDto, MutationResolvers } from "../../types";
import { getUser } from "../../module/auth.js";

export const getMyArticles: MutationResolvers["getMyArticles"] = async (
  _,
  __,
  { dataSources, token }
) => {
  // check auth
  const actualToken = token.split(' ')[1];

  const user = getUser(actualToken);

  if (!user) {
    return {
      code: 403,
      message: "Not Authorized",
      success: false,
      articlesDto: null,
    };
  }

  const articles = await dataSources.db.article.findMany({
    where: {
      userId: user.id,
    },
  });

  let articlesDto: ArticleDto[] = [];
  for (const article of articles) {
    const nbComments = await dataSources.db.comment.count({
      where: {
        articleId: article.id,
      },
    });
    const likes = await dataSources.db.like.findMany({
        where: {
            articleId: article.id,
        },
        });
    articlesDto.push({
      id: article.id,
      title: article.title,
      description: article.description,
      nbComments: nbComments ?? 0,
      likes: likes == null ? [] : likes,
    });
  }
  return {
    code: 200,
    message: "My Articles found",
    success: true,
    articlesDto: articlesDto,
  };
};
