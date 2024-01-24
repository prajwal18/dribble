import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarListItem = ({ name, icon, to }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };
  return (
    <Flex
      cursor="pointer"
      sx={{ "&:hover": { background: "gray.200" } }}
      onClick={handleClick}
      gap={4}
      p={2}
    >
      {icon()}
      <Text fontSize="lg">{name}</Text>
    </Flex>
  );
};

export default SidebarListItem;
