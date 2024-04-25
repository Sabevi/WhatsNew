import {
  Input,
  InputGroup,
  InputLeftElement,
  chakra,
  FormControl,
  VisuallyHidden,
  FormLabel,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { light_grey_color } from "../../assets/customColors";

const CFaUserAlt = chakra(FaUserAlt);

export default function UsernameInput() {
  return (
    <FormControl id="Username">
      <VisuallyHidden as={FormLabel}>Username</VisuallyHidden>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<CFaUserAlt color={light_grey_color} />}
        />
        <Input type="text" placeholder="Username" />
      </InputGroup>
    </FormControl>
  );
}
