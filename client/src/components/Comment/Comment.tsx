import {
  Text,
  Flex,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import BlogAuthor from "../Article/Content/ArticleAuthor";
import { grey_color } from "../../assets/customColors";


export function Comment() {
  return (
    <Card mt={10}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      ></Flex>
      <Flex flex="3" direction="column" justifyContent="center">
        <CardHeader>
          <BlogAuthor name="John Doe" date={new Date("2021-04-06T19:01:27Z")} />
        </CardHeader>
        <CardBody>
          <Text marginTop="2" fontSize="lg" color={grey_color}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book...
          </Text>
        </CardBody>
      </Flex>
    </Card>
  );
}
