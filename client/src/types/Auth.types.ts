import { JwtPayload } from "jwt-decode";
import { User, UserConnected } from "./User.types";
import { FocusEventHandler } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";

export interface InputProps {
  register: UseFormRegisterReturn;
  error:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<FieldValues>>
    | undefined;
  trigger: FocusEventHandler<HTMLInputElement>;
}

export interface PasswordInputProps extends InputProps {
  showPassword: boolean;
  onClickAction: () => void;
  placeholder: string;
}


export interface MyJwtPayload extends JwtPayload {
  id: string;
  token: string;
}

export type UseAuthReturn = {
  user: UserConnected;
  signin: (
    user: User,
    showInvalidCredentialsError: () => void,
    showServerError: () => void
  ) => void;
  logout: () => void;
}