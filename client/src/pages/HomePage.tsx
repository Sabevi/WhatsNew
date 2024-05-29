import { Container, Heading, Text, Box } from "@chakra-ui/react";
import ArticleList from "../components/Article/ArticleList";
import { blue_color } from "../assets/customColors";
import SelectArticles from "../components/Article/Actions/SelectArticles";

export default function HomePage(): JSX.Element {
  return (
    <Box as="main">
      <Container maxW="7xl" p="12">
        <Heading textAlign="center" as="h1" color={blue_color}>
          What's New - Articles{" "}
        </Heading>
        <SelectArticles />
        <ArticleList />
        <Text textAlign="center">PAGINATION</Text>
      </Container>
    </Box>
  );
}
