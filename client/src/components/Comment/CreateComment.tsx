import {
  Card,
  Textarea,
  FormControl,
  FormLabel,
  VisuallyHidden,
  CardFooter,
  Flex,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import BlueButton from "../Button/BlueButton";
import useCommentArticle from "../../services/useCommentArticle.ts";
import { useState } from "react";
import { ArticleActionProps } from "../../types/Article.types.ts";

export default function CreateComment({ articleId }: ArticleActionProps) {
  const { commentArticle } = useCommentArticle();
  const [commentText, setCommentText] = useState("");

  const handlePublish = async () => {
    await commentArticle({ articleId, content: commentText });
    setCommentText("");
    window.location.reload();
  };
  return (
    <Card p="4" w="full" h="auto" mt={10}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <CardHeader>
          <Heading
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            fontSize="3xl"
            as="h2"
          >
            Add your comment:
          </Heading>
        </CardHeader>
      </Flex>
      <form>
        <FormControl id="article">
          <VisuallyHidden as={FormLabel}>Article</VisuallyHidden>
          <Textarea
            id={"comment-textarea"}
            placeholder="Enter the text of your article here..."
            h="300px"
            fontSize="lg"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </FormControl>
        <CardFooter>
          <BlueButton
            text="Publish comment"
            onClickAction={handlePublish}
            margin="0 auto"
            type="submit"
          />
        </CardFooter>
      </form>
    </Card>
  );
}
