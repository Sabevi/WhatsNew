import { FocusEventHandler } from "react";
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister, UseFormRegisterReturn, UseFormTrigger } from "react-hook-form";

// BUTTONS
export interface ButtonProps {
  onClickAction: () => void;
}

export interface BlueButtonProps extends ButtonProps {
  text: string;
  margin?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export interface ActionButtonProps extends ButtonProps {
  number: number;
}

export interface FormArticleProps {
  title: string;
  article: string;
}

export interface BlogAuthorProps {
  date: Date;
  name: string;
}

// AUTHENTICATION
export interface FormValues {
  username: string;
}

export interface InputFieldProps {
  register: UseFormRegisterReturn;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<FormValues>> | undefined;
  trigger: FocusEventHandler<HTMLInputElement>;
}

export interface PasswordInputProps extends InputFieldProps {
  showPassword: boolean;
  onClickAction: () => void;
  placeholder: string;
}