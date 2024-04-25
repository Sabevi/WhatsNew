import { Avatar, Box, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import { blue_color } from "../assets/customColors";
import SignUp from "../components/Auth/Signup";

export default function SignupPage() {
  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg={blue_color} />
          <Heading color={blue_color}>Sign Up</Heading>
          <SignUp />
        </Stack>
        <Box>
         Already registered ?{" "}
          <Link color={blue_color} href="/login">
            Login
          </Link>
        </Box>
      </Flex>
    </>
  );
}
