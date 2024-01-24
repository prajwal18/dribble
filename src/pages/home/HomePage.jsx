import React from "react";
import TopContainer from "./TopContainer";
import { Stack } from "@chakra-ui/react";
import FeedContainer from "./FeedContainer";

const HomePage = () => {
  return (
    <Stack spacing={4}>
      <TopContainer />
      <FeedContainer />
    </Stack>
  );
};

export default HomePage;
