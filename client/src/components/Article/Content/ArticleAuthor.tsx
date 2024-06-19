import { Avatar, HStack, Text } from "@chakra-ui/react";
import { BlogAuthorProps } from "../../../types/User.types";
import { grey_color } from "../../../assets/customColors";

export default function BlogAuthor({ name, date }: BlogAuthorProps) {
  return (
    <HStack
      marginTop="2"
      spacing="2"
      display="flex"
      alignItems="center"
      justifyContent="start"
    >
      <Avatar size="sm" />
      <Text fontWeight="medium" color={grey_color}>
        {name} - {date.toLocaleDateString()}
      </Text>
    </HStack>
  );
}
