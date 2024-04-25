import { Box, Flex } from "@chakra-ui/react";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";

export default function Layout(): JSX.Element {
  return (
    <Box>
      <Flex justifyContent="flex-start" mt="10" ml="10" mr="10">
        <Menu />
      </Flex>
      <Outlet />
    </Box>
  );
}