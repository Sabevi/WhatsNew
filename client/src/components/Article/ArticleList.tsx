import {
  Heading,
  Container,
} from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import { _blue } from "../../assets/colors";

const ArticleList = () => {
  return (
    <Container maxW="7xl" p="12">
      <Heading textAlign="center" as="h1" color={_blue}>What's New - Articles </Heading>
        <ArticleCard />
        <ArticleCard />
    </Container>
  );
};

export default ArticleList;
