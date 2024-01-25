import { Stack } from "@chakra-ui/react";
import React from "react";
import TopContainer from "../components/TopContainer";
import FeedContainer from "../components/FeedContainer";

const BusinessHomePage = () => {
  return (
    <Stack spacing={4}>
      <TopContainer />
      <FeedContainer />
    </Stack>
  );
};

export default BusinessHomePage;
