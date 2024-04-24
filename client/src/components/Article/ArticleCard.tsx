import { ChatIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Text,
  useColorModeValue,
  Flex,
  AspectRatio,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineLike } from "react-icons/ai";
import BlogAuthor from "./ArticleAuthor";

export default function ArticleCard() {
  return (
    <Card mt={10}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Flex
          flex="2"
          mr="3"
          position="relative"
          alignItems="center"
          direction={{ base: "column", sm: "row" }}
        >
          <AspectRatio
            ratio={1}
            width={{ base: "80%", sm: "70%" }}
            ml={{ base: "0", sm: "5%" }}
            zIndex="2"
          >
            <Image
              borderRadius="lg"
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              alt="some good alt text"
              objectFit="cover"
            />
          </AspectRatio>
          <Box
            zIndex="1"
            width="90%"
            position="absolute"
            height="100%"
            bgGradient={useColorModeValue(
              "radial(orange.600 1px, transparent 1px)",
              "radial(orange.300 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
          />
        </Flex>
        <Flex flex="3" direction="column" justifyContent="center">
          <CardHeader>
            <BlogAuthor
              name="John Doe"
              date={new Date("2021-04-06T19:01:27Z")}
            />
            <Heading>
              <Text
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                as="h2"
                fontSize="3xl"
              >
                Blog article title
              </Text>
            </Heading>
          </CardHeader>
          <CardBody>
            <Text
              as="p"
              marginTop="2"
              color="grey"
              fontSize="lg"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book...
            </Text>
          </CardBody>
          <CardFooter>
            <Flex
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button variant="solid" colorScheme="blue">
                Show full article
              </Button>
              <Stack direction="row" spacing={4} align="center">
                <Stack direction="row" spacing={1} align="center">
                  <Text>9</Text>
                  <Icon as={AiOutlineLike} boxSize={5} />
                </Stack>
                <Stack direction="row" spacing={1} align="center">
                  <Text>3</Text>
                  <Icon as={ChatIcon} w={10} />
                </Stack>
              </Stack>
            </Flex>
          </CardFooter>
        </Flex>
      </Flex>
    </Card>
  );
}
