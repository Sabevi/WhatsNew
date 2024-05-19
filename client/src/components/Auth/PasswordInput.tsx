import {
  Input,
  InputGroup,
  InputLeftElement,
  chakra,
  FormControl,
  InputRightElement,
  Button,
  VisuallyHidden,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { light_grey_color } from "../../assets/customColors";
import { PasswordInputProps } from "../../types/types";

const CFaLock = chakra(FaLock);

export default function PasswordInput({
  register,
  error,
  trigger,
  placeholder,
  showPassword,
  onClickAction,
} : PasswordInputProps): JSX.Element {
  return (
    <FormControl id={placeholder} isInvalid={!!error}>
      <VisuallyHidden as={FormLabel}>{placeholder}</VisuallyHidden>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color={light_grey_color}
          children={<CFaLock color={light_grey_color} />}
        />
        <Input
          {...register}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          onBlur={trigger}
          autoComplete="new-password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={onClickAction}>
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}
