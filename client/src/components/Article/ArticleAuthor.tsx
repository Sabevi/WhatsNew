import { HStack, Image, Text } from "@chakra-ui/react";

interface BlogAuthorProps {
    date: Date;
    name: string;
  }
  
  export default function BlogAuthor (props: BlogAuthorProps) {
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
          alt={`Avatar of ${props.name}`}
        />
        <Text fontWeight="medium">{props.name}</Text>
        <Text>—</Text>
        <Text>{props.date.toLocaleDateString()}</Text>
      </HStack>
    );
  };