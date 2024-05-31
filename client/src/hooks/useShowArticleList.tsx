import { GET_ARTICLES } from "../mutations/mutations.ts";
import { privateClient } from "../config/apolloClient.ts";
import { useEffect, useState } from "react";

const useShowArticleList = (page: number, mostLiked: boolean, userId: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  console.log("useShowArticleList called with: ", page, mostLiked, userId);

  useEffect(() => {
    const getArticleList = async () => {
      try {
        const { data: response } = await privateClient.mutate({
          mutation: GET_ARTICLES,
          variables: { page: page, mostLiked: mostLiked, userId: userId},
        });

        console.log("List of articles: ", response.getArticles);
        if (response.getArticles.code === 200) {
          setData(response.getArticles.articlesDto);
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
