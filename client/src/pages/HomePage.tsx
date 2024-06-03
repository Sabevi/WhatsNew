import { Container, Heading, Box, Flex, Spinner } from "@chakra-ui/react";
import ArticleList from "../components/Article/ArticleList";
import {blue_color, grey_color} from "../assets/customColors";
import SelectArticles from "../components/Article/Actions/SelectArticles";
import { useCallback, useState } from "react";
import useShowArticleList from "../services/useShowArticleList";
import Pagination from "../components/Pagination/Pagination";

export default function HomePage(): JSX.Element {
  const [params, setParams] = useState<[number, boolean, string]>([
    1,
    false,
    "",
  ]);
  const { data, loading } = useShowArticleList(...params);
  const { articlesDto, pagination } = data;
  const { page, total } = pagination;

  const handleParamsChange = useCallback(
    (newParams: [number, boolean, string]) => {
      setParams(newParams);
    },
    []
  );

  const handlePrevious = () => {
    setParams([page - 1, params[1], params[2]]);
  };
  
  const handleNext = () => {
    setParams([page + 1, params[1], params[2]]);
  };

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
            articlesDto.length > 0 ? (
                <>
                  <ArticleList articles={articlesDto} />
                  <Pagination
                      hasPreviousPage={page > 1}
                      hasNextPage={page < total}
                      onPreviousPage={handlePrevious}
                      onNextPage={handleNext}
                  />
                </>
                ) : (
                <Heading textAlign="center" as="h3" color={grey_color}>
                    No articles found
                </Heading>
                )
        )}
      </Container>
    </Box>
  );
}
