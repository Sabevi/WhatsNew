import { Card, CardFooter } from "@chakra-ui/react";
import BlueButton from "../../Button/BlueButton";
import ArticleForm from "../Actions/ArticleInputs";

export default function EditArticleCard(): JSX.Element {
  return (
    <Card p="4" w="full" h="auto">
      <ArticleForm
        title="Dummy title"
        article="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      />
      <CardFooter>
        <BlueButton
          text="Save article"
          onClickAction={() => {}}
          margin="0 auto"
        />
      </CardFooter>
    </Card>
  );
}
