import {
  Text,
  Flex,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import BlogAuthor from "../Article/Content/ArticleAuthor";
import { grey_color } from "../../assets/customColors";
import {CommentModel} from "../../types/article.ts";

interface CommentProps {
  comment: CommentModel
}

export function CommentDetails({ comment }: CommentProps) {
  return (
    <Card mb={10}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      ></Flex>
      <Flex flex="3" direction="column" justifyContent="center">
        <CardHeader>
          <BlogAuthor name={comment.username} date={new Date(comment.publishedAt)} />
        </CardHeader>
        <CardBody>
          <Text marginTop="2" fontSize="lg" color={grey_color}>
            {comment.content}
          </Text>
        </CardBody>
      </Flex>
    </Card>
  );
}
