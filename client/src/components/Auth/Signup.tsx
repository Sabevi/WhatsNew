import { useState } from "react";
import {
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { light_grey_color, white_color } from "../../assets/customColors";
import { useNavigate } from "react-router-dom";
import BlueButton from "../Button/BlueButton";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Box minW={{ base: "90%", md: "468px" }}>
      <form>
        <Stack
          spacing={4}
          p="1rem"
          backgroundColor={white_color}
          boxShadow="md"
        >
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<CFaUserAlt color={light_grey_color} />}
              />
              <Input type="email" placeholder="email address" />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color={light_grey_color}
                children={<CFaLock color={light_grey_color} />}
              />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color={light_grey_color}
                children={<CFaLock color={light_grey_color} />}
              />
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showConfirmPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {/* use FormHelperText for message errors*/}
          </FormControl>
          <BlueButton
            text="Sign up"
            onClickAction={() => navigate("/")}
            margin="0 auto"
          />
        </Stack>
      </form>
    </Box>
  );
}
