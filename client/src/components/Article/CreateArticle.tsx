import { Text, Textarea } from "@chakra-ui/react";

export default function CreateArticle() {

  return (
    <>
      <Textarea
        value=""
        placeholder="Enter your article here..."
        size="sm"
      />
    </>
  );
}
