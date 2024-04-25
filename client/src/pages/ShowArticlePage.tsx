import { Container, Heading, Text } from "@chakra-ui/react";
import { blue_color } from "../assets/customColors";
import Article from "../components/Article/Content/Article";
import CommentList from "../components/Comment/CommentList";
import CreateComment from "../components/Comment/CreateComment";

export default function ShowArticlePage() {
  return (
    <Container maxW="7xl" p="12">
      <Heading textAlign="center" as="h1" color={blue_color}>
        What's New - Article{" "}
      </Heading>
      <Article />
      <CommentList />
      <CreateComment />
    </Container>
  );
}
