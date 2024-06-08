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
  FormErrorMessage,
} from "@chakra-ui/react";
import BlueButton from "../Button/BlueButton";
import useCommentArticle from "../../services/useCommentArticle.ts";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateCommentProps = {
  articleId: string;
};
export default function CreateComment({ articleId }: CreateCommentProps) {
  const { commentArticle } = useCommentArticle();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onSubmit" });

  const commentRegister = register("comment", {
    minLength: {
      value: 2,
      message: "The Comment must be at least 2 characters long",
    },
    maxLength: {
      value: 600,
      message: "The comment cannot be more than 600 characters long",
    },
  });

  const onSubmit: SubmitHandler<{ comment: string }> = async (data) => {
    await commentArticle({ articleId, content: data.comment });
  };

  return (
    <Card p="4" w="full" h="auto" mt={10} shadow="lg">
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
            Add your comment :
          </Heading>
        </CardHeader>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="article" isInvalid={!!errors.comment}>
          <VisuallyHidden as={FormLabel}>Article</VisuallyHidden>
          <Textarea
            {...commentRegister}
            id={"comment-textarea"}
            placeholder="Enter the text of your article here..."
            h="200px"
            fontSize="lg"
            onBlur={() => trigger("comment")}
          />
          {errors.comment && (
            <FormErrorMessage>
              {errors.comment.message as string}
            </FormErrorMessage>
          )}
        </FormControl>
        <CardFooter>
          <BlueButton text="Publish comment" margin="0 auto" type="submit" />
        </CardFooter>
      </form>
    </Card>
  );
}
