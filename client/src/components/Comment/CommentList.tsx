import { Text, Flex, Card, CardHeader, Heading } from "@chakra-ui/react";
import { Comment } from "./Comment";

export default function CommentList() {
  return (
    <Card mt="10" mb="10">
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <CardHeader>
          <Heading>
            <Text
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              fontSize="3xl"
            >
              Comments:
            </Text>
          </Heading>
          <Comment />
          <Comment />
          PAGINATION
        </CardHeader>
      </Flex>
    </Card>
  );
}
