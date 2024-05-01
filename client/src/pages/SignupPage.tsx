import AuthBox from "../components/Auth/AuthBox";
import { useState } from "react";
import { Avatar, Heading, Link, Stack, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import UsernameInput from "../components/Auth/UsernameInput";
import PasswordInput from "../components/Auth/PasswordInput";
import { blue_color, white_color } from "../assets/customColors";
import BlueButton from "../components/Button/BlueButton";

export default function SignupPage(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

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
              <PasswordInput
                placeholder="Password"
                isPasswordVisible={showPassword}
                showPassword={showPassword}
                onClickAction={handleShowPassword}
              />
              <PasswordInput
                placeholder="Confirm Password"
                isPasswordVisible={showConfirmPassword}
                showPassword={showConfirmPassword}
                onClickAction={handleShowConfirmPassword}
              />
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
