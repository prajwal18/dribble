import React from "react";
import { Box, GridItem, Text } from "@chakra-ui/react";

const Option = ({ title, subtitle, logo }) => {
  return (
    <GridItem
      w="100%"
      p={4}
      display="flex"
      sx={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "gray.200",
      }}
      alignItems={"center"}
      borderRadius="5px"
      gap={2}
    >
      {logo()}
      <Box>
        <Text fontSize="lg">{title}</Text>
        <Text fontSize="md" color="gray.500">
          {subtitle}
        </Text>
      </Box>
    </GridItem>
  );
};

export default Option;
