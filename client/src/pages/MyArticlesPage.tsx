import { Container, Heading, Text } from "@chakra-ui/react";
import { _blue } from "../assets/colors";
import MyArticlesList from "../components/Article/MyArticlesList";

export default function MyArticlesPage() {
  return (
    <Container maxW="7xl" p="12">
      <Heading textAlign="center" as="h1" color={_blue}>
        What's New - My Articles{" "}
      </Heading>
      <MyArticlesList />
      <Text textAlign="center">PAGINATION</Text>
    </Container>
  );
}
