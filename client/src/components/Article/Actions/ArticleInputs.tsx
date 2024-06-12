import {
  Textarea,
  Input,
  FormControl,
  FormLabel,
  VisuallyHidden,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ArticleInputsProps } from "../../../types/Article.types";
import { light_blue_color } from "../../../assets/customColors";

export default function ArticleInputs({
  titleRegister,
  articleRegister,
  errors,
  trigger,
}: ArticleInputsProps) {
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
          bg={light_blue_color}
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
          bg={light_blue_color}
          style={{height: "650px"}}
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
