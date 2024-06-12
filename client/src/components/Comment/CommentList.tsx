import { Card, CardHeader, Heading, CardBody } from "@chakra-ui/react";
import { CommentDetails } from "./CommentDetails.tsx";
import { CommentListProps } from "../../types/Article.types.ts";

export default function CommentList({ comments }: CommentListProps) {
  // last comment first
  const reversedComments = [...comments].reverse();

  return (
    <Card mt="10" shadow="lg">
      {reversedComments.length > 0 ? (
        <>
          <CardHeader>
            <Heading
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              fontSize="3xl"
              as="h2"
            >
              Comments :
            </Heading>
          </CardHeader>
          <CardBody>
            {reversedComments.map((comment) => (
              <CommentDetails key={comment.id} comment={comment} />
            ))}
          </CardBody>
        </>
      ) : null}
    </Card>
  );
}
