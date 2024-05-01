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
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { light_grey_color } from "../../assets/customColors";

const CFaLock = chakra(FaLock);

export default function PasswordInput({
  placeholder,
  isPasswordVisible,
  showPassword,
  onClickAction,
}): JSX.Element {

  return (
    <FormControl id="Password">
      <VisuallyHidden as={FormLabel}>{placeholder}</VisuallyHidden>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color={light_grey_color}
          children={<CFaLock color={light_grey_color} />}
        />
        <Input type={isPasswordVisible ? "text" : "password"} placeholder={placeholder} />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={onClickAction}>
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      {/* use FormHelperText for message errors*/}
    </FormControl>
  );
}
