import { useState } from "react";
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

export default function EditArticle() {
  const [title, setTitle] = useState("This is a dummy title");
  const [article, setArticle] = useState("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?");

  return (
    <Card as="form" p="4" w="full" h="auto">
      <Box mb="4">
        <FormControl id="title">
          <VisuallyHidden as={FormLabel}>Article Title</VisuallyHidden>
          <Input
            type="title"
            placeholder="Enter the title of the article..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            fontSize="lg"
          />
        </FormControl>
        <CardFooter>
         
         
        </CardFooter>
      </Box>
    </Card>
  );
}
