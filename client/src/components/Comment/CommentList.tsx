import {
  Card,
  CardHeader,
  Heading,
  CardFooter,
  CardBody,
} from "@chakra-ui/react";
import { CommentDetails } from "./CommentDetails.tsx";
import { CommentListProps } from "../../types/Article.types.ts";

export default function CommentList({ comments }: CommentListProps) {
  return (
    <Card mt="10">
      <CardHeader>
        <Heading
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
          fontSize="3xl"
          as="h2"
        >
          Comments:
        </Heading>
      </CardHeader>
      <CardBody>
        {comments.map((comment) => (
          <CommentDetails key={comment.id} comment={comment} />
        ))}
      </CardBody>
      <CardFooter>PAGINATION</CardFooter>
    </Card>
  );
}
