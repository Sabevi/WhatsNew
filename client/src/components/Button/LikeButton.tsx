import { AiOutlineLike } from "react-icons/ai";
import { Text, Stack, IconButton } from "@chakra-ui/react";
import { ActionButtonProps } from "../../types/ComponentTypes";

export default function LikeButton({ onClickAction, number} : ActionButtonProps) {
  return (
    <Stack direction="row" align="center" spacing={0}>
      <Text>{number}</Text>
      <IconButton
        aria-label="Like"
        icon={<AiOutlineLike size={24} />}
        onClick={onClickAction}
        bg="transparent"
      />
    </Stack>
  );
}
