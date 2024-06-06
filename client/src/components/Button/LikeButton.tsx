import {AiFillLike, AiOutlineLike} from "react-icons/ai";
import { Text, Stack, IconButton } from "@chakra-ui/react";
import {LikeComponentProps} from "../../types/Article.types.tsx";

export default function LikeButton({
  onClickAction,
  number,
  liked,
}: LikeComponentProps) {
  return (
    <Stack direction="row" align="center" spacing={0}>
      <Text>{number}</Text>
      <IconButton
        aria-label="Like"
        icon={liked ? <AiFillLike /> : <AiOutlineLike />}
        onClick={onClickAction}
        bg="transparent"
      />
    </Stack>
  );
}
