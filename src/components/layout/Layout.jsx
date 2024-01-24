import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import MainContainer from "./main-container/MainContainer";

const Layout = () => {
  return (
    <Box>
      <Sidebar></Sidebar>
      <MainContainer></MainContainer>
    </Box>
  );
};

export default Layout;
