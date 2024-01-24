import React from "react";
import { topOptions } from "./data";
import { Grid } from "@chakra-ui/react";
import Option from "./Option";

const TopContainer = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {topOptions.map((option) => (
        <React.Fragment key={option.id}>
          <Option
            title={option.title}
            subtitle={option.subtitle}
            logo={option.logo}
          />
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default TopContainer;
