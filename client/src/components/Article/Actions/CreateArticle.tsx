import {
  Card,
  Textarea,
  Input,
  FormControl,
  FormLabel,
  Box,
  VisuallyHidden,
  CardFooter,
} from "@chakra-ui/react";
import BlueButton from "../../Button/BlueButton";

export default function CreateArticle() {
  return (
    <Card as="form" p="4" w="full" h="auto">
      <Box mb="4">
        <FormControl id="title">
          <VisuallyHidden as={FormLabel}>Article Title</VisuallyHidden>
          <Input
            type="text"
            placeholder="Enter the title of the article..."
            fontSize="lg"
          />
        </FormControl>
      </Box>
      <Box mb="4">
        <FormControl id="article">
          <VisuallyHidden as={FormLabel}>Article</VisuallyHidden>
          <Textarea
            placeholder="Enter the text of your article here..."
            h="300px"
            fontSize="lg"
          />
        </FormControl>
        <CardFooter>
          <BlueButton text="Publish article" onClickAction={() => {}} margin="0 auto" />
        </CardFooter>
      </Box>
    </Card>
  );
}
