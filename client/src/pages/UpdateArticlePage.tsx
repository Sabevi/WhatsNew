import { Container, Heading } from "@chakra-ui/react";
import { _blue } from "../assets/colors";
import EditArticle from "../components/Article/EditArticle";

export default function UpdateArticlePage() {
  return (
    <Container maxW="7xl" p="12">
      <Heading textAlign="center" as="h1" color={_blue}>
        What's New - Edit Article{" "}
      </Heading>
      <EditArticle />
    </Container>
  );
}
