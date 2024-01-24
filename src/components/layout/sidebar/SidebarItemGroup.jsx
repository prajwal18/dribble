import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SidebarListItem from "./SidebarListItem";

const SidebarItemGroup = ({ name, logo, list }) => {
  return (
    <Box px={4}>
      {name && logo && (
        <Flex
          align="center"
          justifyContent="space-between"
          gap={2}
          p={2}
        >
          <Text color="gray.500" fontSize="xl">
            {name}
          </Text>
          {logo()}
        </Flex>
      )}
      {list.map((item) => (
        <React.Fragment key={item.id}>
          <SidebarListItem name={item.name} icon={item.icon} to={item.to} />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SidebarItemGroup;
