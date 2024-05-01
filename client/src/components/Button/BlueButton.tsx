import { Button } from "@chakra-ui/react";
import { blue_color, white_color } from "../../assets/customColors";
import { BlueButtonProps } from "../../types/ComponentTypes";

export default function BlueButton({
  text,
  onClickAction,
  margin,
  type,
  disabled
}: BlueButtonProps): JSX.Element {
  return (
    <Button
      variant="solid"
      bg={blue_color}
      color={white_color}
      onClick={onClickAction}
      m={margin}
      type={type}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}
