import {
  Card,
  CardHeader,
  Heading,
  CardFooter,
  CardBody,
} from "@chakra-ui/react";
import { Comment } from "./Comment";

export default function CommentList(): JSX.Element {
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
        <Comment />
        <Comment />
      </CardBody>
      <CardFooter>PAGINATION</CardFooter>
    </Card>
  );
}
