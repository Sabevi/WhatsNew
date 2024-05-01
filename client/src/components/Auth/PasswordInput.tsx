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
import { useState } from "react";

const CFaLock = chakra(FaLock);

export default function PasswordInput(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <FormControl id="Password">
      <VisuallyHidden as={FormLabel}>Username</VisuallyHidden>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color={light_grey_color}
          children={<CFaLock color={light_grey_color} />}
        />
        <Input type={true ? "text" : "password"} placeholder="Password" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleShowClick}>
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      {/* use FormHelperText for message errors*/}
    </FormControl>
  );
}
