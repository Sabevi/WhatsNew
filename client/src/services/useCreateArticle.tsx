import { useMutation } from "@apollo/client";
import { CREATE_ARTICLE } from "../apollo-client/mutations.ts";
import { privateClient } from "../apollo-client/apolloClient.ts";
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { GET_ARTICLES } from "../apollo-client/queries.ts";

const useCreateArticle = () => {
  const [articleCreate] = useMutation(CREATE_ARTICLE, {
    client: privateClient,
    refetchQueries: [{
      query: GET_ARTICLES,
      variables: { page: 1, mostLiked: false, userId: "" },
    }],
  });
  const toast = useToast();
  const navigate = useNavigate();

  const createArticle = async (
    data: { title: string; description: string },
  ) => {
    try {
      const { title, description } = data;
      const response = await articleCreate({
        variables: { title, description },
      });
      navigate(`/article/${response.data.createArticle.article.id}`);
      switch (response.data.createArticle.code) {
        case 201:
          toast({
            title: "Article created.",
            description: "Your article has been successfully created.",
            status: "success",
            duration: 10000,
            isClosable: true,
          });
          break;
        case 403:
          toast({
            title: "Article not created.",
            description: "Oops! An error occurred while creating the article.",
            status: "error",
            duration: 10000,
            isClosable: true,
          });
          break;
      }
    } catch (error) {
      toast({
        title: "Article not created.",
        description: "Oops! An error occurred while creating the article.",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
  };
  return {
    createArticle,
  };
};

export default useCreateArticle;