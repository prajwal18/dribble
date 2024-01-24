import React from "react";
import styled from "@emotion/styled";
import { Stack } from "@chakra-ui/react";

const Container = styled(Stack)({
  marginLeft: "400px",
  width: "calc(100%-400px)",
  minHeight: "100vh",
});

const NavBar = styled(Stack)({
  justifyContent: 'space-between',
});

const MainContainer = () => {
  return <Container p={4}></Container>;
};

export default MainContainer;
