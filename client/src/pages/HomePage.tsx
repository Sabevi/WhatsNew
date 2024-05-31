import { Container, Heading, Text, Box, Flex, Spinner } from "@chakra-ui/react";
import ArticleList from "../components/Article/ArticleList";
import { blue_color } from "../assets/customColors";
import SelectArticles from "../components/Article/Actions/SelectArticles";
import { useCallback, useState } from "react";
import useShowArticleList from "../hooks/useShowArticleList";

export default function HomePage(): JSX.Element {
  const [params, setParams] = useState<[number, boolean, string]>([1, false, ""]);
  const { data, loading } = useShowArticleList(...params);

  const handleParamsChange = useCallback((newParams: [number, boolean, string]) => {
    setParams(newParams);
  }, []);

  return (
    <Box as="main">
      <Container maxW="7xl" p="12">
        <Heading textAlign="center" as="h1" color={blue_color}>
          What's New - Articles{" "}
        </Heading>
        <SelectArticles onParamsChange={handleParamsChange} />
        {loading ? (
          <Flex justify="center" align="center" height="100vh">
            <Spinner
              thickness="4px"
              speed="0.45s"
              emptyColor="gray.200"
              color="blue.500"
              boxSize="100px"
            />
          </Flex>
        ) : (
          <>
            <ArticleList data={data} />
            <Text textAlign="center">PAGINATION</Text>
          </>
        )}
      </Container>
    </Box>
  );
}
