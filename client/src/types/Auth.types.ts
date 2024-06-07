import { JwtPayload } from "jwt-decode";
import { InputFieldProps } from "./common/Input.types";
import { User, UserConnected } from "./User.types";
export interface PasswordInputProps extends InputFieldProps {
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