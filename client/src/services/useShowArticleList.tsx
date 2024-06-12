import { GET_ARTICLES } from "../apollo-client/queries.ts";
import { privateClient } from "../apollo-client/apolloClient.ts";
import { useEffect, useState } from "react";

const useShowArticleList = (
  page: number,
  mostLiked: boolean,
  userId: string
) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    articlesDto: [],
    pagination: {
      page: 0,
      total: 0,
    },
  });

  useEffect(() => {
    const getArticleList = async () => {
      try {
        const { data: response } = await privateClient.query({
          query: GET_ARTICLES,
          variables: { page: page, mostLiked: mostLiked, userId: userId },
        });
        if (response.getArticles.code === 200) {
          setData({
            articlesDto: response.getArticles.articlesDto,
            pagination: response.getArticles.pagination,
          });
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getArticleList();
  }, [page, mostLiked, userId]);
  return {
    data,
    loading,
  };
};

export default useShowArticleList;
