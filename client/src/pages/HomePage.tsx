import { Container, Heading, Text } from "@chakra-ui/react";
import ArticleList from "../components/Article/ArticleList";
import { _blue } from "../assets/colors";
import SelectArticles from "../components/Article/SelectArticles";

export default function HomePage() {
  return (
    <Container maxW="7xl" p="12">
      <Heading textAlign="center" as="h1" color={_blue}>
        What's New - Articles{" "}
      </Heading>
      <SelectArticles />
      <ArticleList />
      <Text textAlign="center">PAGINATION</Text>
    </Container>
  );
}
