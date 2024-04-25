// BUTTONS
export interface ButtonProps {
  onClickAction: () => void;
}

export interface BlueButtonProps extends ButtonProps {
  text: string;
  margin?: string;
}

export interface ActionButtonProps extends ButtonProps {
  number: number;
}