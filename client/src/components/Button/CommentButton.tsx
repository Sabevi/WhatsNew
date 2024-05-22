import { ChatIcon } from "@chakra-ui/icons";
import { Text, Stack, IconButton } from "@chakra-ui/react";
import { ActionButtonProps } from "../../types/types";

export default function CommentButton({
  onClickAction,
  number,
}: ActionButtonProps): JSX.Element {
  return (
    <Stack direction="row" align="center" spacing={0}>
      <Text>{number}</Text>
      <IconButton
        aria-label="Comment"
        icon={<ChatIcon boxSize={18} />}
        onClick={onClickAction}
        bg="transparent"
      />
    </Stack>
  );
}
