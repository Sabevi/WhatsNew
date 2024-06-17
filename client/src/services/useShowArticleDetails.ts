import { GET_ARTICLE_BY_ID } from "../apollo-client/queries.ts";
import { privateClient } from "../apollo-client/apolloClient.ts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArticleActionProps,
  ArticleModel,
  UseDeleteArticleReturn,
} from "../types/Article.types.ts";
import { ArticleDetails } from "../types/Article.types.ts";

const useShowArticleDetails = (
  id: ArticleActionProps
): UseDeleteArticleReturn => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ArticleDetails>({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const getArticle = async () => {
      try {
        const { data: response } = await privateClient.query({
          query: GET_ARTICLE_BY_ID,
          variables: { articleId: id },
        });
        if (response.getArticle.code === 200) {
          setData(response.getArticle.articleDto as ArticleModel);
        } else if (response.getArticle.code === 404) {
          navigate("/404");
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getArticle();
  }, []);
  return {
    data,
    loading,
  };
};

export default useShowArticleDetails;
