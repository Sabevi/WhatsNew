import { Box, Flex } from "@chakra-ui/react";
import SelectArticles from "../Article/SelectArticles";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";

const LayoutFlex = ({ children }) => (
    <Flex gap={30} justifyContent="space-between" mt="10" ml="10" mr="10">
      {children}
    </Flex>
  );
  
  export default function Layout() {
    return (
      <Box>
        <LayoutFlex>
          <Menu />
          <SelectArticles />
        </LayoutFlex>
        <Outlet />
      </Box>
    );
  }