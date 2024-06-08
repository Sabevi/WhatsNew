import {
  Text,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import BlogAuthor from "./ArticleAuthor";
import {
  blue_color,
  grey_color,
  light_blue_color,
} from "../../../assets/customColors";
import CommentButton from "../../Button/CommentButton";
import LikeButton from "../../Button/LikeButton";
import { useLikeOrDislike } from "../../../services/useLikeOrDislike.ts";
import { ArticleCardProps } from "../../../types/Article.types.ts";
import { jwtDecode } from "jwt-decode";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import useDeleteArticle from "../../../services/useDeleArticle.ts";

export default function ArticleDetails({ articleDetails }: ArticleCardProps) {
  const { handleLikeOrDislike } = useLikeOrDislike(articleDetails.id);
  const navigate = useNavigate();
  const { deleteArticle } = useDeleteArticle();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const token = user.token;
  const decodedToken = jwtDecode(token);
  const usernameFromToken = (decodedToken as { username: string; id: string })
    .username;
  const itsMyArticle = usernameFromToken === articleDetails.username;

  const submitlikeorDislike = async () => {
    const { likeList } = await handleLikeOrDislike();
    if (likeList != null) {
      articleDetails.likes = likeList;
    }
  };

  return (
    <Card mt={10} bg={light_blue_color} p="5">
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Flex flex="3" direction="column" justifyContent="center">
          <CardHeader>
            {itsMyArticle && (
              <Flex justifyContent="flex-end" alignItems="center">
                <IconButton
                  icon={<Icon as={EditIcon} w={10} />}
                  variant="ghost"
                  aria-label="Edit"
                  color={blue_color}
                  boxSize="1.1em"
                  onClick={() => navigate(`/article/${articleDetails.id}/edit`)}
                />
                <IconButton
                  icon={<Icon as={DeleteIcon} w={10} />}
                  variant="ghost"
                  aria-label="Delete"
                  color={blue_color}
                  boxSize="1.1em"
                  onClick={() =>
                    deleteArticle({ articleId: articleDetails.id })
                  }
                />
              </Flex>
            )}
            <Heading
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              fontSize="3xl"
              mt="10"
              mb="10"
            >
              {articleDetails.title}
            </Heading>
            <BlogAuthor
              name={articleDetails.username}
              date={new Date(articleDetails.publishedAt)}
            />
          </CardHeader>
          <CardBody>
            <Text
              as="p"
              fontSize="lg"
              color={grey_color}
              whiteSpace="pre-wrap"
              textAlign="justify"
            >
              {articleDetails.description}
            </Text>
          </CardBody>
          <CardFooter>
            <Flex width="100%" justifyContent="flex-end" gap="20px">
              <CommentButton
                onClickAction={() =>
                  console.log("CommentDetails button clicked")
                }
                number={articleDetails.comments.length ?? 0}
              />
              <LikeButton
                onClickAction={submitlikeorDislike}
                number={articleDetails.likes.length ?? 0}
                liked={articleDetails.likes.some(
                  (like) => like.userId === user.id
                )}
              />
            </Flex>
          </CardFooter>
        </Flex>
      </Flex>
    </Card>
  );
}
