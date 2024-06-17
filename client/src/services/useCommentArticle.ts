import { useMutation } from "@apollo/client";
import { COMMENT_ARTICLE } from "../apollo-client/mutations.ts";
import { privateClient } from "../apollo-client/apolloClient.ts";
import { useToast } from "@chakra-ui/react";

const useCommentArticle = () => {
  const [commentArtcile] = useMutation(COMMENT_ARTICLE, {
    client: privateClient,
  });
  const toast = useToast();

  const commentArticle = async (data: {
    articleId: string;
    content: string;
  }) => {
    try {
      const { articleId, content } = data;
      const response = await commentArtcile({
        variables: { articleId, content },
      });
      switch (response.data.addComment.code) {
        case 201:
          toast({
            title: "Comment created.",
            description: "Your comment has been successfully created.",
            status: "success",
            duration: 10000,
            isClosable: true,
          });
          window.location.reload();
          break;
        case 404:
          toast({
            title: "Article not found.",
            description:
              "The article you are trying to comment on does not exist.",
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
    commentArticle,
  };
};

export default useCommentArticle;
