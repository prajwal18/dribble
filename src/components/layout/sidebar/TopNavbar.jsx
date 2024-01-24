import React from "react";
import { Flex, Text, Center, Box } from "@chakra-ui/react";

// ICONS
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// ICONS

const NotificationIcon = ({ hasNotification }) => {
  return (
    <Box position="relative" cursor="pointer">
      <NotificationsNoneOutlinedIcon sx={{ fontSize: "30px" }} />
      {hasNotification && (
        <Box
          position="absolute"
          top={0}
          right={0}
          h={2}
          width={2}
          borderRadius={"50%"}
          bg="red.400"
        />
      )}
    </Box>
  );
};

const TopNavbar = () => {
  return (
    <Flex
      p={4}
      align={"center"}
      justifyContent={"space-between"}
      borderBottom={"1px solid #CBD5E0"}
    >
      <Flex gap={2} align={"center"}>
        <Center
          p={2}
          sx={{ borderRadius: "5px" }}
          bg={"tomato"}
          cursor={"pointer"}
        >
          <Text fontSize="xl" color="white">
            PG
          </Text>
        </Center>
        <Text fontSize="xl">Prajwal Gautam</Text>
        <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
      </Flex>
      <NotificationIcon hasNotification />
    </Flex>
  );
};

export default TopNavbar;
