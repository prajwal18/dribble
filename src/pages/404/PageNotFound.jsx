import React from "react";
import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

// lottie file
import lottie_file from "../../assets/lottie/404_lottie.json";
// lottie file

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Center h="80vh" gap={10}>
      <Stack spacing={2}>
        <Text fontSize="2xl" fontWeight="700" color="blue.500">
          404 Error
        </Text>
        <Text fontSize="5xl" fontWeight="600">
          Page not found
        </Text>
        <Text color="gray.500" fontSize="xl">
          Sorry the page you are looking for cannot be found or has been
          removed.
        </Text>
        <Box paddingTop={5}>
          <Button colorScheme="blue" variant="link" onClick={handleClick}>
            Go Back {"->"}
          </Button>
        </Box>
      </Stack>
      <Lottie animationData={lottie_file} loop={true} />
    </Center>
  );
};

export default PageNotFound;
