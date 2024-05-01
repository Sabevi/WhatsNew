import AuthBox from "../components/Auth/AuthBox";
import UsernameInput from "../components/Auth/UsernameInput";
import PasswordInput from "../components/Auth/PasswordInput";
import BlueButton from "../components/Button/BlueButton";
import { useNavigate } from "react-router-dom";
import { Avatar, Heading, Link, Stack, Box } from "@chakra-ui/react";
import { blue_color, white_color } from "../assets/customColors";

export default function SignInPage(): JSX.Element {
  const navigate = useNavigate();
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
          Sign in
        </Heading>
        <Box as="form" maxW="400px">
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor={white_color}
            boxShadow="md"
          >
            <UsernameInput />
            <PasswordInput
              placeholder="Password"
              isPasswordVisible="blabla"
              showPassword="blabla"
              onClickAction="blabla"
            />
            <BlueButton
              text="Sign in"
              onClickAction={() => navigate("/")}
              margin="0 auto"
            />
          </Stack>
        </Box>
      </Stack>
      <Box>
        Not registered yet ?{" "}
        <Link color={blue_color} href="/signup">
          Sign up
        </Link>
      </Box>
    </AuthBox>
  );
}
