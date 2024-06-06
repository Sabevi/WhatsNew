import { FocusEventHandler } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";

export interface FormValues {
  username: string;
  title: string;
  description: string;
  id: string | undefined;
}

export interface InputFieldProps {
  register: UseFormRegisterReturn;
  error:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<FormValues>>
    | undefined;
  trigger: FocusEventHandler<HTMLInputElement>;
}
