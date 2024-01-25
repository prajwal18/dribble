import React from "react";
import { Box, Flex, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import FeedMenu from "./FeedMenu";

const Feed = ({ title, subtitle, image }) => {
  return (
    <GridItem w="100%" p={4}>
      <Stack spacing={2}>
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          height="250px"
          borderRadius="20px"
        />
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Text fontSize="lg">{title}</Text>
            <Text fontSize="md" color="gray.700">
              {subtitle}
            </Text>
          </Box>
          <FeedMenu />
        </Flex>
      </Stack>
    </GridItem>
  );
};

export default Feed;
