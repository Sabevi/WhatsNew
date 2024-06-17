import { Text, Flex, Card, CardHeader, CardBody } from "@chakra-ui/react";
import BlogAuthor from "../Article/Content/ArticleAuthor";
import { grey_color, light_blue_color } from "../../assets/customColors";
import { CommentProps } from "../../types/Article.types";

export function CommentDetails({ comment }: CommentProps) {
  return (
    <Card mb={10} bg={light_blue_color} p="5" shadow="lg">
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      ></Flex>
      <Flex flex="3" direction="column" justifyContent="center">
        <CardHeader>
          <BlogAuthor
            name={comment.username}
            date={new Date(comment.publishedAt)}
          />
        </CardHeader>
        <CardBody>
          <Text
            marginTop="2"
            fontSize="lg"
            color={grey_color}
            whiteSpace="pre-wrap"
          >
            {comment.content}
          </Text>
        </CardBody>
      </Flex>
    </Card>
  );
}
