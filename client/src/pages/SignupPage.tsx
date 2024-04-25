import { Avatar, Box, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import { blue_color } from "../assets/customColors";
import SignUp from "../components/Auth/Signup";

export default function SignupPage(): JSX.Element {
  return (
    <Box as="main">
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
          <Heading as="h1" color={blue_color}>Sign Up</Heading>
          <SignUp />
        </Stack>
        <Box>
         Already registered ?{" "}
          <Link color={blue_color} href="/login">
            Login
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
