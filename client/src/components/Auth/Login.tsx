import { useNavigate } from "react-router-dom";
import { Stack, Box } from "@chakra-ui/react";
import { white_color } from "../../assets/customColors";
import BlueButton from "../Button/BlueButton";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";

export default function Login() {
  const navigate = useNavigate();

  return (
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
          <BlueButton
            text="Login"
            onClickAction={() => navigate("/")}
            margin="0 auto"
          />
        </Stack>
      </form>
    </Box>
  );
}
