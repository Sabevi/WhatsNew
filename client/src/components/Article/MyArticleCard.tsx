import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Text,
  useColorModeValue,
  Flex,
  AspectRatio,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { grey_color } from "../../assets/customColors";

export default function MyArticleCard() {
  const navigate = useNavigate();

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
          <CardHeader>
            <Flex width="100%" justifyContent="flex-end" alignItems="center">
              <IconButton
                icon={<Icon as={EditIcon} w={10} />}
                variant="ghost"
                aria-label="Delete"
                onClick={() => navigate("/edit")}
              />
            </Flex>
            <Heading>
              <Text
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                fontSize="3xl"
              >
                My article title
              </Text>
            </Heading>
          </CardHeader>
          <CardBody>
            <Text as="p" marginTop="2" color={grey_color} fontSize="lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book...
            </Text>
          </CardBody>
          <CardFooter>
            <Flex width="100%" justifyContent="flex-end" alignItems="center">
              <IconButton
                icon={<Icon as={DeleteIcon} w={10} />}
                variant="ghost"
                aria-label="Delete"
              />
            </Flex>
          </CardFooter>
        </Flex>
      </Flex>
    </Card>
  );
}
