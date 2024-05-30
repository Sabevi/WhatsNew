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
import {ArticleModel} from "../../../types/article.ts";

interface ArticleCardProps {
  articleDetails: ArticleModel;
}
export default function ArticleCard({ articleDetails }: ArticleCardProps) {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <Card mt={10}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Flex flex="3" direction="column" justifyContent="center">
          <CardHeader>
            <BlogAuthor
              name={articleDetails.username}
              date={new Date(articleDetails.publishedAt)}
            />
            <Heading
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                fontSize="3xl"
                mt="10"
              >
              {articleDetails.title}
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
              {articleDetails.description}
            </Text>
          </CardBody>
          <CardFooter>
            <Flex width="100%" justifyContent="flex-end" gap="20px">
              <CommentButton
                onClickAction={() => console.log("CommentDetails button clicked")}
                number={articleDetails.comments.length ?? 0}
              />
              <LikeButton
                onClickAction={() => console.log("Like button clicked")}
                number={articleDetails.likes.length ?? 0}
                liked={articleDetails.likes.some(like => like.userId === user.id)}
              />
            </Flex>
          </CardFooter>
        </Flex>
      </Flex>
    </Card>
  );
}
