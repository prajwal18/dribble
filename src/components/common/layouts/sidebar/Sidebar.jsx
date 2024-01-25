import React from "react";
import { Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import TopNavbar from "./TopNavbar";

// Sidebar data
import { data } from "./data";
import SearchBar from "./SearchBar";
import SidebarItemGroup from "./SidebarItemGroup";
// Sidebar data

const SidebarContainer = styled(Stack)({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "400px",
  overflow: "auto",
  borderRight: "1px solid #CBD5E0",
});

const Sidebar = () => {
  return (
    <SidebarContainer spacing={4}>
      <TopNavbar />
      <SearchBar />
      {data.map((group) => (
        <React.Fragment key={group.id}>
          <SidebarItemGroup
            name={group.name}
            logo={group.logo}
            list={group.list}
          />
        </React.Fragment>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
