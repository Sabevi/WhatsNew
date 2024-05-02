import { ReactNode } from "react";
import { Flex, Box } from "@chakra-ui/react";

export default function AuthBox({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <Box as="main">
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Flex>
    </Box>
  );
}
