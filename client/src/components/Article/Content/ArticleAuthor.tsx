import { HStack, Image, Text } from "@chakra-ui/react";
import { BlogAuthorProps } from "../../../types/User.types";

export default function BlogAuthor({name, date}: BlogAuthorProps) {
  return (
    <HStack
      marginTop="2"
      spacing="2"
      display="flex"
      alignItems="center"
      justifyContent="end"
    >
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${name}`}
      />
      <Text fontWeight="medium">{name}</Text>
      <Text>—</Text>
      <Text>{date.toLocaleDateString()}</Text>
    </HStack>
  );
};