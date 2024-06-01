import { Box, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <Box textAlign="center" mt="5">
      <Heading as="h1" size="xl" mb="5">
        404 - Article Not Found
      </Heading>
      <Button colorScheme="blue" onClick={goBack}>
        Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
