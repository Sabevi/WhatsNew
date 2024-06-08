import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { Text, Stack, IconButton } from "@chakra-ui/react";
import { LikeComponentProps } from "../../types/Article.types.tsx";
import { blue_color } from "../../assets/customColors.tsx";

export default function LikeButton({
  onClickAction,
  number,
  liked,
}: LikeComponentProps) {
  return (
    <Stack direction="row" align="center" spacing={0}>
      <Text color={blue_color}>{number}</Text>
      <IconButton
        aria-label="Like"
        icon={
          liked ? <AiFillLike size="1.3em" /> : <AiOutlineLike size="1.3em" />
        }
        onClick={onClickAction}
        bg="transparent"
        color={blue_color}
      />
    </Stack>
  );
}
