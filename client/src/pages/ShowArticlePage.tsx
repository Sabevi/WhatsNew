import {Box, Container, Flex, Heading, Spinner} from "@chakra-ui/react";
import { blue_color } from "../assets/customColors";
import Article from "../components/Article/Content/Article";
import CommentList from "../components/Comment/CommentList";
import CreateComment from "../components/Comment/CreateComment";
import {useNavigate, useParams} from "react-router-dom";
import useShowArticleDetails from "../hooks/useShowArticleDetails.ts";

export default function ShowArticlePage() {
  const navigate = useNavigate();


  const { id } = useParams<{ id: string }>();

  if(id === undefined || id === null) navigate("/");
  //console.log("Article id: ", id)
  const { data, loading } = useShowArticleDetails(id as string);
  console.log("Article details: ", data.getArticle);
  return (
    <Box as="main">
      <Container maxW="7xl" p="12">
        {loading ? (
            <Flex justify="center" align="center" height="100vh">
              <Spinner
                  thickness='4px'
                  speed='0.45s'
                  emptyColor='gray.200'
                  color='blue.500'
                  boxSize='100px'
              />
            </Flex>
        ) : (
            <>
            <Heading textAlign="center" as="h1" color={blue_color}>
              What's New - Article{" "}
            </Heading>
            <Article />
            <CreateComment />
            <CommentList />

          </>
        )}
      </Container>
    </Box>
  );
}
