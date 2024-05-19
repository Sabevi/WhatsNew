import { Card, CardFooter } from "@chakra-ui/react";
import BlueButton from "../../Button/BlueButton";
import ArticleForm from "../Actions/ArticleForm";

export default function CreateArticleCard(): JSX.Element {
  return (
    <Card p="4" w="full" h="auto">
      <ArticleForm title="" article="" />
      <CardFooter>
        <BlueButton
          text="Publish article"
          onClickAction={() => {}}
          margin="0 auto"
        />
      </CardFooter>
    </Card>
  );
}
