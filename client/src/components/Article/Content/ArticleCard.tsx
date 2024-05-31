import {
  Text,
  Flex,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import BlogAuthor from "./ArticleAuthor";
import { useNavigate } from "react-router-dom";
import { grey_color } from "../../../assets/customColors";
import BlueButton from "../../Button/BlueButton";
import CommentButton from "../../Button/CommentButton";
import LikeButton from "../../Button/LikeButton";
import SmallArticleCard from "./SmallArticleCard";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ArticleProps } from "../../../types/types";

export default function ArticleCard({article}: ArticleProps ): JSX.Element {
  const {
    title,
    description,
    publishedAt,
    username,
    userId,
    nbComments,
    likes,
    id,
  } = article;
  const navigate = useNavigate();
  const userConnected = JSON.parse(localStorage.getItem("user") || "{}");
  const myId = userConnected.id;
  const itsMyArticle = myId === userId;

  return (
    <SmallArticleCard>
      <CardHeader>
        {itsMyArticle && (
          <Flex justifyContent="flex-end" alignItems="center">
            <IconButton
              icon={<Icon as={EditIcon} w={10} />}
              variant="ghost"
              aria-label="Delete"
              onClick={() => navigate("/edit")}
            />
            <IconButton
              icon={<Icon as={DeleteIcon} w={10} />}
              variant="ghost"
              aria-label="Delete"
            />
          </Flex>
        )}
        <Heading
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
          fontSize="3xl"
          as="h2"
        >
          {title}
        </Heading>
        <BlogAuthor name={itsMyArticle ? "Me" : username} date={new Date(publishedAt)} />
      </CardHeader>
      <CardBody>
        <Text as="p" marginTop="2" color={grey_color} fontSize="lg">
          {description}...
        </Text>
      </CardBody>
      <CardFooter>
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <BlueButton
            text="Show full article"
            onClickAction={() => navigate(`/article/${id}`)}
          />
          <Flex width="18%" justifyContent="space-between">
            <CommentButton
              onClickAction={() => navigate("/article")}
              number={nbComments}
            />
            <LikeButton
              onClickAction={() => navigate("/article")}
              number={likes.length}
            />
          </Flex>
        </Flex>
      </CardFooter>
    </SmallArticleCard>
  );
}
