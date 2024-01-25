import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

// ICONS
import SwapVertIcon from "@mui/icons-material/SwapVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// ICONS

const NavbarContainer = styled(Flex)({
  justifyContent: "space-between",
  alignItems: "center",
});

const Navbar = ({ title, }) => {
  return (
    <NavbarContainer>
      <Text fontSize="3xl" fontWeight="700">
        {title}
      </Text>
      <Flex gap={4} align="center">
        <Flex
          gap={2}
          align="center"
          sx={{
            cursor: "pointer",
            p: 2,
            borderRadius: "5px",
            "&:hover": { background: "gray.100" },
          }}
        >
          <SwapVertIcon />
          <Text fontSize="lg">Last Updated</Text>
        </Flex>
        <MoreHorizIcon sx={{ cursor: "pointer" }} />
      </Flex>
    </NavbarContainer>
  );
};

export default Navbar;
