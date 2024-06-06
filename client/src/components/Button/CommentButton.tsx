import { ChatIcon } from "@chakra-ui/icons";
import { Text, Stack, IconButton } from "@chakra-ui/react";
import { CommentComponentProps } from "../../types/Article.types";

export default function CommentButton({
  onClickAction,
  number,
}: CommentComponentProps) {
  return (
    <Stack direction="row" align="center" spacing={0}>
      <Text>{number}</Text>
      <IconButton
        aria-label="CommentDetails"
        icon={<ChatIcon boxSize={18} />}
        onClick={onClickAction}
        bg="transparent"
      />
    </Stack>
  );
}
