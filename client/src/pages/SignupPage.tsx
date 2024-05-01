import AuthBox from "../components/Auth/AuthBox";
import { useState } from "react";
import {
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  chakra,
  FormControl,
  InputRightElement,
  Avatar,
  Heading,
  Link,
  Stack,
  Box,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UsernameInput from "../components/Auth/UsernameInput";
import PasswordInput from "../components/Auth/PasswordInput";
import {
  light_grey_color,
  blue_color,
  white_color,
} from "../assets/customColors";
import BlueButton from "../components/Button/BlueButton";

export default function SignupPage(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  const CFaLock = chakra(FaLock);

  return (
    <AuthBox>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg={blue_color} />
        <Heading as="h1" color={blue_color}>
          Sign up
        </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor={white_color}
              boxShadow="md"
            >
              <UsernameInput />
              <PasswordInput />
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
                onClickAction={() => navigate("/signin")}
                margin="0 auto"
              />
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already registered ?{" "}
        <Link color={blue_color} href="/signin">
          Sign in
        </Link>
      </Box>
    </AuthBox>
  );
}
