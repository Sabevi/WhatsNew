import { Avatar, Box, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import Login from "../components/Auth/Login";
import { blue_color } from "../assets/customColors";

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
          <Avatar bg={blue_color} />
          <Heading color={blue_color}>Login</Heading>
          <Login />
        </Stack>
        <Box>
          New to us?{" "}
          <Link color={blue_color} href="/signup">
            Sign Up
          </Link>
        </Box>
      </Flex>
    </>
  );
}
