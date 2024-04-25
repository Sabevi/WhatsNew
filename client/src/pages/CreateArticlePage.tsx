import { Container, Heading } from "@chakra-ui/react";
import CreateArticle from "../components/Article/Actions/CreateArticle";
import { blue_color } from "../assets/customColors";

export default function CreateArticlePage() {
  return (
    <Container maxW="7xl" p="12">
      <Heading textAlign="center" as="h1" color={blue_color}>
        What's New - Create Article{" "}
      </Heading>
      <CreateArticle />
    </Container>
  );
}
