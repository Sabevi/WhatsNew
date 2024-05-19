import {
  Input,
  InputGroup,
  InputLeftElement,
  chakra,
  FormControl,
  VisuallyHidden,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { light_grey_color } from "../../assets/customColors";
import { InputFieldProps } from "../../types/ComponentTypes";

const CFaUserAlt = chakra(FaUserAlt);

export default function UsernameInput({
  register,
  error,
  trigger,
}: InputFieldProps): JSX.Element {
  return (
    <FormControl id="Username" isInvalid={!!error}>
      <VisuallyHidden as={FormLabel}>Username</VisuallyHidden>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<CFaUserAlt color={light_grey_color} />}
        />
        <Input
          {...register}
          type="text"
          placeholder="Username"
          onBlur={trigger}
          autoComplete="username"
        />
      </InputGroup>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}
