import React from "react";
import { feedData } from "./data";
import { Grid } from "@chakra-ui/react";
import Feed from "./Feed";

const FeedContainer = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {feedData.map((feed) => (
        <React.Fragment key={feed.id}>
          <Feed
            title={feed.title}
            subtitle={feed.subtitle}
            image={feed.image}
          />
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default FeedContainer;
