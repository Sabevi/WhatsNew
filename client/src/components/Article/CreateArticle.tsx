import {
  Card,
  Textarea,
  Input,
  FormControl,
  FormLabel,
  Box,
  VisuallyHidden,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { blue_color, white_color } from "../../assets/customColors";

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
          <Button
            variant="solid"
            bg={blue_color}
            color={white_color}
            m="0 auto"
          >
            Publish article
          </Button>
        </CardFooter>
      </Box>
    </Card>
  );
}
