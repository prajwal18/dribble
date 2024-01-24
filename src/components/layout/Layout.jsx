import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import MainContainer from "./main-container/MainContainer";

const Layout = ({ children }) => {
  return (
    <Box>
      <Sidebar />
      <MainContainer>{children}</MainContainer>
    </Box>
  );
};

export default Layout;
