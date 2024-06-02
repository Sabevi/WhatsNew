import { Box, Container, Flex, Heading, Spinner } from "@chakra-ui/react";
import { blue_color } from "../assets/customColors";
import ArticleDetailsComponent from "../components/Article/Content/ArticleDetails.tsx";
import CommentList from "../components/Comment/CommentList";
import CreateComment from "../components/Comment/CreateComment";
import { useNavigate, useParams } from "react-router-dom";
import useShowArticleDetails from "../services/useShowArticleDetails.ts";
import { ArticleModel } from "../types/article.ts";

export default function ShowArticlePage() {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useShowArticleDetails(id as string);
  const navigate = useNavigate();

  if (id === undefined || id === null) navigate("/");

  return (
    <Box as="main">
      <Container maxW="7xl" p="12">
        {loading ? (
          <Flex justify="center" align="center" height="100vh">
            <Spinner
              thickness="4px"
              speed="0.45s"
              emptyColor="gray.200"
              color="blue.500"
              boxSize="100px"
            />
          </Flex>
        ) : (
          <>
            <Heading textAlign="center" as="h1" color={blue_color}>
              What's New - Article{" "}
            </Heading>
            <ArticleDetailsComponent articleDetails={data as ArticleModel} />
            <CreateComment articleId={(data as ArticleModel).id} />
            <CommentList comments={(data as ArticleModel).comments} />
          </>
        )}
      </Container>
    </Box>
  );
}
