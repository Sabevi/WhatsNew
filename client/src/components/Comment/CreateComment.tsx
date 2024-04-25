import {
  Card,
  Textarea,
  FormControl,
  FormLabel,
  Box,
  VisuallyHidden,
  CardFooter,
  Flex,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import BlueButton from "../Button/BlueButton";

export default function CreateComment(): JSX.Element {
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
              as="h2"
            >
              Add your comment:
            </Text>
          </Heading>
        </CardHeader>
      </Flex>
      <form>
        <FormControl id="article">
          <VisuallyHidden as={FormLabel}>Article</VisuallyHidden>
          <Textarea
            placeholder="Enter the text of your article here..."
            h="300px"
            fontSize="lg"
          />
        </FormControl>
      </form>
      <CardFooter>
        <BlueButton
          text="Publish comment"
          onClickAction={() => {}}
          margin="0 auto"
        />
      </CardFooter>
    </Card>
  );
}
