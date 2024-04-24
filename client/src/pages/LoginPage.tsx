import { Avatar, Box, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import Login from "../components/Auth/Login";
import { _blue } from "../assets/colors";

export default function LoginPage() {
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
          <Heading color={_blue}>Login</Heading>
          <Login />
        </Stack>
        <Box>
          New to us?{" "}
          <Link color={_blue} href="/signup">
            Sign Up
          </Link>
        </Box>
      </Flex>
    </>
  );
}
