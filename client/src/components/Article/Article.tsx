import { ChatIcon } from "@chakra-ui/icons";
import {
  Image,
  Text,
  Flex,
  AspectRatio,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Icon,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineLike } from "react-icons/ai";
import BlogAuthor from "./ArticleAuthor";
import { _blue } from "../../assets/colors";

export default function ArticleCard() {
  return (
    <Card mt={10}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
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
                fontSize="3xl"
              >
                Blog article title
              </Text>
            </Heading>
          </CardHeader>
          <CardBody>
            <AspectRatio
              width={{ base: "80%", sm: "70%" }}
              ml={{ base: "0", sm: "5%" }}
            >
              <Image
                borderRadius="lg"
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                alt="some good alt text"
                objectFit="cover"
              />
            </AspectRatio>
            <Text as="p" marginTop="2" color="grey" fontSize="lg" padding="10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book... Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book... Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book... Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book... Lorem
              Ipsum is simply dummy text of the printing and typesetting
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
              <Stack direction="row" spacing={4}>
                <IconButton
                  aria-label="Icon button 1"
                  icon={<Icon as={AiOutlineLike} />}
                  backgroundColor={_blue}
                  color="white"
                />
                <IconButton
                  aria-label="Icon button 2"
                  icon={<Icon as={ChatIcon} />}
                  backgroundColor={_blue}
                  color="white"
                />
              </Stack>
            </Flex>
          </CardFooter>
        </Flex>
      </Flex>
    </Card>
  );
}
