import { useMutation } from "@apollo/client";
import { UPDATE_ARTICLE } from "../apollo-client/mutations.ts";
import { privateClient } from "../apollo-client/apolloClient.ts";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const useUpdateArticle = () => {
  const [articleUpdate] = useMutation(UPDATE_ARTICLE, {
    client: privateClient,
  });
  const toast = useToast();
  const navigate = useNavigate();

  const updateArticle = async (
    articleId: string,
    data: { title: string; description: string }
  ) => {
    try {
      const { title, description } = data;
      const response = await articleUpdate({
        variables: { articleId, title, description },
      });
      switch (response.data.updateArticle.code) {
        case 201:
          toast({
            title: "Article updated.",
            description: "Your article has been successfully updated.",
            status: "success",
            duration: 10000,
            isClosable: true,
          });
          navigate(`/article/${response.data.updateArticle.article.id}`);
          break;
        case 403:
          toast({
            title: "Article not updated.",
            description: "Oops! An error occurred while updating the article.",
            status: "error",
            duration: 10000,
            isClosable: true,
          });
          break;
      }
    } catch (error) {
      toast({
        title: "Article not updated.",
        description: "Oops! An error occurred while updating the article.",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
  };
  return {
    updateArticle,
  };
};

export default useUpdateArticle;
