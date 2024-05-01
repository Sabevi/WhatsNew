// BUTTONS
export interface ButtonProps {
  onClickAction: () => void;
}

export interface BlueButtonProps extends ButtonProps {
  text: string;
  margin?: string;
  type?: "button" | "submit";
}

export interface ActionButtonProps extends ButtonProps {
  number: number;
}

// FORMS
export interface FormArticleProps {
  title: string;
  article: string;
}

export interface FormValues {
  username: string;
}

export interface UsernameInputProps {
  register: UseFormRegister<FormValues>;
  error: FieldError | undefined;
  trigger: UseFormTrigger<FormValues>;
}

// OTHER COMPONENTS
export interface BlogAuthorProps {
  date: Date;
  name: string;
}