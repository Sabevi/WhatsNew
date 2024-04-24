import { Container, Heading, Text } from "@chakra-ui/react";
import { _blue } from "../assets/colors";
import Article from "../components/Article/Article";

export default function ShowArticlePage() {
  return (
    <Container maxW="7xl" p="12">
      <Heading textAlign="center" as="h1" color={_blue}>
        What's New - Article{" "}
      </Heading>
      <Article />
    </Container>
  );
}
