export interface ButtonProps {
  onClickAction?: React.MouseEventHandler<HTMLButtonElement>;
}
export interface BlueButtonProps extends ButtonProps {
  text: string;
  margin?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  style?: React.CSSProperties;
}
