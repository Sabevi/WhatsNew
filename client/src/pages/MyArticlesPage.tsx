import { Container, Heading, Text } from "@chakra-ui/react";
import { blue_color } from "../assets/customColors";
import MyArticlesList from "../components/Article/Lists/MyArticlesList";

export default function MyArticlesPage(): JSX.Element {
  return (
    <Container maxW="7xl" p="12">
      <Heading textAlign="center" as="h1" color={blue_color}>
        What's New - My Articles{" "}
      </Heading>
      <MyArticlesList />
      <Text textAlign="center">PAGINATION</Text>
    </Container>
  );
}
