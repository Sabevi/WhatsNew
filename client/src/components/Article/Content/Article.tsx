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
} from "@chakra-ui/react";
import BlogAuthor from "./ArticleAuthor";
import { grey_color } from "../../../assets/customColors";
import CommentButton from "../../Button/CommentButton";
import LikeButton from "../../Button/LikeButton";

export default function ArticleCard(): JSX.Element {
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
            <Heading
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                fontSize="3xl"
                mt="10"
              >
                Blog article title
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex justifyContent="center">
              <AspectRatio width={{ sm: "40%" }}>
                <Image
                  borderRadius="lg"
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  alt="some good alt text"
                  objectFit="cover"
                />
              </AspectRatio>
            </Flex>
            <Text
              as="p"
              marginTop="2"
              fontSize="lg"
              padding="10"
              color={grey_color}
            >
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
            <Flex width="100%" justifyContent="flex-end" gap="20px">
              <CommentButton
                onClickAction={() => console.log("Comment button clicked")}
                number={3}
              />
              <LikeButton
                onClickAction={() => console.log("Like button clicked")}
                number={6}
              />
            </Flex>
          </CardFooter>
        </Flex>
      </Flex>
    </Card>
  );
}
