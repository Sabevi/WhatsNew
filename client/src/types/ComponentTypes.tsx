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

// FORMS
export interface FormArticleProps {
  title: string;
  article: string;
}

// OTHER COMPONENTS
export interface BlogAuthorProps {
  date: Date;
  name: string;
}