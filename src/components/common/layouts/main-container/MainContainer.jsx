import React from "react";
import styled from "@emotion/styled";
import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Container = styled(Stack)({
  marginLeft: "400px",
  width: "calc(100%-400px)",
  minHeight: "100vh",
});

const MainContainer = ({ children }) => {
  return (
    <Container p={6} spacing={4}>
      {children}
    </Container>
  );
};

export default MainContainer;
