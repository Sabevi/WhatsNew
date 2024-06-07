import { ReactNode } from "react";
import {
  Box,
  Image,
  useColorModeValue,
  Flex,
  AspectRatio,
  Card,
} from "@chakra-ui/react";

export default function SmallArticleCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Card mt={10}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Flex
          flex="2"
          position="relative"
          alignItems="center"
          direction={{ base: "column", sm: "row" }}
        >
          <AspectRatio
            width={{ base: "80%", sm: "70%" }}
            ml={{ base: "0", sm: "5%" }}
          >
            <Image
              borderRadius="lg"
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              alt="some good alt text"
              objectFit="cover"
            />
          </AspectRatio>
          <Box
            width="90%"
            position="absolute"
            height="100%"
            bgGradient={useColorModeValue(
              "radial(orange.600 1px, transparent 1px)",
              "radial(orange.300 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
          />
        </Flex>
        <Flex flex="3" direction="column" justifyContent="center">
          {children}
        </Flex>
      </Flex>
    </Card>
  );
}
