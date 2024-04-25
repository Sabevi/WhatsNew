import { Box, Flex, Select } from "@chakra-ui/react";

export default function SelectArticles(): JSX.Element {
  return (
    <Box>
      <Flex justifyContent="end">
        <Select placeholder="Select articles" size="lg" width="220px">
          <option value="option1">Show all articles</option>
          <option value="option2">Show most popular</option>
        </Select>
      </Flex>
    </Box>
  );
}
