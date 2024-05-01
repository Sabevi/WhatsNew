import AuthBox from "../components/Auth/AuthBox";
import { useState } from "react";
import { Avatar, Heading, Link, Stack, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import UsernameInput from "../components/Auth/UsernameInput";
import PasswordInput from "../components/Auth/PasswordInput";
import { blue_color, white_color } from "../assets/customColors";
import BlueButton from "../components/Button/BlueButton";
import { useForm } from "react-hook-form";

export default function SignupPage(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onSubmit" });

  const usernameRegister = register("username", {
    required: "Username is required",
    maxLength: {
      value: 45,
      message: "Username cannot be more than 45 characters long",
    },
  });

  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,64}$/;
  const passwordRegister = register("password", {
    required: "Password is required",
    pattern: {
      value: PASSWORD_REGEX,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be between 8 and 64 characters long",
    },
  });

  const password = watch("password");
  const passwordConfirmRegister = register("confirmPassword", {
    required: "Password confirmation is required",
    validate: (value) => value === password || "Passwords do not match",
  });

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = (user) => {
    console.log("Form data:", user);
    // handle form submission here
    () => navigate("/signin");
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
          Sign up
        </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                register={passwordRegister}
                error={errors.password}
                trigger={() => trigger("password")}
                placeholder="Password"
                showPassword={showPassword}
                onClickAction={handleShowPassword}
              />
              <PasswordInput
                register={passwordConfirmRegister}
                error={errors.confirmPassword}
                trigger={() => trigger("confirmPassword")}
                placeholder="Confirm Password"
                showPassword={showConfirmPassword}
                onClickAction={handleShowConfirmPassword}
              />
              <BlueButton
                type="submit"
                text="Sign up"
                onClickAction={onSubmit}
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
