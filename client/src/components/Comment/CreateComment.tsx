import {
  Card,
  Textarea,
  FormControl,
  FormLabel,
  Box,
  VisuallyHidden,
  CardFooter,
  Button,
  Flex,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { blue_color, white_color } from "../../assets/customColors";

export default function CreateComment() {
  return (
    <Card as="form" p="4" w="full" h="auto" mt={10}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <CardHeader>
          <Heading>
            <Text
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              fontSize="3xl"
            >
              Add your comment:
            </Text>
          </Heading>
        </CardHeader>
      </Flex>
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
            Publish comment
          </Button>
        </CardFooter>
      </Box>
    </Card>
  );
}
