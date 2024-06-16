import { useMutation } from "@apollo/client";
import { DELETE_ARTICLE } from "../apollo-client/mutations.ts";
import { privateClient } from "../apollo-client/apolloClient.ts";
import { useToast } from "@chakra-ui/react";

const useDeleteArticle = () => {
  const [articleDeletion] = useMutation(DELETE_ARTICLE, {
    client: privateClient,
  });
  const toast = useToast();

  const deleteArticle = async (data: { articleId: string }) => {
    const { articleId } = data;
    try {
      const response = await articleDeletion({
        variables: { articleId },
      });
      switch (response.data.deleteArticle.code) {
        case 200:
          toast({
            title: "Article deleted.",
            description: "The article has been successfully deleted.",
            status: "success",
            duration: 10000,
            isClosable: true,
          });
          break;
        case 404:
          toast({
            title: "Article not found.",
            description: "Oops! An error occurred while deleting the article.",
            status: "error",
            duration: 10000,
            isClosable: true,
          });
          break;
      }
    } catch (error) {
      toast({
        title: "Article not deleted.",
        description: "Oops! An error occurred while deleting the article.",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
  };
  return { deleteArticle };
};

export default useDeleteArticle;
