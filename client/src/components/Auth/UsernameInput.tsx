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
import { UsernameInputProps } from "../../types/ComponentTypes";

const CFaUserAlt = chakra(FaUserAlt);

export default function UsernameInput({
  register,
  error,
  trigger,
}: UsernameInputProps): JSX.Element {
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
          onBlur={() => {
            console.log("Triggering validation for username");
            trigger("username");
          }}
        />
      </InputGroup>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}
