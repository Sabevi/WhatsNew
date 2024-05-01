import { Box, Container, Heading } from "@chakra-ui/react";
import CreateArticle from "../components/Article/Content/CreateArticleCard";
import { blue_color } from "../assets/customColors";

export default function CreateArticlePage(): JSX.Element {
  return (
    <Box as="main">
      <Container maxW="7xl" p="12">
        <Heading textAlign="center" as="h1" color={blue_color}>
          What's New - Create Article{" "}
        </Heading>
        <CreateArticle />
      </Container>
    </Box>
  );
}
