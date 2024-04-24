import { Avatar, Box, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import { _blue } from "../assets/colors";
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
          <Avatar bg={_blue} />
          <Heading color={_blue}>Sign Up</Heading>
          <SignUp />
        </Stack>
        <Box>
         Already registered ?{" "}
          <Link color={_blue} href="/login">
            Login
          </Link>
        </Box>
      </Flex>
    </>
  );
}
