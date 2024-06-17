import { ChatIcon } from "@chakra-ui/icons";
import { Text, Stack, IconButton } from "@chakra-ui/react";
import { CommentComponentProps } from "../../types/Article.types";
import { blue_color } from "../../assets/customColors";

export default function CommentButton({
  onClickAction,
  number,
}: CommentComponentProps) {
  return (
    <Stack direction="row" align="center" spacing={0}>
      <Text color={blue_color}>{number}</Text>
      <IconButton
        aria-label="CommentDetails"
        icon={<ChatIcon boxSize={18} />}
        onClick={onClickAction}
        color={blue_color}
        bg="transparent"
      />
    </Stack>
  );
}
