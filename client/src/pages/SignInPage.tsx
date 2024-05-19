import AuthBox from "../components/Auth/AuthBox";
import UsernameInput from "../components/Auth/UsernameInput";
import PasswordInput from "../components/Auth/PasswordInput";
import BlueButton from "../components/Button/BlueButton";
import { Avatar, Heading, Link, Stack, Box } from "@chakra-ui/react";
import { blue_color, white_color } from "../assets/customColors";
import { useState } from "react";
import useSignIn from "../hooks/useSignin";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { User } from "../types/ComponentTypes";
import errorDisplayed from "../config/error";

export default function SignInPage(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({ mode: "onSubmit" });
  const { signin } = useSignIn();

  const usernameRegister = register("username", {
    required: "Username is required",
    maxLength: {
      value: 15,
      message: "Username cannot be more than 15 characters long",
    },
  });

  const passwordRegister = register("password", {
    required: "Password is required",
  });

  const handleShowPassword = () => setShowPassword(!showPassword);

  const showInvalidCredentialsError = () => {
    setSubmitError(errorDisplayed.invalidCredentials);
  };

  const showServerError = () => {
    setSubmitError(errorDisplayed.server);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const user = data as User;
    signin(user, showInvalidCredentialsError, showServerError);
  };

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
        <Box as="form" maxW="400px" onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor={white_color}
            boxShadow="md"
          >
            <UsernameInput
              register={usernameRegister}
              error={errors.username}
              trigger={() => trigger("username")}
            />
            <PasswordInput
              placeholder="Password"
              register={passwordRegister}
              error={errors.password}
              trigger={() => trigger("password")}
              showPassword={showPassword}
              onClickAction={handleShowPassword}
            />
            {submitError && (
              <Box color="red.500" textAlign="center">
                {submitError}
              </Box>
            )}
            <BlueButton
              type="submit"
              text="Sign in"
              margin="0 auto"
              disabled={!isValid}
              style={{
                opacity: !isValid ? 0.5 : 1,
                pointerEvents: !isValid ? "none" : "auto",
              }}
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
