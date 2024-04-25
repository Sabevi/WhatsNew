import { Card, CardFooter } from "@chakra-ui/react";
import BlueButton from "../../Button/BlueButton";
import FormArticle from "./FormArticle";

export default function CreateArticle() {
  return (
    <Card p="4" w="full" h="auto">
      <FormArticle title="" article="" />
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
