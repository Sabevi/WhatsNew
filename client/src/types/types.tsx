import { JwtPayload } from "jwt-decode";
import { FocusEventHandler } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";

export interface User {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface UserConnected {
  id: string;
  token: string;
}

// BUTTONS
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

export interface LikeComponentProps extends ButtonProps {
  number: number;
  liked: boolean;
}

export interface CommentComponentProps extends ButtonProps {
  number: number;
}
export interface BlogAuthorProps {
  date: Date;
  name: string;
}

// AUTHENTICATION
export interface FormValues {
  username: string;
  title: string;
  description: string;
}

export interface InputFieldProps {
  register: UseFormRegisterReturn;
  error:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<FormValues>>
    | undefined;
  trigger: FocusEventHandler<HTMLInputElement>;
}

export interface PasswordInputProps extends InputFieldProps {
  showPassword: boolean;
  onClickAction: () => void;
  placeholder: string;
}

export interface ArticleInputsProps {
  titleRegister: UseFormRegisterReturn;
  articleRegister: UseFormRegisterReturn;
  errors: FieldErrorsImpl<FormValues>;
  trigger: (fieldName?: "title" | "description" | ("title" | "description")[]) => void;
}
export interface MyJwtPayload extends JwtPayload {
  id: string;
  token: string;
}


