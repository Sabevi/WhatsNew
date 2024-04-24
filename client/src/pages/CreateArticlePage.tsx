import { Container, Heading } from "@chakra-ui/react";
import CreateArticle from "../components/Article/CreateArticle";
import { _blue } from "../assets/colors";

export default function CreateArticlePage() {
  return (
    <Container maxW="7xl" p="12">
      <Heading textAlign="center" as="h1" color={_blue}>
        What's New - Create Article{" "}
      </Heading>
      <CreateArticle />
    </Container>
  );
}
