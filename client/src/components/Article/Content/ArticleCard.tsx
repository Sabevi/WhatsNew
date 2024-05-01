import {
  Text,
  Flex,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import BlogAuthor from "./ArticleAuthor";
import { useNavigate } from "react-router-dom";
import { grey_color } from "../../../assets/customColors";
import BlueButton from "../../Button/BlueButton";
import CommentButton from "../../Button/CommentButton";
import LikeButton from "../../Button/LikeButton";
import SmallArticleCard from "./SmallArticleCard";

export default function ArticleCard(): JSX.Element {
  const navigate = useNavigate();

  return (
    <SmallArticleCard>
      <CardHeader>
        <BlogAuthor name="John Doe" date={new Date("2021-04-06T19:01:27Z")} />
        <Heading>
          <Text
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            fontSize="3xl"
            as="h2"
          >
            Blog article title
          </Text>
        </Heading>
      </CardHeader>
      <CardBody>
        <Text as="p" marginTop="2" color={grey_color} fontSize="lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book...
        </Text>
      </CardBody>
      <CardFooter>
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <BlueButton
            text="Show full article"
            onClickAction={() => navigate("/article")}
          />
          <Flex width="18%" justifyContent="space-between">
            <CommentButton
              onClickAction={() => navigate("/article")}
              number={3}
            />
            <LikeButton onClickAction={() => navigate("/article")} number={6} />
          </Flex>
        </Flex>
      </CardFooter>
    </SmallArticleCard>
  );
}
