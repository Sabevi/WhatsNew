import {
  Textarea,
  Input,
  FormControl,
  FormLabel,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FormArticleProps } from "../../../types/ComponentTypes";

export default function FormArticle({
  title,
  article,
}: FormArticleProps): JSX.Element {
  return (
    <form>
      <FormControl id="Article Title">
        <VisuallyHidden as={FormLabel}>Article Title</VisuallyHidden>
        <Input
          type="text"
          placeholder="Enter the title of the article..."
          fontSize="lg"
          value={title}
        />
      </FormControl>
      <FormControl id="Article" pt="4">
        <VisuallyHidden as={FormLabel}>Article</VisuallyHidden>
        <Textarea
          placeholder="Enter the text of your article here..."
          h="300px"
          fontSize="lg"
          value={article}
        />
      </FormControl>
    </form>
  );
}
