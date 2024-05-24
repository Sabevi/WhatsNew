import {
  Textarea,
  Input,
  FormControl,
  FormLabel,
  VisuallyHidden,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ArticleInputsProps } from "../../../types/types";

export default function ArticleInputs(
  {
    titleRegister,
    articleRegister,
    errors,
    trigger,
  }: ArticleInputsProps
): JSX.Element {
  return (
    <>
      <FormControl id="Article Title" isInvalid={!!errors.title}>
        <VisuallyHidden as={FormLabel}>Article Title</VisuallyHidden>
        <Input
          {...titleRegister}
          type="text"
          placeholder="Enter the title of the article..."
          fontSize="lg"
          onBlur={() => trigger("title")}
        />
        {errors.title && (
          <FormErrorMessage>{errors.title.message as string}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl id="Article" pt="4" isInvalid={!!errors.description}>
        <VisuallyHidden as={FormLabel}>Article</VisuallyHidden>
        <Textarea
          {...articleRegister}
          placeholder="Enter the text of your article here..."
          h="300px"
          fontSize="lg"
          onBlur={() => trigger("description")}
        />
        {errors.description && (
          <FormErrorMessage>
            {errors.description.message as string}
          </FormErrorMessage>
        )}
      </FormControl>
    </>
  );
}
