import { Flex, Text } from "@chakra-ui/react";
import ArticleList from "../components/Article/ArticleList";
import Menu from "../components/Menu/Menu";
import SelectArticles from "../components/Select/SelectArticles";

export default function Home() {
  return (
    <div>
      <Flex gap={30} justifyContent="space-between" mt="10" ml="10" mr="10">
        <Menu />
        <SelectArticles />
      </Flex>
      <ArticleList />
      <Text textAlign="center">PAGINATION</Text>
    </div>
  );
}
