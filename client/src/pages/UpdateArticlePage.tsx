import { Container, Heading, Box } from "@chakra-ui/react";
import { blue_color } from "../assets/customColors";
import EditArticle from "../components/Article/Content/EditArticleCard";

export default function UpdateArticlePage(): JSX.Element {
  return (
    <Box as="main">
      <Container maxW="7xl" p="12">
        <Heading textAlign="center" as="h1" color={blue_color}>
          What's New - Edit Article{" "}
        </Heading>
        <EditArticle />
      </Container>
    </Box>
  );
}
