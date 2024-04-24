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

export default function CreateArticle() {
  return (
    <Card as="form" p="4" w="full" h="auto">
      <Box mb="4">
        <FormControl id="email">
          <VisuallyHidden as={FormLabel}>Email address</VisuallyHidden>
          <Input type="email" placeholder="Enter the title of the article..." />
        </FormControl>
      </Box>
      <Box mb="4">
        <FormControl id="article">
          <VisuallyHidden as={FormLabel}>Article</VisuallyHidden>
          <Textarea
            placeholder="Enter the text of your article here..."
            h="300px"
          />
        </FormControl>
        <CardFooter>
          <Button variant="solid" colorScheme="blue" m="0 auto">
            Publish article
          </Button>
        </CardFooter>
      </Box>
    </Card>
  );
}
