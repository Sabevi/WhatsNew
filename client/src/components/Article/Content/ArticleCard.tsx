import { useState } from 'react';
import {
  Text,
  Flex,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Icon,
  Card,
} from "@chakra-ui/react";
import BlogAuthor from "./ArticleAuthor";
import { useNavigate } from "react-router-dom";
import { blue_color, light_blue_color } from "../../../assets/customColors";
import BlueButton from "../../Button/BlueButton";
import CommentButton from "../../Button/CommentButton";
import LikeButton from "../../Button/LikeButton";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ArticleDTOProps } from "../../../types/Article.types";
import useDeleteArticle from "../../../services/useDeleArticle";
import { useLikeOrDislike } from "../../../services/useLikeOrDislike.ts";
import { jwtDecode } from "jwt-decode";

export default function ArticleCard({ article }: ArticleDTOProps) {
  const { id, title, description, publishedAt, username, nbComments } = article;
  const navigate = useNavigate();
  const { deleteArticle } = useDeleteArticle();
  const { handleLikeOrDislike } = useLikeOrDislike(id);
  const [currentArticle, setCurrentArticle] = useState(article);

  const userConnected = JSON.parse(localStorage.getItem("user") || "{}");

  function itsMyArticle() {
    const token = userConnected.token;
    const decodedToken = jwtDecode(token);
    const usernameFromToken = (decodedToken as { username: string; id: string }).username;
    return usernameFromToken === username;
  }

  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  const submitlikeorDislike = async () => {
    const { likeList } = await handleLikeOrDislike();
    if (likeList != null) {
      const updatedArticle = { ...currentArticle, likes: likeList };
      setCurrentArticle(updatedArticle);
    }
  };

  return (
    <Card m={10} p={5} shadow="lg" bgColor={light_blue_color}>
      <CardHeader>
        {itsMyArticle() && (
          <Flex justifyContent="flex-end" alignItems="center">
            <IconButton
              icon={<Icon as={EditIcon} color={blue_color} boxSize="1.1em" />}
              variant="ghost"
              aria-label="Edit"
              onClick={() => navigate(`/article/${id}/edit`)}
            />
            <IconButton
              icon={<Icon as={DeleteIcon} color={blue_color} boxSize="1.1em" />}
              variant="ghost"
              aria-label="Delete"
              onClick={() => {
                deleteArticle({ articleId: id });
                window.location.reload();
              }}
            />
          </Flex>
        )}
        <Heading
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
          fontSize="3xl"
          as="h2"
          mb="4"
        >
          {title}
        </Heading>
        <BlogAuthor
          name={itsMyArticle() ? `${username} (me)` : username}
          date={new Date(publishedAt)}
        />
      </CardHeader>
      <CardBody>
        <Text as="p" marginTop="2" fontSize="lg" textAlign="justify">
          {truncateText(description, 300)}
        </Text>
      </CardBody>
      <CardFooter>
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <BlueButton
            text="Show full article"
            onClickAction={() => navigate(`/article/${id}`)}
          />
          <Flex justifyContent="flex-end" alignItems="center">
            <CommentButton
              onClickAction={() => navigate(`/article/${id}#comment-textarea`)}
              number={nbComments}
            />
            <LikeButton
              onClickAction={submitlikeorDislike}
              number={currentArticle.likes.length}
              liked={currentArticle.likes.some(
                (like) => like.userId === userConnected.id
              )}
            />
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
}
