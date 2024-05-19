import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Text,
  Flex,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { grey_color } from "../../../assets/customColors";
import SmallArticleCard from "./SmallArticleCard";

export default function MyArticleCard(): JSX.Element {
  const navigate = useNavigate();

  return (
    <SmallArticleCard>
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
            as="h2"
          >
            My article title
          </Text>
        </Heading>
      </CardHeader>
      <CardBody>
        <Text as="p" marginTop="2" color={grey_color} fontSize="lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book...
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
    </SmallArticleCard>
  );
}
